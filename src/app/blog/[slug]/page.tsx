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
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  const content = articleContent.find((c) => c.slug === slug)

  if (!article || !content) notFound()

  return (
    <LanguageProvider>
      <Navbar />
      <ArticleDetailPage article={article} content={content} />
      <Footer />
    </LanguageProvider>
  )
}
