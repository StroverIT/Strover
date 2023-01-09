/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://strover.bg",
  generateRobotsTxt: true, // (optional)
  exclude: [
    "/legal/terms-and-conditions",
    "/legal/privacy-policy",
    "/web/thanks",
    "/web/thanks-christmas",
    "/legal/cookie-policy",
    "/web/promotions",
  ],
  // ...other options
};
