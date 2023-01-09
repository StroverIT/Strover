/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://strover.bg",
  generateRobotsTxt: true, // (optional)
  exclude: [
    "/terms-and-conditions",
    "/privacy-policy",
    "/web/thanks",
    "/web/thanks-christmas",
    "/cookie-policy",
    "/web/promotions",
  ],
  // ...other options
};
