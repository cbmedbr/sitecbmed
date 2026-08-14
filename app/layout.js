import { Inter, Fraunces, JetBrains_Mono } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import JsonLd from '../components/JsonLd'
import { grafo, organizationSchema, websiteSchema } from '../lib/schema'
import { SITE_URL, SITE_TITLE_DEFAULT, SITE_DESCRIPTION, SITE_LOCALE, OG_IMAGE } from '../lib/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['opsz', 'SOFT', 'WONK'],
  variable: '--font-serif',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

// Sem `alternates.canonical` aqui de propósito: o merge de metadata do App
// Router é raso por campo, então uma rota que não sobrescrevesse `alternates`
// herdaria o canonical '/' e canonicalizaria o site inteiro para a home.
// Cada rota declara o seu via buildMetadata() em lib/seo.js.
export const metadata = {
  title: {
    default: SITE_TITLE_DEFAULT,
    template: '%s | CBMed',
  },
  description: SITE_DESCRIPTION,
  keywords: ['cannabis medicinal', 'CBD', 'óleo de CBD', 'ANVISA', 'RDC 660', 'CBMed'],
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    locale: SITE_LOCALE,
    url: SITE_URL,
    siteName: 'CBMed',
    title: SITE_TITLE_DEFAULT,
    description: 'Acesso seguro, legal e humanizado ao Óleo de CBD com aprovação ANVISA conforme RDC 660.',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'CBMed — Cannabis Medicinal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE_DEFAULT,
    description: 'Acesso seguro, legal e humanizado ao Óleo de CBD com aprovação ANVISA.',
    images: [OG_IMAGE],
  },
}

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="pt-BR" className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}>
      <body className="flex flex-col min-h-screen bg-cream">
        <JsonLd data={grafo(organizationSchema(), websiteSchema())} />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        {/* Só carrega se NEXT_PUBLIC_GA_ID estiver definido na Vercel —
            mantém o dev local e os previews fora da propriedade do GA4. */}
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  )
}
