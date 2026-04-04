'use client'

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from '@react-pdf/renderer'
import { Article } from './data'
import { ArticleContent, Section } from './content'

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    paddingTop: 72,
    paddingBottom: 72,
    paddingHorizontal: 72,
    fontFamily: 'Helvetica',
  },
  // Header band
  headerBand: {
    backgroundColor: '#1f2020',
    marginHorizontal: -72,
    marginTop: -72,
    paddingHorizontal: 72,
    paddingTop: 48,
    paddingBottom: 40,
    marginBottom: 40,
  },
  category: {
    color: '#c97a8f',
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 14,
  },
  title: {
    color: '#ffffff',
    fontSize: 26,
    fontFamily: 'Helvetica-Bold',
    lineHeight: 1.3,
    marginBottom: 20,
    maxWidth: 420,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  metaText: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 9,
  },
  metaDot: {
    color: 'rgba(255,255,255,0.3)',
    fontSize: 9,
  },
  // Body sections
  paragraph: {
    color: '#3a3a3a',
    fontSize: 10.5,
    lineHeight: 1.8,
    marginBottom: 18,
  },
  heading: {
    color: '#1f2020',
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    marginTop: 28,
    marginBottom: 12,
  },
  subheading: {
    color: '#1f2020',
    fontSize: 11.5,
    fontFamily: 'Helvetica-Bold',
    marginTop: 18,
    marginBottom: 8,
  },
  quoteBox: {
    borderLeftWidth: 3,
    borderLeftColor: '#763d50',
    paddingLeft: 16,
    marginVertical: 20,
  },
  quoteText: {
    color: '#763d50',
    fontSize: 12,
    fontFamily: 'Helvetica-Oblique',
    lineHeight: 1.7,
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 7,
    paddingLeft: 4,
  },
  bulletDot: {
    color: '#763d50',
    fontSize: 10.5,
    marginRight: 10,
    marginTop: 0.5,
    fontFamily: 'Helvetica-Bold',
  },
  bulletText: {
    color: '#3a3a3a',
    fontSize: 10.5,
    lineHeight: 1.7,
    flex: 1,
  },
  // Footer
  footerDivider: {
    borderTopWidth: 1,
    borderTopColor: '#e8e8e8',
    marginTop: 40,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerLogo: {
    width: 80,
    height: 18,
    objectFit: 'contain',
  },
  footerTagline: {
    color: 'rgba(58,58,58,0.4)',
    fontSize: 8,
  },
})

function RenderSection({ section }: { section: Section }) {
  if (section.type === 'paragraph') {
    return <Text style={styles.paragraph}>{section.content as string}</Text>
  }
  if (section.type === 'heading') {
    return <Text style={styles.heading}>{section.content as string}</Text>
  }
  if (section.type === 'subheading') {
    return <Text style={styles.subheading}>{section.content as string}</Text>
  }
  if (section.type === 'quote') {
    return (
      <View style={styles.quoteBox}>
        <Text style={styles.quoteText}>{section.content as string}</Text>
      </View>
    )
  }
  if (section.type === 'bullets') {
    return (
      <View style={{ marginBottom: 14 }}>
        {(section.content as string[]).map((item, i) => (
          <View key={i} style={styles.bulletRow}>
            <Text style={styles.bulletDot}>—</Text>
            <Text style={styles.bulletText}>{item}</Text>
          </View>
        ))}
      </View>
    )
  }
  return null
}

interface ArticlePDFProps {
  article: Article
  content: ArticleContent
}

export function ArticlePDF({ article, content }: ArticlePDFProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.headerBand}>
          <Text style={styles.category}>{article.category}</Text>
          <Text style={styles.title}>{article.title}</Text>
          <View style={styles.metaRow}>
            <Text style={styles.metaText}>{article.author}</Text>
            <Text style={styles.metaDot}>·</Text>
            <Text style={styles.metaText}>{article.date}</Text>
            <Text style={styles.metaDot}>·</Text>
            <Text style={styles.metaText}>{article.readTime} de lectura</Text>
          </View>
        </View>

        {/* Body */}
        {content.body.map((section, i) => (
          <RenderSection key={i} section={section} />
        ))}

        {/* Footer */}
        <View style={styles.footerDivider}>
          <Image src="/logo.png" style={styles.footerLogo} />
          <Text style={styles.footerTagline}>
            Plataforma de certificación y cumplimiento normativo, respaldada por IA.
          </Text>
        </View>
      </Page>
    </Document>
  )
}
