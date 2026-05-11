# SDD v2 — Redesign Front-end CBMed

**Solution Design Document — Versão 2 (substitui v1)**
**Projeto:** sitecbmed (cbmed.com.br)
**Repositório:** github.com/cbmedbr/sitecbmed
**Stack:** Next.js 15.3 + Tailwind CSS 3.4 + JavaScript (sem TypeScript)
**Hospedagem:** Vercel (deploy automático via GitHub)
**Versão:** 2.0
**Data:** 11/05/2026
**Substitui:** SDD v1 (motivo: redirecionamento estético para "boticário científico de luxo")

---

## 1. Conceito Visual

**"Boticário científico de luxo."**

Pensar como uma farmácia de manipulação europeia centenária que fez um site digital impecável. Não é tech genérico, não é wellness pop, não é farmácia de bairro. É **autoridade clínica com peso editorial e refinamento tátil**, com inspiração direta em sites como seed.com e ritual.com.

**Pilares conceituais:**
- **Editorial científico** — tipografia serif para headlines, textura de revista médica premium
- **Acolhimento sóbrio** — fundo creme tátil em vez de branco hospitalar
- **Movimento generativo** — animações que reagem ao usuário e contam história no scroll
- **Detalhe artesanal** — micro-interações nos elementos da marca (pipeta, gota, frasco)

---

## 2. Princípios e Restrições Inegociáveis

### 2.1 O que NÃO será alterado

- ❌ Lógica de negócio, APIs, rotas server-side
- ❌ Funcionalidades (formulários, WhatsApp, calculadora de doses)
- ❌ Conteúdo textual (copy médica, números, CIDs, dosagens, RDC 660/ANVISA)
- ❌ Estrutura de rotas (`/sobre`, `/contato`, `/produtos`, `/ciencia`, `/artigos`, `/acolhimento`, `/para-medicos`)
- ❌ SEO (meta tags, OG tags, structured data, slugs)
- ❌ Integrações externas (WhatsApp Business, Unsplash, APIs)
- ❌ Variáveis de ambiente
- ❌ `next.config.js`

### 2.2 O que SERÁ alterado

- ✅ Componentes visuais em `components/`
- ✅ Estilos globais em `app/globals.css`
- ✅ Tokens em `tailwind.config.js`
- ✅ Layouts JSX em `app/` (estrutura visual)
- ✅ Assets em `public/` (adições)
- ✅ `package.json` para adicionar Framer Motion (e possivelmente Lenis)

---

## 3. Sistema de Design

### 3.1 Paleta de Cores

**Mantém identidade da marca (turquesa + dourado), mas reformula o fundo de branco puro para creme sóbrio.**

| Token | Valor | Função |
|---|---|---|
| `--brand-primary` | `#1BA883` | Verde turquesa principal (CTAs, badges, divisores) |
| `--brand-primary-hover` | `#148F6E` | Hover do primário |
| `--brand-deep` | `#0D5A46` | Verde escuro para contrastes premium e blocos de destaque |
| `--brand-accent` | `#C9A84C` | Dourado/âmbar (acentos, "Mais prescrito") |
| `--brand-accent-light` | `#D4B96A` | Dourado claro (gradientes sutis) |
| `--surface-base` | `#F5F2EC` | **Creme sóbrio — fundo principal de toda página** |
| `--surface-elevated` | `#FFFFFF` | Branco puro para cards (flutuam sobre o creme) |
| `--surface-brand-subtle` | `#EDFAF6` | Tint verde suave para badges e hovers |
| `--surface-dark` | `#0F1A14` | Quase-preto verde para seções dark estratégicas |
| `--text-primary` | `#1E293B` | Títulos e texto principal |
| `--text-secondary` | `#475569` | Parágrafos, subtítulos |
| `--text-muted` | `#94A3B8` | Placeholders, metadados, captions |
| `--text-on-brand` | `#FFFFFF` | Texto branco sobre fundo verde |
| `--text-on-dark` | `#F5F2EC` | Texto creme sobre fundo escuro |
| `--border-subtle` | `#EAE5DA` | Divisores e bordas suaves (tom creme) |
| `--border-default` | `#D8D2C4` | Bordas de inputs (tom creme mais firme) |
| `--state-success` | `#A3E7D6` | Badges ANVISA/confirmação |
| `--state-info` | `#BFDBFE` | Provisório — revisar na Seção 06 |

