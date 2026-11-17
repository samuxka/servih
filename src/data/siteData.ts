export type Language = 'pt' | 'en';

export interface HeroSlide {
  id: number;
  titlePt: string;
  subtitlePt: string;
  descPt: string;
  nextTitlePt: string;
  titleEn: string;
  subtitleEn: string;
  descEn: string;
  nextTitleEn: string;
  image: string;
  thumb: string;
}

export interface CategoryItem {
  id: string;
  namePt: string;
  nameEn: string;
  countPt: string;
  countEn: string;
  image: string;
  span: 'narrow' | 'wide';
}

export interface SetPiece {
  id: string;
  namePt: string;
  nameEn: string;
  image: string;
  color: string;
}

export interface ColorVariant {
  id: string;
  namePt: string;
  nameEn: string;
  hex: string;
  pricePt: string;
  oldPricePt?: string;
  priceEn: string;
  oldPriceEn?: string;
  coverImage: string;
  pieceCountPt: string;
  pieceCountEn: string;
}

export interface ProductItem {
  id: number;
  namePt: string;
  nameEn: string;
  categoryPt: string;
  categoryEn: string;
  pricePt: string;
  oldPricePt?: string;
  priceEn: string;
  oldPriceEn?: string;
  badge?: 'SALE' | 'SOLD_OUT' | 'BESTSELLER';
  image: string;
  descPt: string;
  descEn: string;
  isSet?: boolean;
  colorVariants?: ColorVariant[];
  pieces?: SetPiece[];
}

export interface HotspotItem {
  id: number;
  x: number; // percentage from left
  y: number; // percentage from top
  productId: number;
  labelPt: string;
  labelEn: string;
}

export interface FaqItem {
  id: number;
  qPt: string;
  aPt: string;
  qEn: string;
  aEn: string;
}

