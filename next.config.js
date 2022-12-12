/** @type {import('next').NextConfig} */

const securityHeaders = [{ key: "Access-Control-Allow-Origin", value: "*" }];

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["bg"],
    defaultLocale: "bg",
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
