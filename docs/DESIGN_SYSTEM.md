# Design System — CBMed v2

**Conceito:** Boticário científico de luxo.

---

## Paleta de Cores

| Token | Valor | Uso |
|---|---|---|
| `--brand-primary` | `#1BA883` | CTAs, badges, divisores |
| `--brand-primary-hover` | `#148F6E` | Hover de botões primários |
| `--brand-deep` | `#0D5A46` | Contrastes premium, blocos de destaque |
| `--brand-accent` | `#C9A84C` | Dourado — acentos, "Mais prescrito" |
| `--brand-accent-light` | `#D4B96A` | Dourado claro, gradientes |
| `--surface-base` | `#CCB38B` | **Fundo principal — caramelo aprovado** |
| `--surface-elevated` | `#FFFFFF` | Cards (flutuam sobre o caramelo) |
| `--surface-brand-subtle` | `#EDFAF6` | Tint verde em badges e hovers |
| `--surface-dark` | `#0F1A14` | Seções dark estratégicas |
| `--text-primary` | `#1E293B` | Títulos e texto principal |
| `--text-secondary` | `#475569` | Parágrafos, subtítulos |
| `--text-muted` | `#94A3B8` | Placeholders, metadados |
| `--text-on-brand` | `#FFFFFF` | Texto sobre fundo verde |
| `--text-on-dark` | `#CCB38B` | Texto caramelo sobre fundo escuro |
| `--border-subtle` | `#EAE5DA` | Divisores suaves |
| `--border-default` | `#D8D2C4` | Bordas de inputs |
| `--state-success` | `#A3E7D6` | Badges ANVISA |
| `--state-info` | `#BFDBFE` | Badges científicos *(provisório — revisar Seção 06)* |

---

## Tipografia

| Função | Fonte | Aplicação |
|---|---|---|
| `font-serif` | **Fraunces** (variable, opsz+wght) | Headlines, títulos de seção, citações |
| `font-sans` | **Inter** | Body, navegação, botões, labels |
| `font-mono` | **JetBrains Mono** | Dosagens, CIDs, números técnicos, COA |

### Escala

| Token | Tamanho | Font |
|---|---|---|
| `text-display` | clamp(3.5→5rem) | Fraunces 600 |
| `text-h1` | clamp(2.5→3.75rem) | Fraunces 600 |
| `text-h2` | clamp(2→2.75rem) | Fraunces 500 |
| `text-h3` | 1.75rem | Inter 600 |
| `text-h4` | 1.25rem | Inter 600 |
| `text-body-lg` | 1.125rem | Inter 400 |
| `text-body-md` | 1rem | Inter 400 |
| `text-body-sm` | 0.875rem | Inter 400 |
| `text-caption` | 0.75rem | Inter 600 uppercase |

---

## Espaçamento (base-4)

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 192px`

Usa escala nativa do Tailwind — sem tokens adicionais.

---

## Sombras

| Token | Uso |
|---|---|
| `shadow-card` | Cards sobre caramelo |
| `shadow-card-md` | Hover de cards |
| `shadow-card-lg` | Modais, elementos elevados |
| `shadow-brand` | CTAs primários (tinta verde) |
| `shadow-warm` | Elementos premium (tinta dourada) |