**Justificativa para mudança de fundo branco → creme:**

O creme `#F5F2EC` tem 4 efeitos visuais imediatos:
1. Tira o "ar de hospital frio" do branco puro
2. Dá textura tátil de papel premium (sensação de revista científica)
3. Faz o turquesa parecer mais sofisticado por contraste
4. Cards brancos ganham profundidade sem precisar de sombra pesada

### 3.2 Tipografia

| Função | Fonte | Uso | Justificativa |
|---|---|---|---|
| **Serif (display)** | **Fraunces** | Headlines, títulos de seção, citações editoriais | Variable font; charme científico; alternativa gratuita à Recoleta (Seed) |
| **Sans (body)** | **Inter** | Parágrafos, navegação, botões, labels | Mantida do site atual para evitar mudança brusca em textos longos |
| **Mono (técnico)** | **JetBrains Mono** | Dosagens, CIDs, números técnicos, COA, timestamps | Reforça autoridade científica |

**Decisão sobre Inter vs Geist:**
Mantém Inter (já em uso) ao invés de migrar para Geist. Motivo: a personalidade tipográfica do site v2 vem da **Fraunces nos headlines**, não da sans do body. Inter é neutra e legível em textos médicos longos — exatamente o que precisamos.

### 3.3 Hierarquia Tipográfica

```
Display      Fraunces  | clamp(3.5rem→5rem)   | 1.0  | -3% | 600 | opsz 144 | softness 50
H1           Fraunces  | clamp(2.5rem→3.75rem)| 1.1  | -2% | 600 | opsz 120
H2           Fraunces  | clamp(2rem→2.75rem)  | 1.15 | -1.5%| 500 | opsz 96
H3           Inter     | 1.75rem              | 1.3  | -0.5%| 600
H4           Inter     | 1.25rem              | 1.4  |  0   | 600
Body L       Inter     | 1.125rem             | 1.6  |  0   | 400
Body M       Inter     | 1rem                 | 1.5  |  0   | 400
Body S       Inter     | 0.875rem             | 1.5  |  0   | 400
Mono         JetBrains | variável             | 1.4  | tabular-nums
Caption      Inter     | 0.75rem              | 1.4  | +5% (tracked) | 600 uppercase
```

**Detalhes Fraunces:**
- Usar **optical size** (`opsz`) maior em headlines maiores — torna a serif mais elegante
- `softness` controla quão "calorosa" a fonte fica (50 = balanceado)
- Variable font: peso ajustável de 400-900 sem trocar arquivo

### 3.4 Espaçamento

Escala Tailwind padrão (base-4): `4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192px`.

Apenas documentado em `DESIGN_SYSTEM.md`, sem alterações no Tailwind.

### 3.5 Sombras e Profundidade

```
shadow-card       Sutil, para cards sobre o creme
shadow-card-md    Hover de cards
shadow-card-lg    Modais, elementos elevados
shadow-brand      Tinta turquesa em CTAs primários
shadow-warm       Tinta creme/dourada em elementos premium
```

### 3.6 Border Radius

```
sm   8px   — chips, badges pequenas
md   12px  — botões, inputs
lg   16px  — botões grandes, badges grandes
xl   20px  — cards padrão
2xl  24px  — cards de produto
3xl  32px  — blocos hero
4xl  40px  — seções editoriais grandes
```

---

## 4. Animações (Intensidade Alta)

### 4.1 Bibliotecas

- **Framer Motion** — animações React, scroll reveals, hover, layout animations
- **Lenis** (opcional) — smooth scroll global (avaliar na Seção 02)
- **GSAP** (avaliar caso a caso) — apenas se precisar de timeline SVG complexa (gota animada)

