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
    '/about',
    '/blog',
    '/blog/*',
  ],
  additionalPaths: async () => [
    { loc: '/llms.txt', changefreq: 'weekly', priority: 0.3 },
    { loc: '/llms-full.txt', changefreq: 'weekly', priority: 0.3 },
  ],
  robotsTxtOptions: {
    policies: [
      '*',
      'GPTBot',
      'OAI-SearchBot',
      'ChatGPT-User',
      'PerplexityBot',
      'ClaudeBot',
      'Google-Extended',
      'Applebot-Extended',
      'Bingbot',
    ].map((userAgent) => ({
      userAgent,
      allow: '/',
      disallow: ['/admin/', '/api/'],
    })),
    additionalSitemaps: [],
    transformRobotsTxt: async (_config, robotsTxt) =>
      `${robotsTxt.trim()}\n\n# https://creditoracademy.com/llms.txt\n# https://creditoracademy.com/llms-full.txt\n`,
  },
};
