/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

const securityHeaders = [
  { key: "Access-Control-Allow-Origin", value: "*" },
  { key: "X-Frame-Options", value: "ALLOW-FROM https://facebook.com" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
];

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
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
