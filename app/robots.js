import { SITE_URL, absoluteUrl } from '../lib/site'

export default function robots() {
  // A Vercel já envia X-Robots-Tag: noindex nos previews, mas o robots.txt do
  // deploy de preview seria uma cópia do de produção — inclusive apontando para
  // o sitemap real. Bloquear aqui evita esse ruído.
  // Local (VERCEL_ENV indefinido) espelha produção, para dar pra testar o arquivo real.
  if (process.env.VERCEL_ENV === 'preview') {
    return { rules: [{ userAgent: '*', disallow: '/' }] }
  }

  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: SITE_URL,
  }
}
