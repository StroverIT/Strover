/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    nextScriptWorkers: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["bg"],
    defaultLocale: "bg",
  },
};

module.exports = nextConfig;
