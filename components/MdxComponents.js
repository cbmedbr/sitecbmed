/**
 * Mapa de componentes para o corpo MDX dos artigos.
 * Tipografia de leitura confortável em Tailwind puro — o projeto não usa
 * o plugin typography de propósito, para manter controle fino dos tokens.
 *
 * O contrato editorial proíbe H1 no corpo (o H1 da página vem do title).
 * Se a automação escorregar e emitir um, rebaixamos para o estilo de H2
 * em vez de quebrar a hierarquia de headings da página.
 */

const estiloH2 = 'font-serif font-semibold text-ink text-2xl mt-12 mb-4 leading-tight'

export const mdxComponents = {
  h1: props => <h2 {...props} className={estiloH2} />,
  h2: props => <h2 {...props} className={estiloH2} />,
  h3: props => <h3 {...props} className="font-serif font-semibold text-ink text-xl mt-9 mb-3 leading-snug" />,
  h4: props => <h4 {...props} className="font-semibold text-ink text-base mt-7 mb-2" />,
  p:  props => <p  {...props} className="text-ink-light leading-relaxed mb-5" />,
  ul: props => <ul {...props} className="list-disc pl-6 space-y-2 mb-6 text-ink-light marker:text-brand-500" />,
  ol: props => <ol {...props} className="list-decimal pl-6 space-y-2 mb-6 text-ink-light marker:text-brand-600 marker:font-semibold" />,
  li: props => <li {...props} className="leading-relaxed pl-1" />,
  a:  props => (
    <a
      {...props}
      className="text-brand-600 font-medium underline decoration-brand-300 underline-offset-2 hover:text-brand-500 hover:decoration-brand-500 transition-colors"
      {...(String(props.href || '').startsWith('http')
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
    />
  ),
  strong: props => <strong {...props} className="font-semibold text-ink" />,
  em: props => <em {...props} className="italic" />,
  blockquote: props => (
    <blockquote
      {...props}
      className="my-8 bg-brand-50 border-l-4 border-brand-500 rounded-r-2xl p-6 [&>p]:text-ink [&>p]:italic [&>p]:text-lg [&>p:last-child]:mb-0"
    />
  ),
  hr: props => <hr {...props} className="my-10 border-ink/10" />,
  // Tabela GFM: rola horizontalmente dentro do próprio contêiner no mobile,
  // nunca estoura a página (regra do projeto: body sem scroll horizontal).
  table: props => (
    <div className="overflow-x-auto my-8 rounded-2xl border border-ink/10">
      <table {...props} className="w-full text-sm border-collapse bg-white" />
    </div>
  ),
  thead: props => <thead {...props} className="bg-cream" />,
  th: props => <th {...props} className="text-left font-semibold text-ink px-4 py-3 border-b border-ink/10 whitespace-nowrap" />,
  td: props => <td {...props} className="px-4 py-3 border-b border-ink/5 text-ink-light align-top" />,
  code: props => <code {...props} className="font-mono text-[0.9em] bg-ink/5 text-ink rounded px-1.5 py-0.5" />,
  img: props => <img {...props} className="rounded-2xl my-6 max-w-full h-auto" loading="lazy" />,
}