export const DUBAI_SET_PIECES: SetPiece[] = [
  // 13 Peças Rosé
  {
    id: 'rose-1',
    namePt: 'Caçarola 20cm com Tampa de Vidro',
    nameEn: '20cm Casserole with Glass Lid',
    image: '/dubai/Dubai_13_Rose/01_cacarola_20cm.png',
    color: 'rose',
  },
  {
    id: 'rose-2',
    namePt: 'Caçarola 16cm com Tampa de Vidro',
    nameEn: '16cm Casserole with Glass Lid',
    image: '/dubai/Dubai_13_Rose/02_cacarola_16cm.png',
    color: 'rose',
  },
  {
    id: 'rose-3',
    namePt: 'Panela 20cm com Tampa de Vidro',
    nameEn: '20cm Saucepan with Glass Lid',
    image: '/dubai/Dubai_13_Rose/03_panela_20cm.png',
    color: 'rose',
  },
  {
    id: 'rose-4',
    namePt: 'Panela 18cm com Tampa de Vidro',
    nameEn: '18cm Saucepan with Glass Lid',
    image: '/dubai/Dubai_13_Rose/04_panela_18cm.png',
    color: 'rose',
  },
  {
    id: 'rose-5',
    namePt: 'Panela 16cm com Tampa de Vidro',
    nameEn: '16cm Saucepan with Glass Lid',
    image: '/dubai/Dubai_13_Rose/05_panela_16cm.png',
    color: 'rose',
  },
  {
    id: 'rose-6',
    namePt: 'Panela 14cm com Tampa de Vidro',
    nameEn: '14cm Saucepan with Glass Lid',
    image: '/dubai/Dubai_13_Rose/06_panela_14cm.png',
    color: 'rose',
  },
  {
    id: 'rose-7',
    namePt: 'Frigideira Reta 20cm',
    nameEn: '20cm Straight Frying Pan',
    image: '/dubai/Dubai_13_Rose/07_frigideira_20cm.png',
    color: 'rose',
  },
  {
    id: 'rose-8',
    namePt: 'Frigideira 12cm (Ovos & Tapioca)',
    nameEn: '12cm Mini Egg Skillet',
    image: '/dubai/Dubai_13_Rose/08_frigideira_12cm.png',
    color: 'rose',
  },
  {
    id: 'rose-9',
    namePt: 'Frigideira Funda 22cm',
    nameEn: '22cm Deep Frying Pan',
    image: '/dubai/Dubai_13_Rose/09_frigideira_22cm.png',
    color: 'rose',
  },
  {
    id: 'rose-10',
    namePt: 'Assadeira Redonda Antiaderente',
    nameEn: 'Non-Stick Round Baking Pan',
    image: '/dubai/Dubai_13_Rose/10_assadeira_redonda.png',
    color: 'rose',
  },
  {
    id: 'rose-11',
    namePt: 'Forma com Furo Central',
    nameEn: 'Center-Tube Cake Pan',
    image: '/dubai/Dubai_13_Rose/11_forma_com_furo.png',
    color: 'rose',
  },
  {
    id: 'rose-12',
    namePt: 'Assadeira Quadrada / Retangular',
    nameEn: 'Square / Rectangular Baking Dish',
    image: '/dubai/Dubai_13_Rose/12_assadeira_quadrada.png',
    color: 'rose',
  },
  {
    id: 'rose-13',
    namePt: 'Fervedor Leiteira 14cm',
    nameEn: '14cm Non-Stick Milk Boiler',
    image: '/dubai/Dubai_13_Rose/13_fervedor_14cm.png',
    color: 'rose',
  },

  // Peças Preto (Dubai 8 Preto)
  {
    id: 'preto-1',
    namePt: 'Caçarola 18cm com Tampa de Vidro',
    nameEn: '18cm Casserole with Glass Lid',
    image: '/dubai/Dubai_8_Preto/01_cacarola_18cm.png',
    color: 'preto',
  },
  {
    id: 'preto-2',
    namePt: 'Fervedor Leiteira 14cm',
    nameEn: '14cm Non-Stick Milk Boiler',
    image: '/dubai/Dubai_8_Preto/02_fervedor_14cm.png',
    color: 'preto',
  },
  {
    id: 'preto-3',
    namePt: 'Frigideira 18cm Antiaderente',
    nameEn: '18cm Non-Stick Frying Pan',
    image: '/dubai/Dubai_8_Preto/03_frigideira_18cm.png',
    color: 'preto',
  },
  {
    id: 'preto-4',
    namePt: 'Panela 18cm com Tampa de Vidro',
    nameEn: '18cm Saucepan with Glass Lid',
    image: '/dubai/Dubai_8_Preto/04_panela_18cm.png',
    color: 'preto',
  },
  {
    id: 'preto-5',
    namePt: 'Panela 16cm com Tampa de Vidro',
    nameEn: '16cm Saucepan with Glass Lid',
    image: '/dubai/Dubai_8_Preto/05_panela_16cm.png',
    color: 'preto',
  },
];

