import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Google AdSense crawlers — explicit allow to ensure verification succeeds
      { userAgent: 'Mediapartners-Google', allow: '/' },
      { userAgent: 'AdsBot-Google', allow: '/' },
      { userAgent: 'AdsBot-Google-Mobile', allow: '/' },
      { userAgent: 'Googlebot', allow: '/', disallow: ['/api/', '/analyzing'] },
      // All other crawlers
      { userAgent: '*', allow: '/', disallow: ['/api/', '/analyzing'] }
    ],
    sitemap: 'https://loveredflags.com/sitemap.xml',
    host: 'https://loveredflags.com'
  }
}
