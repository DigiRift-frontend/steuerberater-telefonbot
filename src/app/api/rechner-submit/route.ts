import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const DIGILETTER_URL = "https://newsletter.wirbauensoftware.de/api/v1/subscribe";
const DIGILETTER_API_KEY = process.env.DIGILETTER_API_KEY || "";
const DIGILETTER_LIST_ID = "cmnhhpi9q0007mz01wlwi908a";
const JWT_SECRET = process.env.QUIZ_JWT_SECRET || "missing-secret";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://steuerberater-telefonbot.de";

interface QuizSubmitPayload {
  email: string;
  praxisName?: string;
  name?: string;
  quizAnswers: Record<string, number>;
  quizScore: number;
}

export async function POST(request: Request) {
  try {
    const body: QuizSubmitPayload = await request.json();

    if (!body.email || !body.email.includes("@")) {
      return NextResponse.json({ error: "Ungültige E-Mail-Adresse" }, { status: 400 });
    }

    const token = jwt.sign(
      {
        email: body.email,
        praxisName: body.praxisName,
        quizAnswers: body.quizAnswers,
        quizScore: body.quizScore,
      },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    const resultUrl = `${SITE_URL}/rechner/ergebnis?t=${token}`;

    const nameParts = (body.name || "").trim().split(" ");
    const firstName = nameParts[0] || undefined;
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : undefined;

    let alreadyConfirmed = false;

    if (DIGILETTER_API_KEY) {
      try {
        const res = await fetch(DIGILETTER_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${DIGILETTER_API_KEY}`,
          },
          body: JSON.stringify({
            email: body.email,
            firstName,
            lastName,
            tags: ["steuerberater-telefonbot", "quelle-kostenrechner"],
            listId: DIGILETTER_LIST_ID,
            redirectUrl: resultUrl,
          }),
        });
        const data = await res.json();
        console.log("[QUIZ-DIGILETTER]", res.status, JSON.stringify(data));

        if (data.status === "confirmed") {
          alreadyConfirmed = true;
        }
      } catch (err) {
        console.error("[QUIZ-DIGILETTER] Error:", err);
      }
    }

    console.log("[QUIZ-SUBMIT]", JSON.stringify({
      timestamp: new Date().toISOString(),
      email: body.email,
      praxisName: body.praxisName,
      quizScore: body.quizScore,
      alreadyConfirmed,
    }));

    return NextResponse.json({
      success: true,
      alreadyConfirmed,
      resultUrl: alreadyConfirmed ? resultUrl : undefined,
    });
  } catch {
    return NextResponse.json({ error: "Server-Fehler" }, { status: 500 });
  }
}