### 4.2 Padrões Reutilizáveis

| Padrão | Aplicação |
|---|---|
| **Fade + slide up** (40px, 700ms, ease-out) | Entrada de seções no viewport |
| **Stagger reveal** (delay 80-120ms) | Listas, etapas, benefícios |
| **Parallax** (factor 0.2-0.5) | Imagens, frascos, blocos de texto editorial |
| **Hover lift** (-6px + shadow expansion) | Cards de produto e artigos |
| **Magnetic CTA** (raio 16px) | Botões principais (Sou Médico / Sou Paciente) |
| **Number count-up** (1.8s, ease-out) | Estatísticas (3.800+ pacientes) |
| **Smooth scroll global** | Via Lenis (opcional) |
| **Scroll progress bar** | Indicador de leitura em artigos |
| **Cursor magnético** | Frascos no hero e no catálogo |

### 4.3 Animações Assinatura (Únicas do CBMed)

**1. Pipeta com gota animada (no Hero ou Catálogo)**
- SVG do conta-gotas com líquido dourado
- Ao carregar a seção: uma gota se forma na ponta, cai, e desaparece com leve ondulação
- Loop sutil a cada 4-6 segundos
- Em hover: ritmo acelera ligeiramente

**2. Frasco reativo ao cursor**
- O frasco principal do hero inclina suavemente em direção ao cursor (max 8° de inclinação)
- Efeito magnético com easing suave
- O líquido dentro do frasco mantém movimento sutil de ondulação

**3. Headlines destilando**
- Headlines principais aparecem letra por letra com fade-in de baixo pra cima
- Duração curta (~600ms total), efeito sutil
- Aplicada uma vez por visita, não a cada scroll

**4. Linha do tempo "desenhada"**
- No Fluxo RDC 660, a linha conectora entre as 4 etapas é desenhada com `stroke-dashoffset` enquanto o usuário scrolla
- Sensação de "tinta caindo no papel"

**5. Número que "pinga"**
- Stats (3.800+ / 1.600+) aparecem com bounce sutil simulando gota d'água
- Sincronizado com count-up

### 4.4 Performance e Acessibilidade

- `prefers-reduced-motion: reduce` respeitado em **todas** as animações (fade simples como fallback)
- Animações sempre via `transform` e `opacity` (nunca `width`, `height`, `top`)
- `IntersectionObserver` para lazy reveal
- Animações pesadas (gota SVG, frasco reativo) apenas em desktop ≥1024px
- Mobile recebe versões simplificadas (parallax desabilitado, hover-lift virou tap-feedback)

---

## 5. Workflow por Seção (mantido da v1)

### 5.1 Estrutura de Branches

```
main                              ← Produção
├── pre-redesign-v1 (tag)         ← Backup absoluto
├── refresh/01-design-tokens      ← Seção 1 (em andamento)
├── refresh/02-header             ← Seção 2 (próxima)
└── ...
```

### 5.2 Ciclo de Vida

```
1. git checkout main && git pull
2. git checkout -b refresh/XX-nome-secao
3. Claude Code executa, commit por commit
4. Checkpoints (npm run dev, console, build em commits finais)
5. git push origin refresh/XX-nome-secao
6. Vercel gera preview automático
7. Vinicius valida desktop + mobile
8. PR no GitHub → merge (squash) → produção
9. Próxima seção
```

### 5.3 Roadmap Atualizado

| # | Seção | Branch | Esforço | Mudou na v2? |
|---|---|---|---|---|
| 01 | Design tokens + tipografia | `refresh/01-design-tokens` | Médio | **Sim** (Fraunces + creme) |
| 02 | Header / Navegação | `refresh/02-header` | Pequeno | Não |
| 03 | Hero (primeira dobra) | `refresh/03-hero` | **Grande** (frasco reativo) | **Sim** (animação assinatura) |
| 04 | Stats | `refresh/04-stats` | Pequeno | Pequeno (bounce/drip) |
| 05 | Catálogo de produtos | `refresh/05-catalog` | Grande | **Sim** (cards editoriais) |
| 06 | Base Científica | `refresh/06-science` | Médio | Não |
| 07 | Canal do Médico | `refresh/07-doctor` | Médio | Não |
| 08 | Fluxo RDC 660 | `refresh/08-rdc-flow` | **Grande** (timeline desenhada) | **Sim** |
| 09 | Base de Conhecimento | `refresh/09-articles` | Pequeno | Não |
| 10 | CTA Final + Footer | `refresh/10-cta-footer` | Pequeno | Não |
| 11 | Páginas internas | `refresh/11-internal-pages` | Grande | Não |

