/** @type {import('next').NextConfig} */

const securityHeaders = [
  { key: "Access-Control-Allow-Origin", value: "*" },
  { key: "X-Frame-Options", value: "ALLOW-FROM https://facebook.com" },
  { key: "X-Frame-Options", value: "ALLOW-FROM https://softoffice.bg" },

  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Frame-Options", value: "ALOWWALL" },


];

const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.infrastructureLogging = {
        level: "error",
    };
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config;
},
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
