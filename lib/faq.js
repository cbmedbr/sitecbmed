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
  { pergunta: 'Quanto tempo leva o processo de acesso ao produto?',        resposta: 'Em até 15 dias após a autorização da ANVISA. Nossa equipe agiliza cada etapa para garantir o menor prazo possível.' },
  { pergunta: 'Vocês atendem pacientes de todo o Brasil?',                resposta: 'Sim! Realizamos atendimentos remotos para pacientes de todo o Brasil com a mesma qualidade e atenção.' },
]

export const FAQ_ACOLHIMENTO = [
  { pergunta: 'Quanto tempo leva o processo completo?',             resposta: 'Em até 15 dias após a autorização da ANVISA. A CBMed monitora cada etapa e mantém você informado em tempo real.' },
  { pergunta: 'O produto pode ser entregue em qualquer cidade?',    resposta: 'Sim. Atendemos pacientes em todo o território nacional. A entrega é feita no endereço informado na documentação.' },
  { pergunta: 'Qual é o papel da CBMed no processo?',              resposta: 'Somos a assessoria estratégica: organizamos a documentação, submetemos à ANVISA, coordenamos a importação e acompanhamos a entrega. Não vendemos produtos diretamente.' },
  { pergunta: 'Preciso renovar a autorização a cada pedido?',       resposta: 'Sim. Cada importação requer uma nova autorização ANVISA. A CBMed gerencia todo o processo de renovação com agilidade.' },
  { pergunta: 'Ainda não tenho prescrição. Como proceder?',         resposta: 'Nossa equipe conecta você a médicos parceiros habilitados para avaliação e emissão da prescrição adequada ao seu caso.' },
]
