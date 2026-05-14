# CLAUDE.md — CBMed Site

Instruções para Claude Code neste projeto. Leia antes de qualquer tarefa.

## Stack

- Next.js 15 App Router — JavaScript (sem TypeScript)
- Tailwind CSS 3.4 com tokens semânticos customizados
- Framer Motion 12.38 para animações interativas
- lucide-react para ícones
- next/font/google: Fraunces, Inter, JetBrains Mono

## Convenções de componente

- Server Component por padrão — `'use client'` só quando há hooks ou interatividade
- Componentes extraídos em `components/` — inline em `page.js` apenas enquanto em rascunho
- Animações: sempre `useReducedMotion()` + fallback estático
- Efeitos de pointer (tilt, magnetic): sempre `window.matchMedia('(hover: hover) and (pointer: fine)')` antes de ativar
- Animações simples (float contínuo, rotação): preferir CSS `@keyframes` puro a Framer Motion — mantém Server Component
- Imagens de produto: `next/image` com `fill` + `object-contain`; imagens externas precisam de `remotePatterns` em `next.config.js`

## Design tokens

Definidos em `app/globals.css` como CSS custom properties em `:root`.
Usar sempre via Tailwind semântico (`text-ink`, `bg-surface-base`, `text-brand-500`) — nunca valores hardcoded.

Fontes:
- `font-serif` → Fraunces (headings premium, concentrações de produto)
- `font-sans` → Inter (corpo, UI)
- `font-mono` → JetBrains Mono (dados, tags, datas, valores clínicos)

## Sistema de fundos por seção (em produção)

| Seção | Background | Cor |
|-------|------------|-----|
| Hero + Stats | `bg-surface-base` | caramelo `#CCB38B` |
| Catálogo | `bg-[#f0ede6]` | creme off-white |
| Base Científica | `bg-[#0d2d1f]` | verde escuro + textos brancos |
| Canal Médico | `bg-[#f0ede6]` | creme off-white |
| RDC / Anatomia | `bg-[#0a1628]` | tinta escura + card glass |
| Artigos | `bg-surface-base` | caramelo (volta) |
| CTA + Footer | `bg-[#0d2d1f]` | verde escuro |

Glassmorphism em seções escuras: `bg-white/8 backdrop-blur-sm border border-white/12`. Para card grande premium (estilo Seed): `bg-white/[0.06] backdrop-blur-xl border-white/[0.22]` + `boxShadow` forte.

## Valores INTOCÁVEIS

Nunca alterar sem aprovação explícita do cliente:

- `3.800+` — pacientes assessorados
- `1.600+` — médicos parceiros
- `até 30d` — prazo de entrega
- `RDC 660` — conformidade ANVISA
- `CNPJ: 64.853.460/0001-45`
- Links WhatsApp em `lib/constants.js` — nunca hardcodar URLs
- Citações científicas: NEJM 2021, Lancet Neurology 2019, JAMA 2019 — fontes reais, jamais inventar

## Compliance regulatório (ANVISA)

RDC 327/2019 é estrita sobre comunicação de cannabis medicinal ao público leigo. Nunca:
- Criar calculadora de doses interativa (foi removida da S06 por esse motivo)
- Recomendar dosagens específicas a pacientes
- Sugerir tratamentos para condições específicas sem ressalva médica

A linha "Este site não realiza prescrição médica. Produtos sujeitos à prescrição e autorização ANVISA — RDC 327/2019." deve aparecer no footer.

## Regra de visibilidade (obrigatória antes de qualquer edição visual)

Antes de editar qualquer componente visual, declarar:
1. Arquivo que será editado
2. URL afetada (`localhost:3000/...`)
3. Descrição visual do estado atual
4. O que vai mudar (diff antes/depois explícito)
5. Rollback: como reverter se necessário

Aguardar aprovação explícita antes de aplicar.

## Commits

