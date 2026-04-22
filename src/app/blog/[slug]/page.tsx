import { notFound } from 'next/navigation'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import { Navbar } from '@/features/landing/components/Navbar'
import { Footer } from '@/features/landing/components/Footer'
import { ArticleDetailPage } from '@/features/blog/ArticleDetailPage'
import { articles } from '@/features/blog/data'
import { articleContent } from '@/features/blog/content'

interface Props {
  params: Promise<{ slug: string }>
}

const MONTHS: Record<string, string> = {
  ene: '01', feb: '02', mar: '03', abr: '04', may: '05', jun: '06',
  jul: '07', ago: '08', sep: '09', oct: '10', nov: '11', dic: '12',
}

function toISODate(date: string): string {
  const [day, mon, year] = date.split(' ')
  return `${year}-${MONTHS[mon] ?? '01'}-${day.padStart(2, '0')}`
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: `${article.title} | Consultto Blog`,
    description: article.excerpt,
    alternates: { canonical: `https://consultto.com/blog/${slug}` },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  const content = articleContent.find((c) => c.slug === slug)

  if (!article || !content) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    author: { '@type': 'Person', name: article.author },
    publisher: {
      '@type': 'Organization',
      name: 'Consultto',
      logo: { '@type': 'ImageObject', url: 'https://consultto.com/logo.png' },
    },
    datePublished: toISODate(article.date),
    dateModified: toISODate(article.date),
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://consultto.com/blog/${article.slug}` },
  }

  return (
    <LanguageProvider>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ArticleDetailPage article={article} content={content} />
      <Footer />
    </LanguageProvider>
  )
}
