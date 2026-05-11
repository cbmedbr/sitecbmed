# SDD — Redesign Front-end CBMed

**Solution Design Document**
**Projeto:** sitecbmed (cbmed.com.br)
**Repositório:** github.com/cbmedbr/sitecbmed
**Stack:** Next.js + Tailwind CSS + TypeScript
**Hospedagem:** Vercel (deploy automático via GitHub)
**Versão:** 1.0
**Data:** 11/05/2026
**Responsável técnico:** Vinicius (validação) + Claude Code (execução)

---

## 1. Objetivo

Repaginar **exclusivamente o front-end visual** do site cbmed.com.br, elevando-o a padrão estético premium compatível com o posicionamento da CB CannaBio Medicinal como referência em assessoria de cannabis medicinal no Brasil.

**Modo de execução:** incremental, **uma seção por vez**, com merge na `main` após aprovação de cada seção via preview deploy.

---

## 2. Princípios e Restrições Inegociáveis

### 2.1 O que NÃO será alterado em hipótese alguma

- ❌ **Lógica de negócio** — nada em `lib/`, `app/api/`, rotas server-side
- ❌ **Funcionalidades** — formulários, WhatsApp links, calculadora de doses, navegação
- ❌ **Conteúdo textual** — copy médica, números (3.800+ pacientes, 1.600+ médicos), CIDs, dosagens, menções a RDC 660/ANVISA
- ❌ **Estrutura de rotas** — `/sobre`, `/contato`, `/produtos`, `/ciencia`, `/artigos`, `/acolhimento`, `/para-medicos`
- ❌ **SEO** — meta tags, OG tags, structured data, slugs
- ❌ **Integrações** — WhatsApp Business, Unsplash, APIs externas
- ❌ **Variáveis de ambiente** — `.env*` não tocadas
- ❌ **Build config** — `next.config.js` preservado; `package.json` só com adição de libs de animação

### 2.2 O que SERÁ alterado

- ✅ Componentes visuais em `components/`
- ✅ Estilos globais em `app/globals.css`
- ✅ Tokens Tailwind em `tailwind.config.js` (extensão, não substituição)
- ✅ Layouts JSX em `app/` (apenas estrutura visual, sem mexer em data)
- ✅ Assets em `public/` (adição, sem remoção)
- ✅ Adição de Framer Motion ao `package.json`

---

## 3. Direção Estética

### 3.1 Paleta de Cores

**Preservar identidade atual.** Extrair valores exatos no Passo 1 e formalizá-los em tokens semânticos:

```
--brand-primary       Verde escuro principal (atual)
--brand-accent        Âmbar/dourado (do frasco de óleo)
--surface-base        Off-white de fundo
--surface-elevated    Branco puro para cards
--text-primary        Preto suave
--text-secondary      Cinza tipográfico
--text-on-brand       Texto sobre fundo verde
--border-subtle       Divisores
--state-success       Verde claro (badges ANVISA)
--state-info          Azul informativo (badges científicos)
```

### 3.2 Tipografia

| Função | Fonte | Uso |
|---|---|---|
| Sans | **Geist Sans** | Headlines, body, navegação |
| Mono | **JetBrains Mono** | Dosagens, CIDs, números técnicos, COA |

**Hierarquia:**

```
Display    72px / 80px / -2% / 600
H1         56px / 64px / -1.5% / 600
H2         40px / 48px / -1% / 600
H3         28px / 36px / -0.5% / 500
H4         20px / 28px / 0 / 500
Body L     18px / 28px / 0 / 400
Body M     16px / 24px / 0 / 400
Body S     14px / 20px / 0 / 400
Mono       Variável, tabular-nums
```

### 3.3 Espaçamento

