/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://strover.bg",
  generateRobotsTxt: true, // (optional)
  exclude: [
    "/legal/terms-and-conditions",
    "/legal/privacy-policy",
    "/legal/cookie-policy",

    "/web/thanks",
    "/web/thanks-christmas",
    "/web/promotions",

    "/brands/digital",
    "/brands/academy",
  ],
  // ...other options
};
