// Server Component — emite dado estruturado schema.org.
// Sem 'use client': o JSON não deve ir para o bundle do navegador.
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // Escapa '<' para que um caractere vindo do conteúdo (lib/artigos.js e
      // lib/faq.js são editáveis por não-devs) não consiga fechar o <script>.
      // < é JSON válido e o parser do Google desescapa normalmente.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
