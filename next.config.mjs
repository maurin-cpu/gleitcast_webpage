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
  // geblockt. Ziel ist fest die EU-Cloud (Frankfurt). beforeFiles, damit die
  // Regeln vor den [locale]-Routen greifen.
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/ingest/static/:path*",
          destination: "https://eu-assets.i.posthog.com/static/:path*",
        },
        {
          source: "/ingest/:path*",
          destination: "https://eu.i.posthog.com/:path*",
        },
      ],
    };
  },
};

export default withNextIntl(nextConfig);