Escala base-4: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192px`.

### 3.4 Animações (Intensidade Média)

| Padrão | Aplicação |
|---|---|
| Fade + slide up (40px, 600ms, ease-out) | Entrada de seções no viewport |
| Parallax sutil (factor 0.2-0.4) | Imagens hero, frascos |
| Hover lift (-4px, shadow expansion) | Cards de produto/artigo |
| Stagger reveal (delay 80-120ms) | Listas de benefícios, etapas |
| Number count-up (1.5s) | Stats (3.800+ pacientes) |
| Magnetic CTA (raio 12px sutil) | Botões principais |
| Scroll progress | Indicador em artigos |
| Smooth scroll | Navegação âncora |

**Biblioteca:** Framer Motion.

**Performance obrigatória:**
- `prefers-reduced-motion: reduce` respeitado sempre
- Animações via `transform` e `opacity` apenas
- `IntersectionObserver` para lazy reveal

---

## 4. Workflow por Seção

### 4.1 Estrutura de Branches

```
main                              ← Produção
├── pre-redesign-v1 (tag)         ← Backup absoluto
├── refresh/01-design-tokens      ← Seção 1
├── refresh/02-header             ← Seção 2 (criada após merge da 1)
├── refresh/03-hero               ← Seção 3
└── ...
```

Cada seção vive em uma branch própria. Nasce a partir da `main` **atualizada** (já com as seções anteriores aprovadas).

### 4.2 Ciclo de Vida de Cada Seção

```
1. git checkout main && git pull
2. git checkout -b refresh/XX-nome-secao
3. Claude Code executa a seção
4. Checkpoints obrigatórios (ver 5.3)
5. git push origin refresh/XX-nome-secao
6. Vercel gera preview automático
7. Vinicius valida no preview (desktop + mobile)
8. Se aprovado:
   - Abrir PR no GitHub: refresh/XX → main
   - Merge (squash recomendado)
   - git push origin main
   - Vercel publica em produção
