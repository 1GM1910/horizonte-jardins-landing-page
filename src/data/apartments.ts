export const INTEREST_FORM_URL = 'https://forms.gle/ZTiTGGkuThTTP5yh9';

export const trackInterestClick = (location?: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'click_tenho_interesse', {
      event_category: 'lead_generation',
      event_label: location || 'cta_button',
    });
  }
};

export interface Typology {
  id: string;
  name: string;
  subtitle: string;
  area: string;
  suites: string;
  parking: string;
  description: string;
  highlights: string[];
  startingPrice: string;
  estimatedCondo: string;
  floor: string;
}

export const TYPOLOGIES: Typology[] = [
  {
    id: 'residence-84',
    name: 'Essence Residence',
    subtitle: 'Apartamento 84m² · 2 Suítes',
    area: '84 m²',
    suites: '2 Suítes',
    parking: '1 ou 2 Vagas',
    description: 'Planta inteligente e fluida com living integrado à varanda gourmet nivelada. Ideal para casais, jovens profissionais ou investidores com foco em alta rentabilidade.',
    highlights: [
      'Churrasqueira a carvão na varanda',
      'Lavabo social independente',
      'Persianas motorizadas nos quartos',
      'Infraestrutura para ar condicionado split em todos os cômodos'
    ],
    startingPrice: 'A partir de R$ 890.000',
    estimatedCondo: 'R$ 720 / mês',
    floor: '5º ao 16º andar'
  },
  {
    id: 'residence-132',
    name: 'Horizon Elegance',
    subtitle: 'Apartamento 132m² · 3 Suítes',
    area: '132 m²',
    suites: '3 Suítes Plenas',
    parking: '2 Vagas demarcadas',
    description: 'Espaço generoso com circulação íntima isolada da área social. Amplo living para 3 ambientes, cozinha com ilha integrada e suíte master com closet walk-in.',
    highlights: [
      'Elevador com hall privativo e biometria',
      'Suíte master com cuba dupla e espaço para banheira',
      'Área de serviço isolada com despensa',
      'Depósito privativo na garagem (hobby box)'
    ],
    startingPrice: 'A partir de R$ 1.480.000',
    estimatedCondo: 'R$ 1.150 / mês',
    floor: '17º ao 28º andar'
  },
  {
    id: 'penthouse-210',
    name: 'Skyline Penthouse',
    subtitle: 'Cobertura Duplex 210m² · 4 Suítes',
    area: '210 m²',
    suites: '4 Suítes (Master c/ terraço)',
    parking: '3 Vagas + Ponto elétrico',
    description: 'O topo da exclusividade urbana. Cobertura duplex com pé-direito duplo no living, terraço descoberto com piscina privativa aquecida e vista panorâmica de 360° para o parque.',
    highlights: [
      'Piscina privativa com deck de madeira natural',
      'Espaço gourmet com lareira ecológica',
      'Ponto de recarga rápida para veículo elétrico na vaga',
      'Tratamento acústico especial nas lajes e esquadrias de alta performance'
    ],
    startingPrice: 'A partir de R$ 2.650.000',
    estimatedCondo: 'R$ 1.890 / mês',
    floor: '29º e 30º andar'
  }
];

export interface Amenity {
  title: string;
  category: string;
  description: string;
}

export const AMENITIES: Amenity[] = [
  {
    title: 'Rooftop Lounge & Piscina Infinita',
    category: 'Bem-estar',
    description: 'Piscina aquecida a 110 metros de altura com borda infinita, solarium com espreguiçadeiras e vista ininterrupta para o pôr do sol.'
  },
  {
    title: 'Wellness SPA & Sauna Seca/Úmida',
    category: 'Relaxamento',
    description: 'Ambiente com sala de massagem, banheiras de imersão e saunas integradas com vestiários dedicados.'
  },
  {
    title: 'Fitness Studio por Consultoria Olímpica',
    category: 'Saúde',
    description: 'Equipamentos de musculação e cardio de última geração da Technogym, área de cross training e estúdio para pilates.'
  },
  {
    title: 'Espaço Gourmet com Adega Privativa',
    category: 'Convivência',
    description: 'Salão refinado equipado com eletrodomésticos premium, churrasqueira parrilla e armários climatizados para vinhos.'
  },
  {
    title: 'Coworking & Salas de Reunião Acústicas',
    category: 'Produtividade',
    description: 'Espaço compartilhado para trabalho remoto com fibra óptica de alta velocidade e salas privativas para videoconferências.'
  },
  {
    title: 'Pet Place & Brinquedoteca Lúdica',
    category: 'Família',
    description: 'Área com gramado e obstáculos para animais de estimação, além de espaço infantil seguro e interativo.'
  }
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: 'Qual é a previsão de entrega das chaves da obra?',
    answer: 'O cronograma de obras prevê a conclusão e entrega das chaves no segundo semestre de 2027, com seguro garantia de entrega e patrimônio de afetação constituído em cartório.'
  },
  {
    question: 'Como funciona o fluxo de pagamento durante o período de obras?',
    answer: 'Oferecemos condições especiais de lançamento com apenas 10% a 15% de entrada inicial, parcelas mensais suaves corrigidas pelo INCC durante a construção, e o saldo restante de 60% a 70% financiável por qualquer banco ou quitado na entrega das chaves.'
  },
  {
    question: 'É possível personalizar acabamentos e layout interno da planta?',
    answer: 'Sim! Os proprietários contam com o programa exclusivo de personalização arquitetônica, permitindo unificação de cômodos, alteração de pontos elétricos/hidráulicos e escolha de revestimentos antes da fase de acabamento.'
  },
  {
    question: 'O empreendimento conta com vagas para carros elétricos?',
    answer: 'Sim, todas as unidades contam com infraestrutura de conduítes dedicada para carregadores veiculares, e as coberturas já possuem a estação wallbox instalada.'
  },
  {
    question: 'Como faço para receber a tabela de preços oficial e agendar uma visita ao decorado?',
    answer: 'Basta clicar no botão "Tenho Interesse" e preencher o breve formulário. Um de nossos consultores executivos entrará em contato em menos de 15 minutos com o book digital completo e convite exclusivo.'
  }
];
