/** @type {import('next').NextConfig} */

const securityHeaders = [
  { key: "Access-Control-Allow-Origin", value: "*" },
  { key: "X-Frame-Options", value: "ALLOW-FROM https://facebook.com" },
  { key: "X-Frame-Options", value: "ALLOW-FROM https://softoffice.bg" },

  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Frame-Options", value: "ALOWWALL" },


];

const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,

  swcMinify: true,
  i18n: {
    locales: ["bg"],
    defaultLocale: "bg",
  },
  images:{
    domains: ["lh3.googleusercontent.com"]
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