9. Próxima seção começa do passo 1
```

### 4.3 Roadmap por Seção (Ordem de Execução)

| # | Seção | Branch | Esforço | Bloqueia? |
|---|---|---|---|---|
| 01 | **Design tokens + tipografia** | `refresh/01-design-tokens` | Médio | Sim — base de tudo |
| 02 | **Header / Navegação** | `refresh/02-header` | Pequeno | Não |
| 03 | **Hero (primeira dobra)** | `refresh/03-hero` | Grande | Não |
| 04 | **Stats (3.800+/1.600+)** | `refresh/04-stats` | Pequeno | Não |
| 05 | **Catálogo de produtos** | `refresh/05-catalog` | Grande | Não |
| 06 | **Base Científica** (COA/Calculadora/Estudos) | `refresh/06-science` | Médio | Não |
| 07 | **Canal do Médico** | `refresh/07-doctor` | Médio | Não |
| 08 | **Fluxo RDC 660** (timeline) | `refresh/08-rdc-flow` | Médio | Não |
| 09 | **Base de Conhecimento** (artigos) | `refresh/09-articles` | Pequeno | Não |
| 10 | **CTA Final + Footer** | `refresh/10-cta-footer` | Pequeno | Não |
| 11 | **Páginas internas** (aplicar sistema) | `refresh/11-internal-pages` | Grande | Depende de 01 |

**Importante:** seção 01 (design tokens) é a única bloqueante. Todas as demais a partir da 02 podem ser feitas em qualquer ordem, mas sugiro seguir a numeração para fluxo lógico de validação.

---

## 5. Salvaguardas Técnicas

### 5.1 Backup Absoluto (única vez, antes de começar)

```bash
git checkout main
git pull
git tag pre-redesign-v1
git push origin pre-redesign-v1
```

Ponto de retorno nomeado, imutável. Em caso de catástrofe:

```bash
git reset --hard pre-redesign-v1
git push --force origin main
```

### 5.2 Por Seção — Antes de Começar

```bash
git checkout main
git pull origin main
git checkout -b refresh/XX-nome-secao
```

Garante que cada nova seção parte do código mais atualizado.

### 5.3 Checkpoints Obrigatórios (Antes de Cada Commit)

Claude Code DEVE validar:

1. ✅ `npm run dev` — sobe sem erros
2. ✅ Site carrega em `localhost:3000` — verificação manual
3. ✅ Console do navegador: **zero erros vermelhos**
4. ✅ Em commits finais da seção: `npm run build` deve passar
5. ✅ Links e WhatsApp ainda funcionam (clique de teste)

**Se qualquer item falhar:** não commitar. Reportar antes.

### 5.4 Commits Atômicos Dentro da Seção

Mesmo sendo PR único por seção, **commits internos granulares**. Padrão Conventional Commits:

```
feat(tokens): adiciona paleta semântica em CSS variables
feat(tokens): configura Geist e JetBrains Mono no Tailwind
feat(tokens): define escala tipográfica e espaçamento base-4
docs(tokens): atualiza README com sistema de design
```

Permite rollback cirúrgico dentro da própria seção se algo específico não convencer.

### 5.5 Preview Deploy (Validação Antes do Merge)

Após push da branch, Vercel cria URL automaticamente:

```
sitecbmed-git-refresh-XX-nome-cbmedbr.vercel.app
```

**Validação obrigatória do Vinicius antes do merge:**

- ✅ Abrir preview no desktop
- ✅ Abrir preview no mobile (usar próprio celular)
- ✅ Clicar em todos os CTAs da seção alterada
- ✅ Verificar que WhatsApp abre corretamente
- ✅ Comparar com produção atual (cbmed.com.br) lado a lado
- ✅ Aprovação explícita por escrito antes do merge

### 5.6 Rollback Pós-Merge

Se algo crítico passar pelo preview e aparecer em produção:

**Opção 1 — Revert do PR (preserva histórico):**
```bash
git checkout main
git revert -m 1 <hash-do-merge>
git push origin main
```

**Opção 2 — Voltar para a seção anterior (descarta a última):**
```bash
git reset --hard <hash-antes-do-merge>
git push --force origin main
```

**Opção 3 — Reset total (volta ao estado pré-redesign):**
```bash
git reset --hard pre-redesign-v1
git push --force origin main
```

Vercel reage ao push em ~60 segundos e republica.

---

## 6. Detalhamento das Seções

### Seção 01 — Design Tokens + Tipografia

**Branch:** `refresh/01-design-tokens`
**Objetivo:** Criar fundação visual que todas as outras seções consumirão.

**Entregáveis:**
- Extração da paleta atual e formalização em CSS variables (`app/globals.css`)
- Configuração do Geist Sans + JetBrains Mono via `next/font` (sem CDN externo)
- Extensão do `tailwind.config.js` com tokens semânticos
- Sistema de espaçamento base-4 documentado
- Escala tipográfica documentada
- **Visualmente: site deve continuar idêntico** (mudança é estrutural, não visual)

**Critério de aprovação:** site renderiza igual ou melhor que antes, sem mudanças visuais perceptíveis. Base pronta para próximas seções.

---

### Seção 02 — Header / Navegação

**Branch:** `refresh/02-header`

**Entregáveis:**
- Sticky header com glassmorphism sutil (backdrop-blur)
- Logo + nav central + duplo CTA ("Sou Médico" / "Sou Paciente")
- Transição suave de fundo on scroll (transparente → glass)
- Mobile: menu hamburguer com slide-in animado
- Hover states refinados nos links

---

### Seção 03 — Hero (Primeira Dobra)

**Branch:** `refresh/03-hero`

**Entregáveis:**
- Headline em tipografia display
- Badge "Aprovado ANVISA · RDC 660 · Importação Uruguai" repaginada como pill editorial
- Subtítulo com hierarquia clara, mantendo "3.800+ pacientes" e "1.600+ médicos prescritores"
- CTAs com magnetic hover sutil
- Composição lateral com imagem do frasco em parallax leve
- Quatro selos de credibilidade no rodapé do hero refinados

---

### Seção 04 — Stats (3.800+ / 1.600+)

**Branch:** `refresh/04-stats`

**Entregáveis:**
- Bloco de credibilidade dedicado
- Number count-up animado ao entrar no viewport
- Tipografia mono tabular para números
- Layout em grid 4 colunas (desktop) / 2 colunas (mobile)

---

### Seção 05 — Catálogo de Produtos

**Branch:** `refresh/05-catalog`

**Entregáveis:**
- 4 cards premium (1500mg, 3000mg, 6000mg, CBD+CBG)
- Imagem do frasco em primeiro plano
- Hierarquia de info: concentração (mono grande) → categoria → descrição → tags clínicas → CTA
- Badge "Mais prescrito" reposicionada
- Hover lift + shadow expansion
- Grid responsivo refinado

---

### Seção 06 — Base Científica

**Branch:** `refresh/06-science`

**Entregáveis:**
- Layout assimétrico editorial (3 blocos: COA, Calculadora, Estudos)
- Calculadora interativa com slider repaginado (preservar lógica)
- Cards com citação de fonte (NEJM, Lancet, JAMA) em destaque tipográfico
- Iconografia médica refinada

---

### Seção 07 — Canal do Médico Prescritor

**Branch:** `refresh/07-doctor`

**Entregáveis:**
- Split-screen (imagem + conteúdo) com parallax
- Check-list dos 4 benefícios em stagger reveal
- Badge "1.600+ médicos parceiros" reforçada
- CTA WhatsApp Médico destacado

---

### Seção 08 — Fluxo RDC 660 (Timeline)

**Branch:** `refresh/08-rdc-flow`

**Entregáveis:**
- Timeline horizontal (desktop) / vertical (mobile)
- 4 etapas com ícones SVG customizados
- Conectores animados entre etapas
- Scroll-reveal progressivo
- Numeração mono (01, 02, 03, 04)

---

### Seção 09 — Base de Conhecimento (Artigos)

**Branch:** `refresh/09-articles`

**Entregáveis:**
- Cards editoriais com tag de categoria
- Tempo de leitura em mono ("11 min")
- Hover lift sutil
- Layout em 3 colunas (desktop)

---

### Seção 10 — CTA Final + Footer

**Branch:** `refresh/10-cta-footer`

**Entregáveis:**
- Bloco de fechamento com gradiente sutil verde→âmbar
- Footer com hierarquia tipográfica clara
- Badges de certificação refinadas
- Contato com ícones inline

---

### Seção 11 — Páginas Internas

**Branch:** `refresh/11-internal-pages`

**Entregáveis:**
- Aplicar sistema de design em `/sobre`, `/contato`, `/produtos`, `/ciencia`, `/artigos`, `/acolhimento`, `/para-medicos`
- Reaproveitar componentes criados nas seções 01-10
- Refinamento de layout específico onde necessário

---

## 7. Prompt Mestre para Claude Code

A cada nova seção, o prompt inicial para o Claude Code deve seguir este template:

```
Estou trabalhando no redesign do site cbmed.com.br (Next.js + Tailwind).
SDD completo está em: [caminho/SDD_REDESIGN_FRONTEND_CBMED.md]

