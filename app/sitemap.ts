import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.whatstask.com'
  const currentDate = new Date().toISOString()

  // Core pages - highest priority
  const corePages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/project-management', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/geoanalyzer', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/pricing', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/enterprise', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
  ]

  // GEO content - high priority for authority building
  const geoPages = [
    { url: '/geoanalyzer/guide', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/blog/what-is-geo', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/blog/geo-vs-seo', priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  // Tools pages - traffic funnel
  const toolPages = [
    { url: '/tools', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/pdf-merger', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/pdf-compressor', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/pdf-to-jpg', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/jpg-to-pdf', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/pdf-splitter', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/qr-code-generator', priority: 0.7, changeFrequency: 'monthly' as const },
  ]

  // Comparison pages - SEO competitive pages
  const comparisonPages = [
    { url: '/compare/clickup', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/compare/monday', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/compare/asana', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/compare/notion', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/compare/todoist', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/compare/skeddy', priority: 0.6, changeFrequency: 'monthly' as const },
  ]

  // Use case pages
  const useCasePages = [
    { url: '/use-cases/freelancers', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/use-cases/agencies', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/use-cases/startups', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/use-cases/enterprise', priority: 0.7, changeFrequency: 'monthly' as const },
  ]

  // Solutions pages - team and company size targeting
  const solutionPages = [
    { url: '/solutions/marketing', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/solutions/development', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/solutions/remote', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/solutions/small-teams', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/solutions/operations', priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  // Trust and resource pages
  const trustPages = [
    { url: '/security', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/help', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/templates', priority: 0.8, changeFrequency: 'weekly' as const },
  ]

  // Blog and content pages
  const blogPages = [
    { url: '/blog', priority: 0.6, changeFrequency: 'weekly' as const },
    { url: '/blog/ultimate-guide-telegram-bots-productivity', priority: 0.6, changeFrequency: 'monthly' as const },
  ]

  // Other pages
  const otherPages = [
    { url: '/features', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/how-it-works', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/founder', priority: 0.5, changeFrequency: 'monthly' as const },
    { url: '/consulting', priority: 0.5, changeFrequency: 'monthly' as const },
    { url: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  const allPages = [
    ...corePages,
    ...geoPages,
    ...toolPages,
    ...comparisonPages,
    ...useCasePages,
    ...solutionPages,
    ...trustPages,
    ...blogPages,
    ...otherPages,
  ]

  return allPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