export const NAPOLITANO_SET_PIECES: SetPiece[] = [
  // 5 Peças Bege (16cm, 18cm, 20cm, 22cm, 24cm)
  {
    id: 'bege-16',
    namePt: 'Caçarola Napolitano 16cm com Tampa de Vidro — Bege',
    nameEn: '16cm Napolitano Casserole with Glass Lid — Beige',
    image: '/napolitano/Napolitano_Poli_Bege_16cm.png',
    color: 'bege',
  },
  {
    id: 'bege-18',
    namePt: 'Caçarola Napolitano 18cm com Tampa de Vidro — Bege',
    nameEn: '18cm Napolitano Casserole with Glass Lid — Beige',
    image: '/napolitano/Napolitano_Poli_Bege_18cm.png',
    color: 'bege',
  },
  {
    id: 'bege-20',
    namePt: 'Caçarola Napolitano 20cm com Tampa de Vidro — Bege',
    nameEn: '20cm Napolitano Casserole with Glass Lid — Beige',
    image: '/napolitano/Napolitano_Poli_Bege_20cm.png',
    color: 'bege',
  },
  {
    id: 'bege-22',
    namePt: 'Caçarola Napolitano 22cm com Tampa de Vidro — Bege',
    nameEn: '22cm Napolitano Casserole with Glass Lid — Beige',
    image: '/napolitano/Napolitano_Poli_Bege_22cm.png',
    color: 'bege',
  },
  {
    id: 'bege-24',
    namePt: 'Caçarola Napolitano 24cm com Tampa de Vidro — Bege',
    nameEn: '24cm Napolitano Casserole with Glass Lid — Beige',
    image: '/napolitano/Napolitano_Poli_Bege_24cm.png',
    color: 'bege',
  },

  // 5 Peças Azul (16cm, 18cm, 20cm, 22cm, 24cm)
  {
    id: 'azul-16',
    namePt: 'Caçarola Napolitano 16cm com Tampa de Vidro — Azul',
    nameEn: '16cm Napolitano Casserole with Glass Lid — Blue',
    image: '/napolitano/Napolitano_Poli_Azul_16cm.png',
    color: 'azul',
  },
  {
    id: 'azul-18',
    namePt: 'Caçarola Napolitano 18cm com Tampa de Vidro — Azul',
    nameEn: '18cm Napolitano Casserole with Glass Lid — Blue',
    image: '/napolitano/Napolitano_Poli_Azul_18cm.png',
    color: 'azul',
  },
  {
    id: 'azul-20',
    namePt: 'Caçarola Napolitano 20cm com Tampa de Vidro — Azul',
    nameEn: '20cm Napolitano Casserole with Glass Lid — Blue',
    image: '/napolitano/Napolitano_Poli_Azul_20cm.png',
    color: 'azul',
  },
  {
    id: 'azul-22',
    namePt: 'Caçarola Napolitano 22cm com Tampa de Vidro — Azul',
    nameEn: '22cm Napolitano Casserole with Glass Lid — Blue',
    image: '/napolitano/Napolitano_Poli_Azul_22cm.png',
    color: 'azul',
  },
  {
    id: 'azul-24',
    namePt: 'Caçarola Napolitano 24cm com Tampa de Vidro — Azul',
    nameEn: '24cm Napolitano Casserole with Glass Lid — Blue',
    image: '/napolitano/Napolitano_Poli_Azul_24cm.png',
    color: 'azul',
  },

  // 5 Peças Madeira (16cm, 18cm, 20cm, 22cm, 24cm)
  {
    id: 'madeira-16',
    namePt: 'Caçarola Napolitano 16cm com Tampa de Vidro — Madeira',
    nameEn: '16cm Napolitano Casserole with Glass Lid — Wood Grain',
    image: '/napolitano/Madeira_16cm.png',
    color: 'madeira',
  },
  {
    id: 'madeira-18',
    namePt: 'Caçarola Napolitano 18cm com Tampa de Vidro — Madeira',
    nameEn: '18cm Napolitano Casserole with Glass Lid — Wood Grain',
    image: '/napolitano/Madeira_18cm.png',
    color: 'madeira',
  },
  {
    id: 'madeira-20',
    namePt: 'Caçarola Napolitano 20cm com Tampa de Vidro — Madeira',
    nameEn: '20cm Napolitano Casserole with Glass Lid — Wood Grain',
    image: '/napolitano/Madeira_20cm.png',
    color: 'madeira',
  },
  {
    id: 'madeira-22',
    namePt: 'Caçarola Napolitano 22cm com Tampa de Vidro — Madeira',
    nameEn: '22cm Napolitano Casserole with Glass Lid — Wood Grain',
    image: '/napolitano/Madeira_22cm.png',
    color: 'madeira',
  },
  {
    id: 'madeira-24',
    namePt: 'Caçarola Napolitano 24cm com Tampa de Vidro — Madeira',
    nameEn: '24cm Napolitano Casserole with Glass Lid — Wood Grain',
    image: '/napolitano/Madeira_24cm.png',
    color: 'madeira',
  },
];