Vou executar a Seção XX: [nome da seção].

Regras inegociáveis:
1. Não alterar lógica de negócio, conteúdo textual, rotas, ou integrações.
2. Antes de qualquer mudança, confirme que está na branch correta:
   git status deve mostrar refresh/XX-nome-secao
3. Commits atômicos com Conventional Commits.
4. Antes de cada commit: rodar npm run dev e verificar console.
5. Ao final da seção: rodar npm run build e garantir que passa.
6. NÃO mergeie para main. Apenas push da branch.

Por favor, comece lendo o SDD e me confirme o entendimento antes de tocar em qualquer arquivo.
```

---

## 8. Critérios Gerais de Aceitação

Para cada seção poder ser mergeada:

- ✅ Build passa (`npm run build` sem erros)
- ✅ Dev roda (`npm run dev` sem warnings críticos)
- ✅ Preview Vercel renderiza corretamente
- ✅ Desktop e mobile validados manualmente
- ✅ Lighthouse Performance: não cair >10 pontos vs. baseline da `main` atual
- ✅ Lighthouse Accessibility: ≥90
- ✅ Sem mudanças em conteúdo textual ou estrutura de rotas
- ✅ Aprovação explícita do Vinicius

---

## 9. Próximos Passos Imediatos

1. Vinicius lê e aprova este SDD
2. Criar tag de backup: `git tag pre-redesign-v1 && git push origin pre-redesign-v1`
3. Iniciar **Seção 01 — Design Tokens** com Claude Code
4. Validar no preview
5. Merge na main
6. Avançar para Seção 02

---

**Fim do documento.**