---

## 6. Salvaguardas Técnicas (mantidas e reforçadas da v1)

### 6.1 Backup Absoluto

Tag `pre-redesign-v1` já criada antes do início da Seção 01.

### 6.2 Por Seção

```bash
git checkout main && git pull
git checkout -b refresh/XX-nome-secao
```

### 6.3 Checkpoints Obrigatórios

Antes de cada commit:
1. `npm run dev` sobe sem erros
2. Site carrega em `localhost:3000`
3. Console do navegador: zero erros vermelhos
4. Em commits finais: `npm run build` passa
5. Links e WhatsApp funcionando

### 6.4 Regra de Visibilidade (NOVA, adicionada na v2)

Antes de mexer em **qualquer** componente ou arquivo visual, Claude Code deve informar:
1. Arquivo a ser editado (caminho completo)
2. URLs locais afetadas (ex: `localhost:3000/`, `/sobre`)
3. Descrição visual: como o usuário identifica o elemento na tela
4. O que muda visualmente
5. Diff antes/depois
6. Plano de rollback específico do commit
7. Aguardar aprovação explícita

### 6.5 Preview Deploy

Após push, Vercel gera URL:
```
sitecbmed-git-refresh-XX-nome-cbmedbr.vercel.app
```

Validação obrigatória:
- ✅ Desktop
- ✅ Mobile (celular real)
- ✅ Todos CTAs da seção
- ✅ WhatsApp funcional
- ✅ Comparação lado a lado com produção
- ✅ Aprovação explícita por escrito

### 6.6 Rollback

```bash
# Reverter o último PR (preserva histórico)
git revert -m 1 <hash-do-merge>
git push origin main

# Voltar à tag de backup (catástrofe)
git reset --hard pre-redesign-v1
git push --force origin main
```

---

## 7. Detalhamento das Seções

### Seção 01 — Design Tokens + Tipografia (v2)

**Branch:** `refresh/01-design-tokens`

**Entregáveis (revisados para v2):**

1. CSS variables em `app/globals.css` com **paleta v2** (inclui `--surface-base` creme)
2. Configurar **Fraunces + Inter + JetBrains Mono** via `next/font/google` em `app/layout.js`
   - Fraunces com axes `opsz` e `wght` variáveis
3. Estender `tailwind.config.js` com:
   - Tokens semânticos de cor (incluindo creme como surface)
   - 3 famílias de fonte (`font-serif`, `font-sans`, `font-mono`)
   - Escala tipográfica completa
4. **Trocar `bg-white` por `bg-surface-base` no `body`** em `app/layout.js`
5. Documentar em `docs/DESIGN_SYSTEM.md`

**Critério de aprovação:**
- ✅ Site renderiza com **fundo creme** (mudança visual esperada e desejada)
- ✅ Headlines existentes continuam em sans (Fraunces será aplicada nas seções posteriores, quando recriarmos os componentes)
- ✅ Cards continuam brancos sobre o creme (efeito de profundidade)
- ✅ Sem erros no console
- ✅ Build passa

**Mudança visual esperada:**
Fundo da página deixa de ser branco e passa a ser creme sutil. Cards e blocos brancos ganham leve destaque. **Tipografia ainda não muda** — Fraunces só entra em jogo quando os componentes forem refeitos a partir da Seção 02.

---

### Seção 02 — Header / Navegação