export const DOBLO_SET_PIECES: SetPiece[] = [
  // 5 Peças Preto (16cm, 18cm, 20cm, 22cm, 24cm)
  {
    id: 'doblo-preto-16',
    namePt: 'Caçarola Doblo 16cm com Tampa de Vidro — Preta',
    nameEn: '16cm Doblo Casserole with Glass Lid — Black',
    image: '/doblo/Doblo_16cm.png',
    color: 'preto',
  },
  {
    id: 'doblo-preto-18',
    namePt: 'Caçarola Doblo 18cm com Tampa de Vidro — Preta',
    nameEn: '18cm Doblo Casserole with Glass Lid — Black',
    image: '/doblo/Doblo_18cm.png',
    color: 'preto',
  },
  {
    id: 'doblo-preto-20',
    namePt: 'Caçarola Doblo 20cm com Tampa de Vidro — Preta',
    nameEn: '20cm Doblo Casserole with Glass Lid — Black',
    image: '/doblo/Doblo_20cm.png',
    color: 'preto',
  },
  {
    id: 'doblo-preto-22',
    namePt: 'Caçarola Doblo 22cm com Tampa de Vidro — Preta',
    nameEn: '22cm Doblo Casserole with Glass Lid — Black',
    image: '/doblo/Doblo_22cm.png',
    color: 'preto',
  },
  {
    id: 'doblo-preto-24',
    namePt: 'Caçarola Doblo 24cm com Tampa de Vidro — Preta',
    nameEn: '24cm Doblo Casserole with Glass Lid — Black',
    image: '/doblo/Doblo_24cm.png',
    color: 'preto',
  },
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    titlePt: 'Essenciais Acolhedores',
    subtitlePt: 'Para o Dia a Dia no Lar',
    descPt:
      'Utensílios e conjuntos de panelas com acabamento impecável, cores elegantes e design funcional para tornar cada momento na cozinha mais prático e cheio de propósito.',
    nextTitlePt: 'Conjunto Dubai (Rosé & Preto)',
    titleEn: 'Warm Mediterranean Tools',
    subtitleEn: 'for Everyday Cooking',
    descEn:
      'Kitchen tools and cookware sets with natural colors, non-stick performance, and timeless design to make every cooking moment feel more alive.',
    nextTitleEn: 'Dubai Cookware Set',
    image:
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2000&q=85',
    thumb: '/dubai/Dubai_13_Rose/01_cacarola_20cm.png',
  },
  {
    id: 2,
    titlePt: 'Conjunto de Panelas Dubai',
    subtitlePt: 'Disponível nas Cores Rosé e Preto',
    descPt:
      'Um conjunto completo com caçarolas, panelas com tampa de vidro temperado, frigideiras, assadeiras e fervedor para equipar sua cozinha com elegância.',
    nextTitlePt: 'Conjunto Napolitano (3 Cores)',
    titleEn: 'Dubai Cookware Set',
    subtitleEn: 'Available in Rose & Matte Black',
    descEn:
      'A complete cookware set featuring casseroles, glass-lid saucepans, skillets, baking pans, and milk boiler crafted for effortless daily cooking.',
    nextTitleEn: 'Napolitano Set (3 Colors)',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=2000&q=85',
    thumb: '/napolitano/Madeira_20cm.png',
  },
  {
    id: 3,
    titlePt: 'Conjunto Napolitano',
    subtitlePt: 'Bege, Azul e Efeito Madeira',
    descPt:
      'Cinco caçarolas de 16cm a 24cm com acabamento exclusivo nas versões Bege, Azul e Madeira, tampas de vidro temperado e alta durabilidade.',
    nextTitlePt: 'Conjunto Doblo Preto',
    titleEn: 'Napolitano Casserole Set',
    subtitleEn: 'Beige, Blue & Wood Grain',
    descEn:
      'Five graduated casseroles from 16cm to 24cm featuring artisanal Beige, Blue, and Wood Grain finishes with tempered glass lids.',
    nextTitleEn: 'Doblo Black Casserole Set',
    image:
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=2000&q=85',
    thumb: '/doblo/Doblo_20cm.png',
  },
  {
    id: 4,
    titlePt: 'Conjunto Doblo & Bem-Estar',
    subtitlePt: 'Elegância Para o Lar, Propósito Para a Vida',
    descPt:
      'Da sofisticação do Conjunto Doblo Preto à linha BeeConfort: cada peça escolhida na Servih apoia iniciativas sociais e leva qualidade duradoura para sua família.',
    nextTitlePt: 'Essenciais Acolhedores',
    titleEn: 'Doblo Collection & Home',
    subtitleEn: 'Elegance for Home, Purpose for Life',
    descEn:
      'Thoughtfully curated essentials crafted with enduring quality, bringing golden warmth to your table and meaning to everyday rituals.',
    nextTitleEn: 'Warm Mediterranean Tools',
    image:
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=2000&q=85',
    thumb: '/dubai/Dubai_13_Rose/01_cacarola_20cm.png',
  },
];

