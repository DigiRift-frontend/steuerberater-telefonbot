import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/rechner/ergebnis", "/leitfaden/download"],
      },
    ],
    sitemap: "https://steuerberater-telefonbot.de/sitemap.xml",
  };
}
