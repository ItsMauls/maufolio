/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://mauportofolio.site',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    },
  };