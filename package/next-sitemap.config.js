const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://creditoracademy.com';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    '/admin/*',
    '/api/*',
    '/signin',
    '/signup',
    '/forgot-password',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    additionalSitemaps: [],
  },
};