export const STATS = [
  {
    target: 12,
    suffix: '',
    labelPt: 'Anos de Cuidado & Curadoria',
    labelEn: 'Years of Craft & Curation',
  },
  {
    target: 200,
    suffix: '+',
    labelPt: 'Coleções Entregues no Lar',
    labelEn: 'Kitchen Collections Delivered',
  },
  {
    target: 32,
    suffix: '',
    labelPt: 'Parceiros & Artesãos de Confiança',
    labelEn: 'Trusted Artisan Partners',
  },
  {
    target: 48,
    suffix: '+',
    labelPt: 'Essenciais Para Lares Modernos',
    labelEn: 'Essentials for Modern Kitchens',
  },
];

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'cookware',
    namePt: 'Panelas & Cozinha',
    nameEn: 'Cookware',
    countPt: 'Dubai, Napolitano & Doblo',
    countEn: 'Dubai, Napolitano & Doblo',
    image:
      'https://images.unsplash.com/photo-1584990347449-a2d4c2c044c9?auto=format&fit=crop&w=1000&q=85',
    span: 'narrow',
  },
  {
    id: 'essentials',
    namePt: 'Essenciais & Organização',
    nameEn: 'Kitchen Essentials',
    countPt: 'Utensílios & Potes',
    countEn: 'Utensils & Storage',
    image:
      'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=1400&q=85',
    span: 'wide',
  },
];

