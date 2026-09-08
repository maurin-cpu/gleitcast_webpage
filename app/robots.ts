import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "anthropic-ai",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
          "CCBot",
          "Bytespider",
          "cohere-ai",
        ],
        allow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
        // Nur /api/ sperren. /_next/ stand hier frueher mit drin — damit kam
        // Googlebot nicht mehr an die JS-/CSS-Chunks und rief die Seiten
        // unfertig gerendert ab. Google verlangt ausdruecklich Zugriff auf die
        // Render-Ressourcen; die Chunks selbst landen ohnehin nicht im Index.
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
