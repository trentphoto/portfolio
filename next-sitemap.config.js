/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */
module.exports = {
    siteUrl: 'https://jamestrent.net',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [{ userAgent: '*', allow: '/' }],
    },
  };