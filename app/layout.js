import { Inter, Fraunces, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

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

export const metadata = {
  title: {
    default: 'CBMed | Assessoria em Cannabis Medicinal',
    template: '%s | CBMed',
  },
  description:
    'Acesso seguro, legal e humanizado ao Óleo de CBD de alta performance. Assessoria estratégica especializada, conforme RDC 660 ANVISA. Florianópolis/SC.',
  keywords: ['cannabis medicinal', 'CBD', 'óleo de CBD', 'ANVISA', 'RDC 660', 'Florianópolis', 'CBMed'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}>
      <body className="flex flex-col min-h-screen bg-surface-base">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
