/**
 * ─────────────────────────────────────────────────────────────
 *  Base de Artigos CBMed
 *  Para publicar um novo artigo, adicione um objeto ao array
 *  seguindo o mesmo schema dos exemplos abaixo.
 * ─────────────────────────────────────────────────────────────
 *
 *  Schema de cada artigo:
 *  {
 *    slug:         string   — URL amigável, único
 *    titulo:       string
 *    subtitulo:    string
 *    categoria:    string   — 'Saúde Mental' | 'Neurologia' | 'Regulatório' | etc.
 *    autor:        string
 *    data:         string   — formato 'YYYY-MM-DD'
 *    tempoLeitura: string   — ex. '8 min'
 *    resumo:       string   — 1–2 frases para cards e SEO
 *    imagem:       string   — caminho em /public/artigos/ ou URL externa
 *    secoes: [
 *      { tipo: 'intro' | 'h2' | 'paragrafo' | 'lista' | 'citacao' | 'referencias',
 *        titulo?: string,       — obrigatório para tipo 'h2'
 *        conteudo?: string,     — texto corrido
 *        itens?: string[],      — para tipo 'lista'
 *        fonte?: string }       — para tipo 'citacao'
 *    ]
 *  }
 */

export const artigos = [
  // ─────────────────────────────────────────────────────────
  //  ARTIGO 1
  // ─────────────────────────────────────────────────────────
  {
    slug: 'cannabis-medicinal-e-ansiedade',
    titulo: 'Cannabis Medicinal e Ansiedade: O que a Ciência Diz',
    subtitulo: 'Uma análise das evidências clínicas sobre o uso de CBD nos transtornos de ansiedade, mecanismos de ação e implicações terapêuticas para a prática clínica brasileira.',
    categoria: 'Saúde Mental',
    autor: 'Equipe Científica CBMed',
    data: '2026-03-20',
    tempoLeitura: '11 min',
    resumo: 'Revisão das principais evidências clínicas sobre o uso do cannabidiol (CBD) nos transtornos de ansiedade, do mecanismo de ação ao protocolo terapêutico prático.',
    imagem: 'https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=1200&q=80',
    imagemHero: '/hero-artigo-ansiedade.png',
    secoes: [
      {
        tipo: 'intro',
        conteudo: 'Os transtornos de ansiedade representam a classe de transtornos mentais mais prevalente no mundo, afetando aproximadamente 264 milhões de pessoas globalmente, segundo a Organização Mundial da Saúde (OMS). No Brasil, estimativas indicam que cerca de 18,6 milhões de brasileiros sofrem com alguma forma de transtorno ansioso, a maior prevalência do continente americano. Diante desse cenário, o interesse clínico pelo cannabidiol (CBD) como adjuvante terapêutico tem crescido exponencialmente, impulsionado por uma base crescente de evidências pré-clínicas e clínicas.',
      },
      {
        tipo: 'h2',
        titulo: 'O Sistema Endocanabinoide e a Regulação da Ansiedade',
        conteudo: 'O sistema endocanabinoide (SEC) é um sistema de sinalização biológica ubíquo, composto por receptores canabinoides (CB1 e CB2), ligantes endógenos (anandamida e 2-AG) e enzimas de síntese e degradação. No sistema nervoso central, os receptores CB1 são densamente expressos em regiões críticas para o processamento emocional: amígdala, hipocampo, córtex pré-frontal e substância cinzenta periaquedutal, todas estruturas intimamente associadas à gênese e regulação das respostas de medo e ansiedade.\n\nO CBD atua no SEC de forma indireta: diferentemente do THC, não se liga com alta afinidade aos receptores CB1 ou CB2. Em vez disso, inibe a enzima FAAH (fatty acid amide hydrolase), responsável pela degradação da anandamida, aumentando os níveis endógenos desse canabinoide com ação ansiolítica. Adicionalmente, o CBD ativa receptores 5-HT1A (serotonínicos), TRPV1 e PPAR-γ, e modula negativamente os receptores GPR55, mecanismos que, em conjunto, explicam seu perfil ansiolítico sem o potencial de abuso característico do THC.',
      },
      {
        tipo: 'h2',
        titulo: 'Evidências Clínicas: O que os Estudos Demonstram',
        conteudo: 'A literatura científica sobre CBD e ansiedade tem se expandido significativamente na última década, com estudos variando de modelos animais a ensaios clínicos randomizados em humanos.',
      },
      {
        tipo: 'lista',
        itens: [
          'Blessing et al. (Neurotherapeutics, 2015): Revisão sistemática de estudos pré-clínicos e clínicos demonstrou que o CBD apresenta propriedades ansiolíticas em múltiplos modelos, incluindo transtorno de ansiedade social, TEPT, TOC, transtorno de pânico e ansiedade generalizada. Os autores concluíram que o CBD tem potencial considerável como tratamento para múltiplos transtornos de ansiedade.',
          'Bergamaschi et al. (Neuropsychopharmacology, 2011): Em estudo randomizado duplo-cego, 600 mg de CBD reduziram significativamente a ansiedade em pacientes com transtorno de ansiedade social (TAS) submetidos a simulação de fala em público, comparável ao desempenho de ansiolíticos convencionais em medidas subjetivas e fisiológicas.',
          'Shannon et al. (The Permanente Journal, 2019): Estudo retrospectivo de série de casos com 72 adultos (47 com ansiedade primária, 25 com insônia primária). Após o primeiro mês com CBD, 79,2% dos pacientes relataram redução da ansiedade e 66,7% referiram melhora do sono. Os efeitos se mantiveram consistentes ao longo de três meses de acompanhamento.',
          'Crippa et al. (Journal of Psychopharmacology, 2011): Neuroimagem por ressonância magnética funcional demonstrou que o CBD reduz atividade na amígdala e na região parahipocampal direita, áreas hiperativas em pacientes com TAS, com correlação com a redução subjetiva de ansiedade.',
        ],
      },
      {
        tipo: 'h2',
        titulo: 'CBD versus Ansiolíticos Convencionais',
        conteudo: 'Os benzodiazepínicos (como diazepam e clonazepam) e os inibidores seletivos da recaptação de serotonina (ISRS, como sertralina e escitalopram) constituem a farmacoterapia padrão para transtornos de ansiedade. Embora eficazes, apresentam limitações importantes: dependência química e síndrome de abstinência (benzodiazepínicos), latência de efeito de 4–6 semanas (ISRS), efeitos adversos como disfunção sexual, ganho de peso e sedação, e resposta insatisfatória em 30–40% dos pacientes.\n\nO CBD emerge como alternativa com perfil de segurança favorável: ausência de dependência física, tolerância bem documentada, sem efeitos psicoativos em doses terapêuticas (até 1500 mg/dia em estudos de fase I) e sem síndrome de abstinência clinicamente relevante. O CBD pode ser particularmente útil como adjuvante em pacientes com resposta parcial a ISRS, em populações que não toleram benzodiazepínicos, ou como abordagem inicial em formas leves a moderadas de ansiedade.',
      },
      {
        tipo: 'citacao',
        conteudo: '"O CBD demonstra um perfil de ação ansiolítica em múltiplos modelos relevantes para transtornos de ansiedade humanos, com um perfil de segurança favorável que justifica investigação clínica mais aprofundada."',
        fonte: 'Blessing, E.M. et al., Neurotherapeutics, 2015',
      },
      {
        tipo: 'h2',
        titulo: 'Considerações sobre Concentração e Dosagem',
        conteudo: 'A relação dose-resposta do CBD para ansiedade apresenta um padrão em forma de U invertido em modelos animais; doses muito baixas e muito altas são menos eficazes que doses intermediárias. Em estudos clínicos, doses entre 150 mg e 600 mg têm demonstrado eficácia para ansiedade situacional aguda. Para transtornos crônicos, o protocolo típico inicia com 25–75 mg/dia, com titulação gradual a cada 1–2 semanas conforme resposta clínica e tolerabilidade.\n\nÓleos Full Spectrum são frequentemente preferidos por médicos prescritores em razão do efeito entourage: a potencialização mútua entre CBD, CBG, CBC, terpenos e outros fitocannabinoides presentes na formulação. A via sublingual permite absorção mais rápida (onset de 15–45 minutos) e biodisponibilidade superior (~13–19%) comparada à via oral convencional.',
      },
      {
        tipo: 'h2',
        titulo: 'Conclusão e Perspectivas',
        conteudo: 'As evidências disponíveis sustentam o CBD como uma opção terapêutica promissora para transtornos de ansiedade, com mecanismos de ação biologicamente plausíveis e perfil de segurança favorável. Embora ainda sejam necessários ensaios clínicos randomizados de longa duração com amostras maiores, a prática clínica responsável, com prescrição individualizada, monitoramento adequado e conformidade com as regulamentações da ANVISA, permite que pacientes brasileiros acessem esse tratamento de forma legal e segura.\n\nA avaliação médica individualizada permanece indispensável: o CBD não substitui tratamentos estabelecidos, mas pode representar um adjuvante valioso, especialmente para pacientes que não toleram ou apresentam resposta parcial à farmacoterapia convencional.',
      },
      {
        tipo: 'referencias',
        itens: [
          'Blessing EM, Steenkamp MM, Manzanares J, Marmar CR. Cannabidiol as a Potential Treatment for Anxiety Disorders. Neurotherapeutics. 2015;12(4):825-836.',
          'Bergamaschi MM, et al. Cannabidiol reduces the anxiety induced by simulated public speaking in treatment-naïve social phobia patients. Neuropsychopharmacology. 2011;36(6):1219-1226.',
          'Shannon S, Lewis N, Lee H, Hughes S. Cannabidiol in Anxiety and Sleep: A Large Case Series. Perm J. 2019;23:18-041.',
          'Crippa JA, et al. Neural basis of anxiolytic effects of cannabidiol (CBD) in generalized social anxiety disorder: a preliminary report. J Psychopharmacol. 2011;25(1):121-130.',
          'World Health Organization. Cannabidiol (CBD) Critical Review Report. Expert Committee on Drug Dependence. 2018.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  //  ARTIGO 2
  // ─────────────────────────────────────────────────────────
  {
    slug: 'o-que-e-a-rdc-660',
    titulo: 'RDC 660 da ANVISA: Guia Completo para o Acesso Legal ao CBD no Brasil',
    subtitulo: 'Tudo o que pacientes e médicos precisam saber sobre a resolução que regulamenta a importação de Cannabis Medicinal no Brasil: direitos, obrigações e o passo a passo do processo.',
    categoria: 'Regulatório',
    autor: 'Equipe Científica CBMed',
    data: '2026-03-10',
    tempoLeitura: '9 min',
    resumo: 'Guia completo sobre a RDC 660/2022 da ANVISA: quem pode importar CBD, quais documentos são necessários e como funciona o processo de autorização de importação por pessoa física.',
    imagem: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
    imagemHero: '/hero-artigo-rdc660.png',
    secoes: [
      {
        tipo: 'intro',
        conteudo: 'Em 2022, a Agência Nacional de Vigilância Sanitária (ANVISA) publicou a Resolução da Diretoria Colegiada nº 660, consolidando o marco regulatório brasileiro para o acesso a produtos à base de Cannabis para fins medicinais. Esta resolução representa um avanço significativo na política de saúde pública brasileira, ao criar um caminho legal, claro e acessível para que pacientes que necessitam de Cannabis Medicinal possam obtê-la com segurança jurídica e qualidade garantida.',
      },
      {
        tipo: 'h2',
        titulo: 'O que é a RDC 660 e por que ela importa',
        conteudo: 'A RDC 660/2022 regulamenta a importação de produtos à base de Cannabis por pessoa física para uso próprio no Brasil. Publicada em 30 de março de 2022, ela revogou a anterior Resolução 327/2019 e trouxe importantes simplificações no processo de autorização de importação.\n\nAntes da regulamentação, pacientes que necessitavam de Cannabis Medicinal se encontravam em um vácuo jurídico, sem acesso legal ao tratamento, muitas vezes recorrendo a vias informais com riscos para sua saúde e segurança. A RDC 660 mudou esse cenário ao estabelecer um processo claro, transparente e acessível, reconhecendo o direito do paciente ao tratamento com supervisão médica adequada.',
      },
      {
        tipo: 'h2',
        titulo: 'Quem pode solicitar a importação',
        conteudo: 'A importação é destinada exclusivamente a pessoas físicas para uso próprio; não é permitida a importação para fins comerciais ou para terceiros. O paciente (ou seu representante legal, no caso de menores ou incapazes) deve atender aos seguintes requisitos:',
      },
      {
        tipo: 'lista',
        itens: [
          'Possuir prescrição médica de profissional habilitado e devidamente registrado no CRM',
          'Apresentar documentação pessoal válida (documento de identidade com foto e comprovante de residência)',
          'O produto deve ter autorização de comercialização no país de origem',
          'O produto deve ser para uso exclusivamente pessoal e sem finalidade comercial',
          'O teor de THC deve estar dentro dos limites estabelecidos pela ANVISA (≤ 0,2% em peso seco para produtos de uso contínuo)',
        ],
      },
      {
        tipo: 'h2',
        titulo: 'Documentação exigida pela ANVISA',
        conteudo: 'O processo de autorização de importação junto à ANVISA exige os seguintes documentos, que devem ser enviados de forma digital através do sistema da agência:',
      },
      {
        tipo: 'lista',
        itens: [
          'Prescrição médica: deve conter o nome do produto, a concentração em mg, a posologia (dose e frequência), a via de administração, o CID correspondente ao diagnóstico, e a assinatura com CRM do prescritor.',
          'Documento de identificação com foto do paciente: RG, CNH ou Passaporte (cópia digitalizada legível, frente e verso quando houver).',
          'Comprovante de residência: emitido nos últimos 90 dias em nome do paciente, com endereço de entrega.',
          'Relatório médico (opcional, mas recomendado): documento com histórico clínico, diagnóstico detalhado e justificativa terapêutica, que agiliza significativamente a análise da ANVISA.',
        ],
      },
      {
        tipo: 'h2',
        titulo: 'O processo passo a passo',
        conteudo: 'A jornada completa de acesso ao CBD via RDC 660 envolve as seguintes etapas, que a CBMed gerencia integralmente pelo paciente:',
      },
      {
        tipo: 'lista',
        itens: [
          'Avaliação médica e emissão da prescrição: O médico prescritor realiza avaliação clínica e emite receituário conforme as exigências da RDC 660. A CBMed fornece modelo padronizado para médicos parceiros.',
          'Organização e revisão da documentação: Nossa equipe verifica cada documento para garantir que esteja completo e conforme exigido pela ANVISA, evitando indeferimentos por falta ou inconsistência documental.',
          'Submissão à ANVISA: Os documentos são protocolados no sistema da ANVISA. O prazo de análise varia, mas tipicamente ocorre em 7 a 15 dias úteis após a submissão completa.',
          'Autorização e importação: Com a autorização em mãos, o produto é solicitado ao laboratório nos EUA, que realiza o despacho com toda a documentação aduaneira necessária.',
          'Entrega em domicílio: O produto chega ao endereço do paciente com rastreamento completo. O prazo total do processo é de até 30 dias após a autorização da ANVISA.',
        ],
      },
      {
        tipo: 'h2',
        titulo: 'Renovação e validade da autorização',
        conteudo: 'Cada autorização de importação concedida pela ANVISA é válida para uma importação específica. Quando o paciente necessite de uma nova remessa do produto, um novo processo de autorização deve ser iniciado. A prescrição médica deve ser renovada periodicamente conforme avaliação clínica.\n\nA CBMed gerencia o processo de renovação para todos os seus pacientes, monitorando proativamente o estoque restante e iniciando o novo processo com antecedência para evitar interrupções no tratamento.',
      },
      {
        tipo: 'citacao',
        conteudo: '"A RDC 660 representa um marco civilizatório na política de saúde brasileira, garantindo que pacientes que precisam de Cannabis Medicinal possam acessá-la com segurança, legalidade e dignidade."',
        fonte: 'Nota técnica CBMed, 2022',
      },
      {
        tipo: 'h2',
        titulo: 'Limitações e pontos de atenção',
        conteudo: 'É importante que pacientes e médicos estejam cientes de algumas limitações da RDC 660. A norma não autoriza a produção nacional de Cannabis Medicinal para consumo individual; o produto deve ser importado. Também não permite a aquisição em farmácias brasileiras sem o processo de importação regulamentado. Qualquer comercialização, repasse ou divisão do produto importado é estritamente proibida e sujeita a sanções legais.',
      },
      {
        tipo: 'referencias',
        itens: [
          'ANVISA. Resolução da Diretoria Colegiada - RDC nº 660, de 30 de março de 2022. Diário Oficial da União, 2022.',
          'ANVISA. Perguntas e Respostas sobre a RDC 660/2022. Disponível em: anvisa.gov.br. Acesso em: 2026.',
          'ANVISA. Informe Técnico nº 17/2022. Produtos de Cannabis: regulamentação vigente.',
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  //  ARTIGO 3
  // ─────────────────────────────────────────────────────────
  {
    slug: 'cbd-e-epilepsia-evidencias-clinicas',
    titulo: 'CBD e Epilepsia Refratária: Evidências Clínicas e Perspectivas Terapêuticas',
    subtitulo: 'Uma análise das melhores evidências disponíveis sobre o uso do cannabidiol no controle de crises convulsivas refratárias, com foco em Síndrome de Dravet, Síndrome de Lennox-Gastaut e outras encefalopatias epilépticas.',
    categoria: 'Neurologia',
    autor: 'Equipe Científica CBMed',
    data: '2026-02-28',
    tempoLeitura: '13 min',
    resumo: 'Revisão das evidências de nível A sobre o uso de cannabidiol (CBD) na epilepsia refratária, incluindo dados dos grandes ensaios clínicos randomizados e o mecanismo anticonvulsivante do CBD.',
    imagem: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80',
    imagemHero: '/hero-artigo-epilepsia.png',
    secoes: [
      {
        tipo: 'intro',
        conteudo: 'A epilepsia refratária, definida como a falha em alcançar controle sustentado de crises após o uso adequado de dois ou mais fármacos antiepilépticos tolerados, de mecanismos de ação distintos, afeta aproximadamente 30% de todas as pessoas com epilepsia. Para essa população, especialmente crianças com encefalopatias epilépticas graves como a Síndrome de Dravet e a Síndrome de Lennox-Gastaut, as opções terapêuticas são limitadas e frequentemente acompanhadas de efeitos adversos significativos. O cannabidiol (CBD) emerge, nesse contexto, como uma das adições mais promissoras ao arsenal antiepiléptico das últimas décadas, com o mais alto nível de evidência clínica (Nível A) entre as indicações do CBD.',
      },
      {
        tipo: 'h2',
        titulo: 'Mecanismos Anticonvulsivantes do CBD',
        conteudo: 'O CBD exerce seus efeitos antiepilépticos por meio de múltiplos mecanismos de ação, distintos do mecanismo dos antiepilépticos convencionais, o que explica sua eficácia em síndromes refratárias às abordagens tradicionais:',
      },
      {
        tipo: 'lista',
        itens: [
          'Modulação de receptores de sódio: O CBD inibe canais de sódio voltagem-dependentes (Nav1.1, Nav1.6), reduzindo a excitabilidade neuronal patológica subjacente às crises convulsivas.',
          'Ativação de receptores TRPV1: A ativação e subsequente dessensibilização dos receptores TRPV1 pelo CBD reduz a liberação de neurotransmissores excitatórios na fenda sináptica.',
          'Inibição da adenosina quinase: Ao inibir essa enzima, o CBD aumenta os níveis de adenosina extracelular, um neuromodulador endógeno com ação anticonvulsivante bem documentada.',
          'Modulação de receptores GPR55: O CBD antagoniza esses receptores, cuja ativação excessiva está associada à facilitação de crises.',
          'Inibição da captação de anandamida: Elevando os níveis do endocanabinoide anandamida, o CBD promove efeitos inibitórios sobre circuitos hiperativos.',
        ],
      },
      {
        tipo: 'h2',
        titulo: 'Os Grandes Ensaios Clínicos: Nível de Evidência A',
        conteudo: 'A robustez das evidências clínicas para o CBD na epilepsia refratária é única entre as indicações de cannabis medicinal, com múltiplos ensaios clínicos randomizados, duplo-cegos e controlados por placebo publicados nas mais prestigiosas revistas médicas do mundo.',
      },
      {
        tipo: 'lista',
        itens: [
          'Devinsky et al., NEJM (2017), Síndrome de Dravet: Este landmark trial randomizou 120 crianças com Síndrome de Dravet para CBD 20 mg/kg/dia ou placebo, em adição à terapia antiepiléptica em curso. O grupo CBD apresentou redução mediana de 38,9% nas crises convulsivas (vs. 13,3% no placebo; p=0,01). 5% dos pacientes atingiram ausência total de crises. Publicado no New England Journal of Medicine, o periódico de maior impacto da medicina.',
          'Thiele et al., Lancet (2018), Síndrome de Lennox-Gastaut: Em 225 pacientes com SLG, CBD 20 mg/kg/dia reduziu em 41,9% a frequência de crises de queda (drop seizures) vs. 17,2% no placebo (p=0,0047). O estudo com 10 mg/kg/dia também demonstrou superioridade sobre placebo (37,2% vs. 17,2%; p=0,0016).',
          'Devinsky et al., Lancet Neurology (2018), SLG (confirmação): Segundo estudo randomizado em SLG confirmou a redução de 43,9% nas crises de queda com CBD vs. 21,8% com placebo. Dados de extensão aberta de 96 semanas mostraram manutenção dos efeitos anticonvulsivantes com segurança a longo prazo.',
          'Miller et al., Epilepsia (2020), Complexo de Esclerose Tuberosa: Ensaio clínico randomizado em pacientes com CET e epilepsia refratária demonstrou redução de 48,6% nas crises com CBD vs. 26,5% no placebo (p<0,01).',
        ],
      },
      {
        tipo: 'citacao',
        conteudo: '"A magnitude do efeito anticonvulsivante do CBD, combinada com seu perfil de segurança favorável em populações pediátricas, representa um avanço terapêutico genuíno para pacientes que haviam esgotado as opções terapêuticas convencionais."',
        fonte: 'Devinsky O. et al., New England Journal of Medicine, 2017',
      },
      {
        tipo: 'h2',
        titulo: 'Interações Farmacológicas Relevantes',
        conteudo: 'Uma consideração clínica crucial é a interação entre CBD e o ácido valpróico (valproato), antiepiléptico amplamente utilizado nas síndromes tratadas com CBD. O CBD inibe enzimas do citocromo P450 (CYP2C9 e CYP2C19), podendo elevar os níveis plasmáticos de valproato e aumentar o risco de hepatotoxicidade. A monitorização das transaminases hepáticas é mandatória antes e durante o tratamento combinado.\n\nOutra interação importante ocorre com o clobazam: o CBD eleva os níveis de seu metabólito ativo N-desmetilclobazam (em até 500% em alguns pacientes), potencializando efeitos sedativos. A redução da dose de clobazam deve ser considerada conforme a resposta clínica.',
      },
      {
        tipo: 'h2',
        titulo: 'Perfil de Segurança e Efeitos Adversos',
        conteudo: 'Nos ensaios clínicos pivotais, os efeitos adversos mais comuns com CBD foram sonolenção (25–36%), diminuição do apetite (16–28%), diarreia (19–25%) e elevação de transaminases (15–20%, especialmente em uso concomitante com valproato). A maioria dos eventos adversos foi classificada como leve a moderada e manejável com ajuste de dose. Eventos adversos graves foram reportados em uma minoria de pacientes e geralmente associados a interações medicamentosas. A ausência de dependência física e tolerância farmacodinâmica ao efeito anticonvulsivante, ao contrário de alguns antiepilépticos clássicos, representa uma vantagem clinicamente relevante.',
      },
      {
        tipo: 'h2',
        titulo: 'Protocolo Terapêutico Recomendado',
        conteudo: 'Com base nos ensaios clínicos publicados e nas recomendações das sociedades de neurologia, o protocolo típico para uso de CBD em epilepsia refratária inicia com dose de 2,5 mg/kg/dia, dividida em duas tomadas, com escalada gradual de 2,5 mg/kg a cada 1–2 semanas conforme tolerabilidade e resposta clínica. A dose-alvo nos ensaios foi de 10–20 mg/kg/dia. O tempo de avaliação de resposta clínica deve ser de no mínimo 3 meses em dose estável. A via sublingual, utilizando óleos Full Spectrum de alta concentração (3000 mg ou 6000 mg por frasco), permite titulação precisa e biodisponibilidade consistente.',
      },
      {
        tipo: 'referencias',
        itens: [
          'Devinsky O, et al. Trial of Cannabidiol for Drug-Resistant Seizures in the Dravet Syndrome. N Engl J Med. 2017;376(21):2011-2020.',
          'Thiele EA, et al. Cannabidiol in patients with seizures associated with Lennox-Gastaut syndrome (GWPCARE4). Lancet. 2018;391(10125):1085-1096.',
          'Devinsky O, et al. Effect of cannabidiol on drop seizures in the Lennox-Gastaut syndrome. N Engl J Med. 2018;378(20):1888-1897.',
          'Miller I, et al. Dose-Ranging Effect of Adjunctive Oral Cannabidiol vs Placebo on Convulsive Seizure Frequency in Dravet Syndrome. JAMA Neurol. 2020;77(5):613-621.',
          'Scheffer IE, et al. ILAE classification of the epilepsies: Position paper of the ILAE Commission for Classification and Terminology. Epilepsia. 2017;58(4):512-521.',
        ],
      },
    ],
  },
]

/**
 * Utilitários — não é necessário alterar abaixo para publicar artigos
 */
export function getArtigoPorSlug(slug) {
  return artigos.find(a => a.slug === slug) ?? null
}

export function getArtigosRecentes(n = 3) {
  return [...artigos]
    .sort((a, b) => new Date(b.data) - new Date(a.data))
    .slice(0, n)
}

export function formatarData(iso) {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}