export const PRODUCTS: ProductItem[] = [
  // ── 1. CARD ÚNICO DO CONJUNTO DUBAI (ROSÉ 13 PEÇAS & PRETO 8 PEÇAS) ──
  {
    id: 1,
    namePt: 'Conjunto de Panelas Antiaderentes Dubai',
    nameEn: 'Dubai Non-Stick Cookware Set',
    categoryPt: 'Panelas & Cozinha',
    categoryEn: 'Cookware',
    pricePt: 'R$ 589,00',
    oldPricePt: 'R$ 699,00',
    priceEn: '$119.00',
    oldPriceEn: '$145.00',
    badge: 'BESTSELLER',
    image: '/dubai/Dubai_13_Rose/01_cacarola_20cm.png',
    isSet: true,
    colorVariants: [
      {
        id: 'rose',
        namePt: 'Rosé (13 Peças)',
        nameEn: 'Rose (13 Pieces)',
        hex: '#b86b64',
        pricePt: 'R$ 589,00',
        oldPricePt: 'R$ 699,00',
        priceEn: '$119.00',
        oldPriceEn: '$145.00',
        coverImage: '/dubai/Dubai_13_Rose/01_cacarola_20cm.png',
        pieceCountPt: '13 Peças no Conjunto Rosé',
        pieceCountEn: '13 Pieces in Rose Set',
      },
      {
        id: 'preto',
        namePt: 'Preto (8 Peças)',
        nameEn: 'Matte Black (8 Pieces)',
        hex: '#262626',
        pricePt: 'R$ 429,00',
        oldPricePt: 'R$ 519,00',
        priceEn: '$89.00',
        oldPriceEn: '$109.00',
        coverImage: '/dubai/Dubai_8_Preto/01_cacarola_18cm.png',
        pieceCountPt: '8 Peças no Conjunto Preto',
        pieceCountEn: '8 Pieces in Black Set',
      },
    ],
    pieces: DUBAI_SET_PIECES,
    descPt:
      'Conjunto completo de panelas antiaderentes Linha Dubai com tampas de vidro temperado, saída de vapor e cabos antitérmicos. Disponível na versão de 13 Peças (Rosé) e 8 Peças (Preto). Clique para ver todas as peças que compõem o conjunto!',
    descEn:
      'Complete Dubai non-stick cookware set with tempered glass lids and stay-cool handles. Available in 13-Piece Rose and 8-Piece Matte Black. Click to view every piece included in the set!',
  },

  // ── 2. CARD ÚNICO DO CONJUNTO NAPOLITANO (BEGE, AZUL & MADEIRA — 5 PEÇAS) ──
  {
    id: 2,
    namePt: 'Conjunto de Caçarolas Napolitano (16 a 24cm)',
    nameEn: 'Napolitano 5-Piece Casserole Set (16 to 24cm)',
    categoryPt: 'Panelas & Cozinha',
    categoryEn: 'Cookware',
    pricePt: 'R$ 449,00',
    oldPricePt: 'R$ 539,00',
    priceEn: '$95.00',
    oldPriceEn: '$115.00',
    badge: 'SALE',
    image: '/napolitano/Napolitano_Poli_Bege_20cm.png',
    isSet: true,
    colorVariants: [
      {
        id: 'bege',
        namePt: 'Bege (5 Peças)',
        nameEn: 'Beige (5 Pieces)',
        hex: '#d6be96',
        pricePt: 'R$ 449,00',
        oldPricePt: 'R$ 539,00',
        priceEn: '$95.00',
        oldPriceEn: '$115.00',
        coverImage: '/napolitano/Napolitano_Poli_Bege_20cm.png',
        pieceCountPt: '5 Caçarolas (16, 18, 20, 22 e 24cm)',
        pieceCountEn: '5 Casseroles (16, 18, 20, 22 & 24cm)',
      },
      {
        id: 'azul',
        namePt: 'Azul (5 Peças)',
        nameEn: 'Blue (5 Pieces)',
        hex: '#1c4d78',
        pricePt: 'R$ 449,00',
        oldPricePt: 'R$ 539,00',
        priceEn: '$95.00',
        oldPriceEn: '$115.00',
        coverImage: '/napolitano/Napolitano_Poli_Azul_20cm.png',
        pieceCountPt: '5 Caçarolas (16, 18, 20, 22 e 24cm)',
        pieceCountEn: '5 Casseroles (16, 18, 20, 22 & 24cm)',
      },
      {
        id: 'madeira',
        namePt: 'Madeira (5 Peças)',
        nameEn: 'Wood Grain (5 Pieces)',
        hex: '#9a6b3e',
        pricePt: 'R$ 469,00',
        oldPricePt: 'R$ 559,00',
        priceEn: '$99.00',
        oldPriceEn: '$119.00',
        coverImage: '/napolitano/Madeira_20cm.png',
        pieceCountPt: '5 Caçarolas (16, 18, 20, 22 e 24cm)',
        pieceCountEn: '5 Casseroles (16, 18, 20, 22 & 24cm)',
      },
    ],
    pieces: NAPOLITANO_SET_PIECES,
    descPt:
      'Conjunto de 5 Caçarolas Linha Napolitano nos tamanhos 16cm, 18cm, 20cm, 22cm e 24cm disponível nas cores Bege, Azul e acabamento Madeira, com tampas de vidro temperado, aro inox e alças anatômicas. Clique para ver cada uma das 5 peças do conjunto!',
    descEn:
      '5-piece Napolitano casserole set in graduated sizes (16cm, 18cm, 20cm, 22cm, and 24cm) available in Beige, Blue, and Wood Grain finishes with tempered glass lids. Click to inspect all 5 pieces!',
  },

  // ── 3. CARD ÚNICO DO CONJUNTO DOBLO (PRETO — 5 PEÇAS DE 16 A 24CM) ──
  {
    id: 3,
    namePt: 'Conjunto de Caçarolas Doblo (16 a 24cm)',
    nameEn: 'Doblo 5-Piece Casserole Set (16 to 24cm)',
    categoryPt: 'Panelas & Cozinha',
    categoryEn: 'Cookware',
    pricePt: 'R$ 419,00',
    oldPricePt: 'R$ 499,00',
    priceEn: '$89.00',
    oldPriceEn: '$105.00',
    badge: 'BESTSELLER',
    image: '/doblo/Doblo_20cm.png',
    isSet: true,
    colorVariants: [
      {
        id: 'preto',
        namePt: 'Preto (5 Peças)',
        nameEn: 'Black (5 Pieces)',
        hex: '#22201e',
        pricePt: 'R$ 419,00',
        oldPricePt: 'R$ 499,00',
        priceEn: '$89.00',
        oldPriceEn: '$105.00',
        coverImage: '/doblo/Doblo_20cm.png',
        pieceCountPt: '5 Caçarolas (16, 18, 20, 22 e 24cm)',
        pieceCountEn: '5 Casseroles (16, 18, 20, 22 & 24cm)',
      },
    ],
    pieces: DOBLO_SET_PIECES,
    descPt:
      'Conjunto de 5 Caçarolas Linha Doblo na cor Preta nos tamanhos 16cm, 18cm, 20cm, 22cm e 24cm, com tampas de vidro temperado, saída de vapor, aro inox e alças reforçadas. Clique para visualizar todas as 5 panelas que compõem o conjunto!',
    descEn:
      '5-piece Doblo casserole set in sleek Black across sizes 16cm, 18cm, 20cm, 22cm, and 24cm, featuring vented tempered glass lids and ergonomic handles. Click to view all 5 pieces!',
  },

  // ── 4. DEMAIS PRODUTOS DO CATÁLOGO SERVIH ──
  {
    id: 4,
    namePt: 'Travesseiro Ergonômico BeeConfort',
    nameEn: 'BeeConfort Ergonomic Pillow',
    categoryPt: 'Essenciais & Organização',
    categoryEn: 'Kitchen Essentials',
    pricePt: 'R$ 200,00',
    oldPricePt: 'R$ 240,00',
    priceEn: '$39.00',
    oldPriceEn: '$48.00',
    badge: 'BESTSELLER',
    image:
      'https://res.cloudinary.com/dtxa1leih/image/upload/v1787693398/travesseiro_gbg9gv.png',
    descPt:
      'O clássico da Servih: projetado para alinhar a cervical e transformar a qualidade do seu sono com máximo conforto.',
    descEn:
      'Servih signature comfort piece: engineered for optimal ergonomic support and restorative sleep quality.',
  },
  {
    id: 5,
    namePt: 'Conjunto Utensílios Madeira de Oliveira',
    nameEn: 'Olive Wood Kitchen Utensil Set',
    categoryPt: 'Essenciais & Organização',
    categoryEn: 'Kitchen Essentials',
    pricePt: 'R$ 120,00',
    oldPricePt: 'R$ 150,00',
    priceEn: '$12.00',
    oldPriceEn: '$15.00',
    badge: 'SALE',
    image:
      'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=800&q=80',
    descPt:
      'Kit com 4 utensílios esculpidos em madeira natural tratada com cera de abelha, ideais para preservar o antiaderente dos seus conjuntos Dubai, Napolitano e Doblo.',
    descEn:
      '4-piece hand-carved olive wood utensil set finished with natural beeswax, gentle on all non-stick cookware.',
  },
  {
    id: 6,
    namePt: 'Travessa Oval Cerâmica Artesanal',
    nameEn: 'Kulina Terra Oval Ceramic Platter',
    categoryPt: 'Essenciais & Organização',
    categoryEn: 'Kitchen Essentials',
    pricePt: 'R$ 120,00',
    priceEn: '$12.00',
    badge: 'SOLD_OUT',
    image:
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80',
    descPt:
      'Travessa oval em cerâmica de alta temperatura, ideal para servir à mesa com elegância e manter o calor dos alimentos.',
    descEn:
      'High-fired stoneware oval platter designed for warm family serving from oven to table.',
  },
  {
    id: 7,
    namePt: 'Assadeira Cerâmica Servih Terra',
    nameEn: 'Kulina Terra Ceramic Baker',
    categoryPt: 'Panelas & Cozinha',
    categoryEn: 'Cookware',
    pricePt: 'R$ 120,00',
    priceEn: '$12.00',
    image:
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80',
    descPt:
      'Assadeira funda em cerâmica esmaltada com alças laterais, distribuição uniforme de calor e fácil limpeza.',
    descEn:
      'Deep glazed ceramic baking dish with integrated handles and even heat retention.',
  },
  {
    id: 8,
    namePt: 'Potes Herméticos Cerâmica & Bambu (Kit 3)',
    nameEn: 'Airtight Ceramic & Bamboo Canisters (Set of 3)',
    categoryPt: 'Essenciais & Organização',
    categoryEn: 'Kitchen Essentials',
    pricePt: 'R$ 160,00',
    priceEn: '$26.00',
    image:
      'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=800&q=80',
    descPt:
      'Organize grãos, café, temperos e mantimentos com vedação em silicone e tampas de bambu natural.',
    descEn:
      'Keep coffee, grains, and spices fresh on your countertop with silicone-sealed bamboo lids.',
  },
];

