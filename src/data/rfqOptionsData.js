import { PRODUCTS_DATA } from './productsData.js';

/**
 * Major Product Lines for RFQ submissions
 */
export const PRODUCT_LINES = [
  { id: 'spices', name: 'Spices & Seasonings' },
  { id: 'textiles', name: 'Textiles & Garments' },
  { id: 'handicrafts', name: 'Handicrafts and Artefacts' }
];

/**
 * Standard Destination Countries for B2B Export Quotations
 */
export const DESTINATION_COUNTRIES = [
  'USA',
  'UK',
  'UAE',
  'Singapore',
  'Malaysia',
  'Sri Lanka',
  'China',
  'Saudi Arabia',
  'Indonesia',
  'Germany',
  'Canada',
  'Others'
];

/**
 * Major Seaport Gateways & Marine Discharges by Destination Country
 */
export const COUNTRY_PORTS_MAP = {
  'USA': [
    'New York / New Jersey (USNYC)',
    'Los Angeles / Long Beach (USLAX / USLGB)',
    'Houston, Texas (USHOU)',
    'Savannah, Georgia (USSAV)',
    'Seattle / Tacoma (USSEA)',
    'Miami, Florida (USMIA)',
    'Norfolk / Hampton Roads, Virginia (USORF)',
    'Oakland, California (USOAK)',
    'Charleston, South Carolina (USCHS)',
    'Others'
  ],
  'UK': [
    'Port of Felixstowe (GBFXT)',
    'Port of Southampton (GBSOU)',
    'London Gateway / Tilbury (GBLON)',
    'Liverpool (GBLIV)',
    'Immingham (GBIMM)',
    'Others'
  ],
  'UAE': [
    'Jebel Ali Port, Dubai (AEJEA)',
    'Khalifa Port, Abu Dhabi (AEKHL)',
    'Port Khalid, Sharjah (AEPKH)',
    'Fujairah Port (AEFJR)',
    'Ajman Port (AEAJM)',
    'Others'
  ],
  'Singapore': [
    'Port of Singapore (PSA) (SGSIN)',
    'Jurong Port (SGJUR)',
    'Others'
  ],
  'Malaysia': [
    'Port Klang (Westport / Northport) (MYPKG)',
    'Port of Tanjung Pelepas - PTP (MYTPP)',
    'Penang Port (MYPEN)',
    'Pasir Gudang, Johor (MYPGU)',
    'Kuantan Port (MYKUA)',
    'Others'
  ],
  'Sri Lanka': [
    'Colombo Port (LKCMB)',
    'Hambantota International Port (LKHRI)',
    'Trincomalee Port (LKTRR)',
    'Others'
  ],
  'China': [
    'Shanghai Port (CNSHA)',
    'Ningbo-Zhoushan Port (CNNGB)',
    'Shenzhen (Yantian / Shekou) (CNSZX)',
    'Qingdao Port (CNTAO)',
    'Guangzhou / Nansha (CNGZG)',
    'Tianjin / Xingang (CNTSN)',
    'Xiamen Port (CNXMN)',
    'Dalian Port (CNDLC)',
    'Others'
  ],
  'Saudi Arabia': [
    'Jeddah Islamic Port (SAJED)',
    'King Abdulaziz Port, Dammam (SADMM)',
    'King Abdullah Port, Rabigh (SAKAP)',
    'Jubail Commercial Port (SAJUB)',
    'Yanbu Commercial Port (SAYNB)',
    'Others'
  ],
  'Indonesia': [
    'Tanjung Priok, Jakarta (IDTPP)',
    'Tanjung Perak, Surabaya (IDTPS)',
    'Belawan Port, Medan (IDBLW)',
    'Tanjung Emas, Semarang (IDSRG)',
    'Makassar (Soekarno-Hatta) (IDMAK)',
    'Others'
  ],
  'Germany': [
    'Port of Hamburg (DEHAM)',
    'Bremerhaven (DEBRV)',
    'Wilhelmshaven (JadeWeserPort) (DEWVN)',
    'Duisburg (Inland Marine Hub) (DEDUI)',
    'Others'
  ],
  'Canada': [
    'Port of Vancouver, BC (CAVAN)',
    'Port of Montreal, QC (CAMTR)',
    'Prince Rupert, BC (CAPRR)',
    'Halifax Port, NS (CAHAL)',
    'Toronto (Inland Marine Terminal) (CATOR)',
    'Others'
  ],
  'Others': [
    'Others'
  ]
};

/**
 * Resolves list of products for a given major product line ID or name
 */
export function getProductsByLine(lineIdOrName) {
  const norm = String(lineIdOrName || '').toLowerCase();
  let categoryId = 'spices';
  if (norm.includes('textile')) categoryId = 'textiles';
  else if (norm.includes('handicraft') || norm.includes('artefact')) categoryId = 'handicrafts';

  return PRODUCTS_DATA.filter(p => p.category === categoryId);
}

/**
 * Resolves list of grade option objects for a product + 'Others'
 */
export function getGradesForProduct(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId || p.name === productId) || PRODUCTS_DATA[0];
  if (!product || !product.grades || product.grades.length === 0) {
    return [
      { value: 'Standard Commercial Export Grade', label: 'Standard Commercial Export Grade', code: '' },
      { value: 'Others', label: 'Others', code: 'OTHERS' }
    ];
  }
  const grades = product.grades.map(g => {
    const label = g.code ? `${g.code} — ${g.name}` : g.name;
    const value = g.code ? `${g.code} (${g.name})` : g.name;
    return {
      value,
      label,
      code: g.code || '',
      name: g.name
    };
  });
  grades.push({ value: 'Others', label: 'Others', code: 'OTHERS', name: 'Others' });
  return grades;
}

/**
 * Resolves ports for a given destination country
 */
export function getPortsForCountry(country) {
  if (COUNTRY_PORTS_MAP[country]) {
    return COUNTRY_PORTS_MAP[country];
  }
  return ['Others'];
}
