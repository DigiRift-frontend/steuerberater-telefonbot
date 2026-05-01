import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const CRM_EBOOK_URL = "https://digicrm.wirbauensoftware.de/api/ebook/send";
const SITE_DOMAIN = "steuerberater-telefonbot.de";
const EBOOK_TITLE = "KI-Leitfaden für Steuerkanzleien";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function maskEmail(email: string): string {
  const [local, domain] = email.split("@");
  if (!local || !domain) return "***";
  const masked = local.length > 2 ? `${local[0]}***${local.slice(-1)}` : "***";
  return `${masked}@${domain}`;
}

interface SubmitBody {
  email: string;
  praxisName?: string;
  firstName?: string;
  newsletterOptIn?: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as SubmitBody;
    const email = (body.email || "").trim();
    const firstName = (body.firstName || "").trim() || "Interessent";
    const praxisName = (body.praxisName || "").trim();
    const wantsNewsletter = body.newsletterOptIn !== false;

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
      console.error("[LEITFADEN-SUBMIT] QUIZ_JWT_SECRET missing");
      return NextResponse.json(
        { error: "Server-Konfiguration fehlt." },
        { status: 500 },
      );
    }

    if (!crmApiKey) {
      console.error("[LEITFADEN-SUBMIT] DIGICRM_API_KEY missing");
      return NextResponse.json(
        { error: "CRM-Konfiguration fehlt." },
        { status: 500 },
      );
    }

    const token = jwt.sign(
      { email, praxisName, type: "ebook" },
      jwtSecret,
      { expiresIn: "7d", algorithm: "HS256" },
    );
    const downloadUrl = `${siteUrl}/leitfaden/download?t=${token}`;

    const crmRes = await fetch(CRM_EBOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${crmApiKey}`,
      },
      body: JSON.stringify({
        email,
        firstName,
        company: praxisName,
        ebookTitle: EBOOK_TITLE,
        downloadUrl,
        wantsNewsletter,
        magnetType: "EBOOK",
        sourceTag: SITE_DOMAIN,
        category: "Infomaterial Download",
      }),
    });

    const crmData = (await crmRes.json().catch(() => ({}))) as {
      success?: boolean;
      emailSent?: boolean;
    };

    console.log(
      "[LEITFADEN-SUBMIT]",
      crmRes.status,
      maskEmail(email),
      JSON.stringify({
        emailSent: crmData.emailSent ?? false,
        wantsNewsletter,
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
    console.error("[LEITFADEN-SUBMIT] Error:", err);
    return NextResponse.json(
      { error: "Interner Serverfehler." },
      { status: 500 },
    );
  }
}
