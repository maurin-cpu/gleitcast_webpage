import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // PostHog-Endpoints vertragen keinen Trailing-Slash-Redirect.
  skipTrailingSlashRedirect: true,
  // Reverse-Proxy: Tracking läuft first-party über wingcast.ch/ingest statt
  // direkt an eu.i.posthog.com → wird von Adblockern/Privacy-Browsern nicht
  // geblockt. Ziel ist fest die EU-Cloud (Frankfurt).
  //
  // Plain-Array = afterFiles: greift NACH statischen Dateien, aber VOR den
  // dynamischen [locale]-Routen — daher landet /ingest/* hier und nicht in der
  // Locale-Logik. Das ist PostHogs dokumentierte Form und funktioniert auf
  // Vercel zuverlässig (externe beforeFiles-Rewrites tun das dort nicht immer).
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
    ];
  },
};

export default withNextIntl(nextConfig);
