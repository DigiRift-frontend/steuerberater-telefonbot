import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const CRM_EBOOK_URL = "https://digicrm.wirbauensoftware.de/api/ebook/send";
const SITE_DOMAIN = "steuerberater-telefonbot.de";
const QUIZ_TITLE = "Dein Kanzlei-Status-Check Ergebnis";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function maskEmail(email: string): string {
  const [local, domain] = email.split("@");
  if (!local || !domain) return "***";
  const masked = local.length > 2 ? `${local[0]}***${local.slice(-1)}` : "***";
  return `${masked}@${domain}`;
}

interface QuizSubmitPayload {
  email: string;
  praxisName?: string;
  name?: string;
  quizAnswers: Record<string, number>;
  quizScore: number;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as QuizSubmitPayload;
    const email = (body.email || "").trim();

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Ungültige E-Mail-Adresse." },
        { status: 400 },
      );
    }

    const jwtSecret = process.env.QUIZ_JWT_SECRET;
    const crmApiKey = process.env.DIGICRM_API_KEY;
    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || `https://${SITE_DOMAIN}`;

    if (!jwtSecret) {
      console.error("[RECHNER-SUBMIT] QUIZ_JWT_SECRET missing");
      return NextResponse.json(
        { error: "Server-Konfiguration fehlt." },
        { status: 500 },
      );
    }

    if (!crmApiKey) {
      console.error("[RECHNER-SUBMIT] DIGICRM_API_KEY missing");
      return NextResponse.json(
        { error: "CRM-Konfiguration fehlt." },
        { status: 500 },
      );
    }

    // Name -> firstName/lastName
    const nameParts = (body.name || "").trim().split(/\s+/).filter(Boolean);
    const firstName = nameParts[0] || "Interessent";
    const lastName =
      nameParts.length > 1 ? nameParts.slice(1).join(" ") : "(Kostenrechner)";
    const praxisName = (body.praxisName || "").trim();

    const token = jwt.sign(
      {
        email,
        praxisName,
        quizAnswers: body.quizAnswers,
        quizScore: body.quizScore,
        type: "quiz",
      },
      jwtSecret,
      { expiresIn: "7d", algorithm: "HS256" },
    );
    const resultUrl = `${siteUrl}/rechner/ergebnis?t=${token}`;

    const a = body.quizAnswers || {};
    const descLines: string[] = [
      `Kostenrechner-Ergebnis: ~${(body.quizScore ?? 0).toLocaleString("de-DE")} EUR Verlust/Monat`,
    ];
    Object.entries(a).forEach(([key, value]) => {
      descLines.push(`${key}: ${value}`);
    });
    const description = descLines.join("\n");

    const crmRes = await fetch(CRM_EBOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${crmApiKey}`,
      },
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        company: praxisName,
        ebookTitle: QUIZ_TITLE,
        downloadUrl: resultUrl,
        wantsNewsletter: true,
        magnetType: "QUIZ",
        description,
        sourceTag: SITE_DOMAIN,
        category: "KI-Status-Check",
      }),
    });

    const crmData = (await crmRes.json().catch(() => ({}))) as {
      success?: boolean;
      emailSent?: boolean;
    };

    console.log(
      "[RECHNER-SUBMIT]",
      crmRes.status,
      maskEmail(email),
      JSON.stringify({
        emailSent: crmData.emailSent ?? false,
        quizScore: body.quizScore,
      }),
    );

    if (!crmRes.ok) {
      return NextResponse.json(
        { error: "Bestätigungs-Mail konnte nicht versendet werden." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      emailSent: crmData.emailSent ?? true,
    });
  } catch (err) {
    console.error("[RECHNER-SUBMIT] Error:", err);
    return NextResponse.json(
      { error: "Interner Serverfehler." },
      { status: 500 },
    );
  }
}
