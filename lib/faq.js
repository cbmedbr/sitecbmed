// ─── Perguntas frequentes ────────────────────────────────────────────────────
// Extraídas das páginas para servirem de fonte única: a UI renderiza daqui e o
// JSON-LD (FAQPage) também. O /acolhimento é 'use client', então só um módulo
// compartilhado permite ao layout servidor emitir o schema sem duplicar texto.
//
// Ao editar uma resposta aqui, o dado estruturado acompanha automaticamente.
// Cuidado: respostas que se contradizem entre as duas páginas viram dado
// estruturado contraditório no mesmo domínio — foi o que acontecia com o prazo
// de entrega (uma dizia 30 dias, a outra 15).

export const FAQ_SOBRE = [
  { pergunta: 'O uso de Cannabis Medicinal é legal no Brasil?',           resposta: 'Sim. A ANVISA regulamenta a importação e o uso de produtos à base de cannabis por meio da RDC 660, desde que haja prescrição médica e autorização do órgão. A CBMed auxilia todo esse processo.' },
  { pergunta: 'Preciso de receita médica para ter acesso ao óleo de CBD?', resposta: 'Sim, é necessária prescrição de médico habilitado. Nossa assessoria conecta você aos profissionais adequados e cuida de toda a documentação junto à ANVISA.' },
  { pergunta: 'Quanto tempo leva o processo de acesso ao produto?',        resposta: 'Em até 20 dias após a autorização da ANVISA. Nossa equipe agiliza cada etapa para garantir o menor prazo possível.' },
  { pergunta: 'Vocês atendem pacientes de todo o Brasil?',                resposta: 'Sim! Realizamos atendimentos remotos para pacientes de todo o Brasil com a mesma qualidade e atenção.' },
]

// Respostas tiradas dos artigos de 26/10/2026 (o-que-e-a-rdc-660,
// receita-oleo-de-cbd e acesso-legal-oleo-de-cbd-brasil). Não acrescentar fato
// regulatório que não esteja neles.
export const FAQ_COMO_FUNCIONA = [
  { pergunta: 'A autorização da Anvisa para importar é paga?',    resposta: 'Não. O cadastro pelo Portal gov.br é gratuito.' },
  { pergunta: 'Quem pode fazer o pedido de importação?',          resposta: 'O próprio paciente, o responsável legal ou um procurador legalmente constituído (RDC 660/2022, Art. 3º).' },
  { pergunta: 'Quanto tempo vale a autorização da Anvisa?',       resposta: 'O cadastro vale 2 anos (RDC 660, Art. 8º) e permite várias importações nesse período, com receita válida.' },
  { pergunta: 'Quanto tempo vale a receita para importar?',       resposta: '6 meses a partir da emissão (RDC 660, Art. 7º, § 5º).' },
  { pergunta: 'Posso escrever só CBD na receita?',                resposta: 'Não. O gov.br pede o nome comercial do produto na receita e informa que termos como Canabidiol, CBD, Hemp Oil, Extrato de Cannabis e óleo de CBD não são nomes comerciais.' },
  { pergunta: 'A receita para importar pode ser digital?',        resposta: 'Sim, e esse é o formato preferencial. A RDC 660/2022 pede receita preferencialmente eletrônica, com certificado digital ICP-Brasil (Art. 7º, § 3º). A receita em papel é admitida quando o profissional não tem certificado digital (§ 4º).' },
  { pergunta: 'Posso repassar ou vender o produto importado?',    resposta: 'Não. O uso é pessoal e intransferível: o produto não pode ser repassado nem vendido (RDC 660/2022, Arts. 15 e 16).' },
]

export const FAQ_ACOLHIMENTO = [
  { pergunta: 'Quanto tempo leva o processo completo?',             resposta: 'Em até 20 dias após a autorização da ANVISA. A CBMed monitora cada etapa e mantém você informado em tempo real.' },
  { pergunta: 'O produto pode ser entregue em qualquer cidade?',    resposta: 'Sim. Atendemos pacientes em todo o território nacional. A entrega é feita no endereço informado na documentação.' },
  { pergunta: 'Qual é o papel da CBMed no processo?',              resposta: 'Somos a assessoria estratégica: organizamos a documentação, orientamos e acompanhamos o cadastro na ANVISA (feito em nome do paciente), coordenamos a importação e acompanhamos a entrega. Não vendemos produtos diretamente.' },
  { pergunta: 'Preciso renovar a autorização a cada pedido?',       resposta: 'Não. O cadastro na ANVISA vale por 2 anos e permite várias importações nesse período, desde que a receita esteja válida (6 meses). Cada remessa exige seus próprios documentos, e a CBMed acompanha os prazos para avisar você antes de vencerem.' },
  { pergunta: 'Ainda não tenho prescrição. Como proceder?',         resposta: 'Nossa equipe conecta você a médicos parceiros habilitados para avaliação e emissão da prescrição adequada ao seu caso.' },
]