- Conventional Commits: `feat()`, `fix()`, `chore()`, `revert()`
- Commits atômicos — uma preocupação por commit
- Mensagem em português, consistente com o histórico da branch
- Nunca commitar PNGs sem verificar se são os arquivos corretos (transparência, dimensões)

## Branches e workflow

- Padrão: `refresh/XX-nome` por seção (ex: `refresh/10-footer`)
- Sempre criar a partir de `main` atualizada (`git pull origin main` antes)
- Verificar `git status` limpo antes de push
- Build de validação (`npm run build`) obrigatório antes de push

## Limpezas profundas (CRÍTICO)

Limpeza profunda (`rm -rf .next node_modules + npm install`) é necessária entre seções para evitar acúmulo de cache corrompido.

**ATENÇÃO — não usar `git restore` ou `git checkout` em arquivos modificados localmente durante operações de limpeza.** Já houve incidentes de Header.js, package.json e PNGs serem sobrescritos automaticamente. Quando há arquivo crítico modificado localmente:
- Cliente comita via terminal direto, NÃO via Claude Code
- Sempre verificar `git status` antes de qualquer operação destrutiva

## Mobile

`overflow-x: hidden` no body em globals.css (aplicado durante S07) — não remover. Resolve cortes horizontais em viewports estreitas que afetavam hero, catálogo, ciência e medical em 360px.

## Estrutura de seções — Redesign incremental

| Seção | Branch | Status |
|-------|--------|--------|
| S01 — Design Tokens | refresh/01-tokens | ✅ merged |
| S02 — Header Premium | refresh/02-header | ✅ merged |
| S03 — Hero | refresh/03-hero | ✅ merged |
| S04 — Stats animados | refresh/04-stats | ✅ merged |
| S05 — Catálogo | refresh/05-catalog | ✅ merged |
| S06 — Base Científica | refresh/06-science | ✅ merged |
| S07 — Para Médicos | refresh/07-medical | ✅ merged |
| S08 — RDC 660 | refresh/08-rdc | ✅ merged |
| S09 — Artigos | refresh/09-articles | ✅ merged |
| S10 — CTA + Footer | refresh/10-footer | 🔄 em andamento |
| S11 — Páginas internas | refresh/11-internal | ⏳ planejada |
| Polish Pass | refresh/polish | ⏳ final |

## Polish Pass (pendências para o final do projeto)

- Substituir PNGs dos produtos por versões com fundo realmente transparente (Photoroom)
- Substituir átomo SVG genérico da S06 por molécula real de CBD (3dmol.js, MolView, ou estrutural 2D estilizada)
- Refinamentos finos de timing de animações
- Micro-interações finais

## Arquivos sensíveis

- `lib/constants.js` — WhatsApp links, telefone, email, CNPJ
- `lib/artigos.js` — conteúdo dos artigos (não alterar textos sem aprovação)
- `public/produto-*.png` — PNGs com fundo transparente (não sobrescrever com versões antigas)
- `app/globals.css` — tokens de design (alterações impactam todo o site)
- `next.config.js` — `remotePatterns` deve incluir `images.unsplash.com`

## Componentes extraídos atuais

- `Header.js` — sticky com glassmorphism
- `MagneticButton.js` — botões com magnetic hover (S03)
- `HeroFlask.js` — frasco com float + parallax (S03)
- `StatItem.js` — count-up animado (S04)
- `ProductCard.js` — card horizontal do catálogo (S05)
- `ScienceSection.js` — seção ciência com átomo SVG (S06)
- `MedicalSection.js` — canal médico (S07)
- `RdcSection.js` — anatomia do produto regulado (S08)
- `ArticlesSection.js` — blog editorial (S09)

## Comandos úteis

```bash
npm run dev          # dev server
npm run build        # build de validação (obrigatório antes de push)
npm run clean:cache  # remove .next
npm run clean        # remove .next + node_modules + npm cache
npm run reinstall    # clean + npm install em sequência
```
