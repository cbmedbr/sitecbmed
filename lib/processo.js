// ─── Etapas e documentos do processo de importação ──────────────────────────
// Fonte única para /acolhimento e /como-funciona. Ao editar aqui, as duas
// páginas acompanham.

export const DOCUMENTOS = [
  { titulo: 'Prescrição Médica',        descricao: 'Receita com nome do paciente, nome comercial do produto, posologia, data, assinatura e CRM do médico. Vale por 6 meses.', obrigatorio: true,  image: '/icon-prescricao.webp', numero: '01' },
  { titulo: 'Documento com Foto',        descricao: 'RG, CNH ou Passaporte do paciente. Cópia digitalizada legível (frente e verso quando houver).', obrigatorio: true,  image: '/icon-documento.webp',  numero: '02' },
  { titulo: 'Comprovante de Residência', descricao: 'Conta de água, luz, telefone ou bancária com nome do paciente e endereço. Emitida nos últimos 90 dias.', obrigatorio: true,  image: '/icon-residencia.webp', numero: '03' },
  { titulo: 'Relatório Médico',          descricao: 'Relatório clínico com diagnóstico, histórico e justificativa terapêutica. Recomendado pela CBMed (não é exigência da RDC 660).', obrigatorio: false, image: '/icon-relatorio.webp',  numero: '04' },
]

export const ETAPAS = [
  { n:'01', titulo:'Primeiro Contato',      texto:'Entre em contato via WhatsApp. Nossa equipe realiza triagem inicial, entende o seu caso e explica todo o processo sem custo.' },
  { n:'02', titulo:'Avaliação Médica',       texto:'Se você ainda não tem prescrição, conectamos você a um médico parceiro habilitado para avaliação clínica remota ou presencial.' },
  { n:'03', titulo:'Envio da Documentação', texto:'Nossa equipe orienta na coleta de documentos e verifica tudo antes do envio à ANVISA, evitando indeferimentos.' },
  { n:'04', titulo:'Autorização ANVISA',     texto:'Orientamos e acompanhamos o cadastro na ANVISA, feito em nome do paciente. Segundo o gov.br, a autorização sai em até 10 dias corridos (estimativa de até 20).' },
  { n:'05', titulo:'Entrega e acompanhamento', texto:'Com a autorização da Anvisa, nossa equipe acompanha o processo até a entrega no endereço do paciente, com rastreamento, e continua disponível para suporte depois.' },
]
