import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