export const HOTSPOTS: HotspotItem[] = [
  {
    id: 1,
    x: 67,
    y: 59,
    productId: 1, // Conjunto de Panelas Dubai
    labelPt: 'Conjunto de Panelas Dubai',
    labelEn: 'Dubai Cookware Set',
  },
  {
    id: 2,
    x: 42,
    y: 55,
    productId: 2, // Conjunto Napolitano (Bege, Azul & Madeira)
    labelPt: 'Conjunto Napolitano',
    labelEn: 'Napolitano Casserole Set',
  },
  {
    id: 3,
    x: 61,
    y: 44,
    productId: 3, // Conjunto Doblo Preto
    labelPt: 'Conjunto Doblo Preto',
    labelEn: 'Doblo Black Casserole Set',
  },
  {
    id: 4,
    x: 54,
    y: 53,
    productId: 5, // Utensílios Madeira de Oliveira
    labelPt: 'Conjunto Utensílios de Oliveira',
    labelEn: 'Olive Wood Kitchen Utensil Set',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 1,
    qPt: 'O que é a Servih e quais conjuntos de panelas estão disponíveis?',
    aPt: 'A Servih é uma marca de utilidades para o lar, cozinha e bem-estar. Nossos grandes destaques são o Conjunto Dubai (13 peças Rosé e 8 peças Preto), o Conjunto Napolitano (5 caçarolas de 16cm a 24cm nas cores Bege, Azul e Madeira) e o Conjunto Doblo (5 caçarolas de 16cm a 24cm na cor Preta), além da linha BeeConfort.',
    qEn: 'What is Servih and which cookware sets are available?',
    aEn: 'Servih is a home & kitchenware brand featuring the Dubai Set (Rose & Black), the Napolitano 5-Piece Set (Beige, Blue & Wood Grain), and the Doblo 5-Piece Set (Black).',
  },
  {
    id: 2,
    qPt: 'Qual material é utilizado nos conjuntos Dubai, Napolitano e Doblo?',
    aPt: 'Todos os nossos conjuntos são produzidos com revestimento antiaderente de alta performance livre de PFOA, tampas de vidro temperado com aro inox e saída de vapor, além de cabos e alças em baquelite antitérmico.',
    qEn: 'What materials are used in the Dubai, Napolitano, and Doblo sets?',
    aEn: 'Our collections use high-conductivity aluminum with PFOA-free non-stick coating, steam-vented tempered glass lids, and stay-cool ergonomic handles.',
  },
  {
    id: 3,
    qPt: 'Os produtos da Servih são seguros para uso diário?',
    aPt: 'Sim! Todas as nossas peças são projetadas e testadas em lares reais para suportar o uso diário intenso, garantindo segurança alimentar, resistência térmica e conforto ergonômico para toda a família.',
    qEn: 'Are Servih products safe for daily use?',
    aEn: 'Yes. Every piece in our collection is food-safe, heat-resistant, and rigorously tested in real homes to ensure safe, reliable performance every single day.',
  },
  {
    id: 4,
    qPt: 'Como devo cuidar das minhas panelas antiaderentes?',
    aPt: 'Recomendamos realizar a cura inicial com um fio de óleo em fogo baixo por 1 minuto, utilizar espátulas de silicone, nylon ou madeira, e lavar com o lado macio da esponja e sabão neutro para preservar o brilho e o antiaderente por muitos anos.',
    qEn: 'How do I care for my non-stick cookware?',
    aEn: 'Season lightly before first use, cook on low-to-medium heat using wood, silicone, or nylon utensils, and wash with a soft sponge and mild soap.',
  },
  {
    id: 5,
    qPt: 'Qual é o prazo de entrega e como funciona o envio?',
    aPt: 'Atendemos no Brasil e em Portugal com envio rápido e embalagem reforçada ecológica. O despacho ocorre em até 24h úteis após a confirmação do pedido, com código de rastreio enviado diretamente para você.',
    qEn: 'How long does shipping take?',
    aEn: 'Orders are carefully packed in protective packaging and dispatched within 24–48 business hours, arriving within 3 to 7 business days with full tracking.',
  },
];