**Entregáveis:**
- Sticky com glassmorphism (backdrop-blur sobre creme)
- Logo + nav central + duplo CTA
- Hover states refinados
- Menu mobile hamburguer com slide-in
- **Headlines do logo/marca em Fraunces** (primeira aparição da serif)

---

### Seção 03 — Hero (Primeira Dobra)

**Entregáveis:**
- Headline em Fraunces, tamanho display, com efeito **"destilação"**
- Badge "Aprovado ANVISA · RDC 660 · Importação Uruguai" repaginada como pill editorial
- Subtítulo refinado
- CTAs com **magnetic hover**
- **Animação assinatura:** frasco principal + pipeta com gota animada
- Composição lateral com parallax

---

### Seção 04 — Stats

**Entregáveis:**
- Number count-up com **bounce simulando gota**
- Tipografia mono tabular
- Grid 4 colunas (desktop) / 2 colunas (mobile)

---

### Seção 05 — Catálogo

**Entregáveis:**
- 4 cards premium editoriais
- Frasco em primeiro plano, **inclinação suave ao hover**
- Hierarquia: concentração (Fraunces grande) → categoria → descrição → tags → CTA
- Badge "Mais prescrito" repaginada
- Hover-lift + shadow expansion

---

### Seção 06 — Base Científica

**Entregáveis:**
- Layout assimétrico editorial (3 blocos)
- Calculadora interativa com slider repaginado (preservar lógica)
- Citações de fonte (NEJM, Lancet, JAMA) em destaque tipográfico Fraunces
- Iconografia médica refinada

---

### Seção 07 — Canal do Médico

**Entregáveis:**
- Split-screen com parallax
- Check-list em stagger reveal
- Badge "1.600+ médicos parceiros" reforçada
- CTA WhatsApp destacado

---

### Seção 08 — Fluxo RDC 660

**Entregáveis:**
- Timeline horizontal (desktop) / vertical (mobile)
- **Linha conectora desenhada via stroke-dashoffset no scroll** (animação assinatura)
- Ícones SVG customizados por etapa
- Numeração mono (01, 02, 03, 04)

---

### Seção 09 — Artigos

**Entregáveis:**
- Cards editoriais com tag de categoria
- Tempo de leitura em mono ("11 min")
- Hover-lift sutil
- Layout em 3 colunas

---

### Seção 10 — CTA Final + Footer

**Entregáveis:**
- Bloco de fechamento com gradiente sutil verde→âmbar
- Footer com hierarquia tipográfica (Fraunces nos títulos de coluna)
- Badges de certificação refinadas
- Contato com ícones inline

---

### Seção 11 — Páginas Internas

**Entregáveis:**
- Aplicar sistema em `/sobre`, `/contato`, `/produtos`, `/ciencia`, `/artigos`, `/acolhimento`, `/para-medicos`
- Reaproveitar componentes das seções anteriores
- Refinamento de layout específico onde necessário

---

## 8. Decisão sobre o Commit 1 (já aplicado)

O Commit 1 da Seção 01 (CSS variables) foi aplicado com a paleta v1. **Ele precisa ser ajustado para incorporar os novos tokens da v2** (especialmente `--surface-base`, `--brand-deep`, `--surface-dark`, `--text-on-dark`, `--shadow-warm`).

**Decisão:** ao invés de criar um commit corretivo, o Claude Code substituirá o bloco `:root` no início do `app/globals.css` no contexto do próximo commit, e ajustará a mensagem para refletir a v2.

**Opção alternativa:** `git revert` do Commit 1 e recomeçar a Seção 01 do zero com o novo plano. Decisão do Vinicius (item de aprovação).

---

## 9. Próximos Passos Imediatos

1. ✅ Vinicius lê e aprova este SDD v2
2. Decidir entre:
   - (a) Manter Commit 1 e ajustar no Commit 2 (mais rápido)
   - (b) Reverter Commit 1 e reiniciar Seção 01 com a paleta v2 (mais limpo)
3. Reescrever plano da Seção 01 conforme decisão
4. Claude Code apresenta novo plano detalhado
5. Aprovação e execução

---

**Fim do documento.**