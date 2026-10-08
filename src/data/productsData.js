export const COMMODITY_CATEGORIES = [
  { id: 'all', name: 'All Divisions' },
  { id: 'spices', name: 'Spices & Seasonings' },
  { id: 'textiles', name: 'Textiles & Garments' },
  { id: 'handicrafts', name: 'Handicrafts & Artefacts' }
];

export const PRODUCTS_DATA = [
  // ==========================================
  // SPICES & SEASONINGS (Strict Order per item #5)
  // 1. Alleppey Green Cardamom
  // 2. Tellicherry Black Pepper
  // 3. Kolli Black Pepper
  // 4. Salem Turmeric Fingers
  // 5. Erode Turmeric Fingers (GI Tagged)
  // 6. Turmeric Powder
  // ==========================================
  {
    id: 'green-cardamom',
    slug: 'green-cardamom',
    name: 'Alleppey Green Cardamom (Small Cardamom)',
    botanicalName: 'Elettaria cardamomum',
    category: 'spices',
    division: 'Spices & Seasonings',
    tag: 'GI Tagged | AGMARK Certified | FSSAI Approved',
    compliance: 'Spices Board of India | AGMARK Certified | FSSAI Approved',
    origin: 'Idukki & Western Ghats, Kerala / Tamil Nadu, India',
    image: './assets/images/cardamom.jpg',
    shortDesc: 'Sourced directly from the high-elevation plantations of the Western Ghats, Alleppey Green Cardamom (AGC), with its GI tag, is globally renowned for its high volatile oil content, uniform three-cornered ribbed capsules, and distinct sweet-eucalyptus aroma. Processed through indirect closed-pipe flue kilns without artificial dyes, sulfur bleaching, or polishing agents to ensure compliance with strict international MRL and food safety standards.',
    hsnCode: '0908 31 20',
    grades: [
      { 
        name: 'Alleppey Green Extra Bold', 
        code: 'AGEB', 
        size: '8.0 mm and above', 
        density: 'Min. 435 g/L', 
        color: 'Deep Vibrant Green', 
        usage: 'GCC / Middle East luxury retail, gift packaging, premium spice merchants' 
      },
      { 
        name: 'Alleppey Green Bold', 
        code: 'AGB', 
        size: '7.0 mm to 7.9 mm', 
        density: 'Min. 415 g/L', 
        color: 'Bright Green', 
        usage: 'European specialty packaging, global retail packers, institutional culinary' 
      },
      { 
        name: 'Alleppey Green Superior', 
        code: 'AGS', 
        size: '6.0 mm to 6.9 mm', 
        density: 'Min. 385 g/L', 
        color: 'Natural Olive Green', 
        usage: 'Horeca, bulk repackers, food processing, culinary blends' 
      },
      { 
        name: 'Alleppey Green Shipment', 
        code: 'AGL / AGS-1', 
        size: '5.0 mm to 5.9 mm', 
        density: 'Min. 350 g/L', 
        color: 'Light / Pale Green', 
        usage: 'Industrial spice blending, bakery premixes, commercial extraction' 
      },
      { 
        name: 'Decorticated Cardamom Seeds', 
        code: 'CS (Seeds)', 
        size: 'Clean whole seeds', 
        density: 'Min. 600 g/L', 
        color: 'Dark Brown to Black', 
        usage: 'Oleoresin distillation, essential oil extraction, chai/masala formulation' 
      }
    ],
    technicalSpecs: {
      moisture: 'Max 10.5% (Toluene Distillation Method - ASTA 2.0 / ISO 939)',
      volatileOil: 'Min 4.0% to 7.5% v/w (Steam Distillation - ISO 6571 / whole pod basis)',
      extraneousMatter: 'Max 0.5% by weight (Nil hair, metal, stones, or live insects)',
      immaturePods: 'Max 2.0% by weight',
      emptyPods: 'Max 1.0% by count',
      totalAsh: 'Max 8.0%',
      acidInsolubleAsh: 'Max 2.0%',
      artificialColor: 'Completely Absent / Undetected (LC-MS/MS tested)',
      aflatoxins: 'B1 < 5 ppb | Total Aflatoxins (B1+B2+G1+G2) < 10 ppb (EU / GCC compliant)',
      microbialStandards: 'Salmonella: Absent in 25g | E. coli: < 10 CFU/g'
    },
    packagingOptions: [
      'Carton Pack (Standard Export): 5 kg or 10 kg food-grade poly-foil / vacuum liners sealed inside 5-ply export master corrugated cartons (20 kg / 25 kg gross weight).',
      'Bulk Woven Pack: 25 kg / 50 kg multi-wall HDPE bags with inner sealed virgin polyethylene liner.',
      'Retail & Private Label (OEM): 50g, 100g, 250g, 500g nitrogen-flushed stand-up barrier pouches, composite tins, or rigid PET containers with customized brand labelling and barcodes.'
    ],
    shippingInfo: {
      minimumOrder: '500 kg (Air Freight) | 2,000 kg (LCL Ocean Freight)',
      containerCapacity: '20ft FCL: ~9.0 - 10.0 MT (Loose) / ~6.0 - 7.0 MT (Palletized) | 40ft FCL: ~18.0 - 20.0 MT',
      containerStuffingBreakdown: {
        fcl20: [
          'Loose Floor-Loaded (10 kg Master Cartons): ~9.0 - 10.0 MT (900 - 1,000 Cartons)',
          'Palletized & Shrink-Wrapped (Standard Export Pallets): ~6.0 - 7.0 MT (600 - 700 Cartons)',
          'Bulk Poly/HDPE Bags (Loose Loaded): ~10.0 - 11.0 MT'
        ],
        fcl40: [
          'Loose Floor-Loaded: ~18.0 - 20.0 MT',
          'Palletized: ~14.0 - 15.0 MT'
        ]
      },
      gatewayPorts: 'Cochin Port (COK) / Tuticorin (VOC) / Chennai (MAA)',
      airTerminals: 'Cochin (COK) / Coimbatore (CJB) / Chennai (MAA)',
      hsCode: '0908 31 20'
    }
  },
  {
    id: 'black-pepper',
    slug: 'black-pepper',
    name: 'Tellicherry & Malabar Black Pepper',
    botanicalName: 'Piper nigrum',
    category: 'spices',
    division: 'Spices & Seasonings',
    tag: 'AGMARK Certified | FSSAI Central Export Licensed',
    compliance: 'Spices Board of India | AGMARK Certified | FSSAI Central Export Licensed',
    origin: 'Malabar Coast, Idukki & Wayanad, Kerala / Tamil Nadu, India',
    image: './assets/images/pepper.jpg',
    shortDesc: "Sourced directly from the biodiverse foothills of the Western Ghats along India's historic Malabar Coast. Hand-harvested when berries reach optimal maturity, sun-cured, and mechanically garbled through multiple screening sieves and destoners. Available in Tellicherry Garbled Special Extra Bold (TGSEB), Extra Bold (TGEB), and Malabar Garbled (MG-1) grades, delivering high piperine pungency, low light-berry counts, and rich pinene-caryophyllene aromatic notes.",
    hsnCode: '0904 11 10 (Garbled) | 0904 11 20 (Ungarbled)',
    grades: [
      { 
        name: 'Tellicherry Garbled Special Extra Bold', 
        code: 'TGSEB', 
        size: 'Retained on 4.75 mm (90%+ retention)', 
        density: '530 g/L (Special) / 500 g/L (Standard)', 
        color: 'Deep wrinkled black, uniform jumbo diameter', 
        usage: 'Premium tabletop pepper mills, luxury gourmet retail, EU/US specialty spice brands' 
      },
      { 
        name: 'Tellicherry Garbled Extra Bold', 
        code: 'TGEB', 
        size: 'Retained on 4.25 mm (90%+ retention)', 
        density: '530 g/L (Special) / 500 g/L (Standard)', 
        color: 'Deep brownish-black, robust bold peppercorns', 
        usage: 'High-end retail packers, boutique culinary brands, premium restaurant seasoning' 
      },
      { 
        name: 'Tellicherry Garbled', 
        code: 'TG', 
        size: 'Retained on 4.00 mm (85%+ retention)', 
        density: 'Min. 530 - 550 g/L', 
        color: 'Natural black, uniform medium-bold berries', 
        usage: 'Commercial retail packaging, butcher spice blends, culinary grinders' 
      },
      { 
        name: 'Malabar Garbled 1', 
        code: 'MG-1 (500 / 550 GL)', 
        size: 'Machine garbled (approx. 3.25 mm - 3.75 mm)', 
        density: 'Min. 500 g/L or 550 g/L', 
        color: 'Natural black to brownish-black', 
        usage: 'Industrial grinding, meat curing/processing, food manufacturing, oleoresin extraction' 
      },
      { 
        name: 'Light Berries / Pinheads', 
        code: 'LB / Pinheads', 
        size: 'Under 2.5 mm screen', 
        density: '300 - 400 g/L', 
        color: 'Dark grey to black small seeds', 
        usage: 'Essential oil distillation, solvent oleoresin extraction, seasoning base powders' 
      }
    ],
    technicalSpecs: {
      moisture: 'Max 11.5% (Toluene Distillation Method - ASTA 2.0 / ISO 939)',
      piperineContent: 'Min 4.5% to 5.5%+ (HPLC / Spectrophotometric - ASTA 7.0 / ISO 5564)',
      volatileOil: 'Min 2.0% to 3.5% v/w (Steam Distillation - ISO 6571)',
      extraneousMatter: 'Standard: Max 0.5% w/w | Spiral/Steam-Cleaned (ASTA): Max 0.2% w/w (Nil glass/stones)',
      lightBerries: 'Max 1.0% (TGSEB/TGEB) | Max 2.0% (MG-1)',
      pinheads: 'Max 0.5% (Garbled grades)',
      nvee: 'Min 6.0% (Non-Volatile Ether Extract)',
      totalAsh: 'Max 7.0%',
      acidInsolubleAsh: 'Max 1.0%',
      sterilizationTreatment: 'Continuous HTST Steam Treatment (Optional on demand; ETO-free, irradiation-free)',
      microbialStandards: 'Salmonella: Absent in 25g x 5 | E. coli: < 10 CFU/g | Yeast & Mold: < 100 CFU/g',
      aflatoxins: 'B1 < 5 ppb | Total (B1+B2+G1+G2) < 10 ppb (EU / GCC compliant)'
    },
    packagingOptions: [
      'Multi-Wall Woven Packs: 25 kg / 50 kg heavy-duty virgin PP woven bags with inner heat-sealed food-grade LDPE liner.',
      'Traditional Jute Bags: 25 kg / 50 kg natural export-grade jute gunny bags with food-grade inner poly liner and clear indelible shipping stencils.',
      'Bulk Industrial Containers: 500 kg / 1,000 kg UV-stabilized FIBC Jumbo Bags with bottom discharge spouts.',
      'Private Label & Retail Packaging: 100g, 200g, 500g nitrogen-flushed stand-up barrier pouches or custom glass/PET grinder jars with tamper-evident seals.'
    ],
    shippingInfo: {
      minimumOrder: '500 kg - 1,000 kg (Air) | 2,000 kg - 5,000 kg (LCL) | 15 MT (Ocean FCL)',
      containerCapacity: '20ft FCL: ~15.0 - 16.5 MT (Loose) / ~12.5 - 13.5 MT (Palletized) | 40ft FCL: ~26.0 - 27.0 MT',
      containerStuffingBreakdown: {
        fcl20: [
          'Loose Floor-Loaded Bags: ~15.0 - 16.5 MT',
          'Palletized & Shrink-Wrapped: ~12.5 - 13.5 MT'
        ],
        fcl40: [
          'Loose Floor-Loaded: ~26.0 - 27.0 MT (subject to road weight limits)'
        ]
      },
      gatewayPorts: 'Cochin Port (COK) / Tuticorin (VOC) / Chennai (MAA)',
      airTerminals: 'Cochin (COK) / Coimbatore (CJB) / Chennai (MAA)',
      hsCode: '0904 11 10 (Garbled) | 0904 11 20 (Ungarbled)'
    }
  },
  {
    id: 'kolli-pepper',
    slug: 'kolli-pepper',
    name: 'Kolli Hills Black Pepper (High-Piperine Mountain Pepper)',
    botanicalName: 'Piper nigrum (Eastern Ghats High-Altitude Ecotype)',
    category: 'spices',
    division: 'Spices & Seasonings',
    tag: 'High Piperine | FSSAI Central Licensed',
    compliance: 'Spices Board of India | FSSAI Central Export Licensed',
    origin: 'Kolli Hills (Kolli Malai), Namakkal District, Tamil Nadu, India (Elevation: 1,000m - 1,300m MSL)',
    image: './assets/images/kolli-pepper.jpg',
    shortDesc: 'Cultivated in the biodiverse microclimate and mineral-rich soils of the Kolli Hills (Eastern Ghats) at altitudes exceeding 1,000 meters above sea level. Traditionally shade-grown on natural silver oak living standards in multi-tier agroforestry estates. Kolli peppercorns are globally prized by oleoresin extractors, pharmaceutical processors, and gourmet blenders for their intense natural piperine content (5.0% - 6.2%+), dense uniform core, and distinctive woody, sharp pungency.',
    hsnCode: '0904 11 10 (Garbled) | 0904 11 20 (Ungarbled)',
    grades: [
      { 
        name: 'Kolli Mountain Bold', 
        size: 'Retained on 4.50mm', 
        density: 'Min. 550 - 580 g/L', 
        color: 'Deep wrinkled charcoal-black, bold uniform berries', 
        usage: 'Premium gourmet spice mills, boutique single-origin retail, high-potency culinary extracts' 
      },
      { 
        name: 'Kolli Garbled Standard', 
        size: 'Retained on 4.00mm', 
        density: 'Min. 525 - 550 g/L', 
        color: 'Rich black to dark brown, well-dried berries', 
        usage: 'Artisan seasoning blends, commercial spice repackers, butcher & meat curing formulations' 
      },
      { 
        name: 'Kolli Whole Extraction Grade', 
        size: 'Retained on 3.25mm', 
        density: 'Min. 500 g/L', 
        color: 'Natural black, uniform machine-cleaned peppercorns', 
        usage: 'High-yield piperine solvent extraction, pharmaceutical raw material, industrial grinding' 
      }
    ],
    technicalSpecs: {
      moisture: 'Max 10.5% - 11.0% (Toluene Distillation Method - ASTA 2.0 / ISO 939)',
      piperineContent: 'Min 5.0% to 6.2%+ (HPLC Method - ASTA 7.0 / ISO 5564; naturally elevated)',
      volatileOil: 'Min 2.5% to 3.5% v/w (Steam Distillation - ISO 6571)',
      bulkDensity: '500 g/L to 580+ g/L (Grade calibrated)',
      extraneousMatter: 'Sortex Cleaned: Max 0.25% w/w (Nil glass/metal) | Machine Garbled: Max 0.50% w/w',
      lightBerries: 'Max 1.0% (Bold Grade) | Max 2.0% (Standard Grade)',
      pinheads: 'Max 0.5% (Garbled grades)',
      nvee: 'Min 6.5% (Non-Volatile Ether Extract)',
      totalAsh: 'Max 7.0%',
      acidInsolubleAsh: 'Max 1.0%',
      aflatoxins: 'B1 < 5 ppb | Total Aflatoxins (B1+B2+G1+G2) < 10 ppb (EU Regulation 2023/915)',
      ochratoxinA: '< 15 µg/kg (EU compliant)',
      microbialStandards: 'Salmonella: Absent in 25g x 5 samples | E. coli: < 10 CFU/g',
      etoIrradiation: '100% Free of ETO and 2-Chloroethanol (< 0.05 mg/kg limit); Non-irradiated'
    },
    packagingOptions: [
      'Commercial Bulk Bags: 25 kg / 50 kg heavy-duty virgin PP woven sacks with heat-sealed food-grade inner LDPE liner.',
      'Natural Fiber Bags: 25 kg / 50 kg multi-ply natural jute gunny bags with food-grade protective inner liners.',
      'Boutique Multi-Layer Bags: 10 kg / 25 kg food-grade kraft paper bags with moisture-barrier foil laminate for specialty roasters and importers.',
      'Retail & Foodservice OEM: 100g, 250g, 500g nitrogen-flushed stand-up barrier pouches, composite cans, or grinder jars with private-label brand printing.'
    ],
    shippingInfo: {
      minimumOrder: '500 kg - 1,000 kg (Air) | 2,000 kg - 5,000 kg (LCL) | 15 MT (Ocean FCL)',
      containerCapacity: '20ft FCL: ~15.0 - 16.5 MT (Floor-Loaded) / ~12.5 - 13.5 MT (Palletized) | 40ft FCL: ~26.0 - 27.0 MT',
      containerStuffingBreakdown: {
        fcl20: [
          'Floor-Loaded / Loose PP or Jute Bags: ~15.0 - 16.5 MT',
          'Palletized & Shrink-Wrapped: ~12.5 - 13.5 MT'
        ],
        fcl40: [
          'Floor-Loaded: ~26.0 - 27.0 MT (subject to gross weight road regulations)'
        ]
      },
      gatewayPorts: 'Tuticorin VOC Port (TUT) / Chennai Port (MAA) / Cochin Port (COK)',
      airTerminals: 'Tiruchirappalli (TRZ) / Coimbatore (CJB) / Chennai (MAA)',
      hsCode: '0904 11 10 (Garbled) | 0904 11 20 (Ungarbled)'
    }
  },
  {
    id: 'salem-turmeric',
    slug: 'salem-turmeric',
    name: 'Salem Turmeric Fingers & Bulbs',
    botanicalName: 'Curcuma longa L. (Salem Commercial Ecotype)',
    category: 'spices',
    division: 'Spices & Seasonings',
    tag: 'Culinary Gold Standard | FSSAI Central Licensed',
    compliance: 'Spices Board of India | FSSAI Central Export Licensed',
    origin: 'Salem & Kaveri Basin Agricultural Belt, Tamil Nadu, India',
    image: './assets/images/salem-turmeric.jpg',
    shortDesc: 'Sourced directly from the fertile Kaveri river basin in Tamil Nadu, Salem Turmeric is internationally recognized as the gold standard for whole culinary turmeric. Characterized by long, stout, cylindrical fingers with a distinctive deep golden-yellow interior, hard core fracture, and refined aroma. Mechanically cured and machine-polished without synthetic gloss enhancers, sulfur treatment, or chemical colorants, ensuring compliance with strict European and North American heavy metal standards.',
    hsnCode: '0910 30 20 (Dried Whole Rhizomes - Fingers / Bulbs)',
    grades: [
      { 
        name: 'Super Salem Double Polished Finger (Grade 1)', 
        size: '6.0 cm to 10.0 cm+ long, cylindrical, smooth polished skin', 
        density: 'Solid brittle fracture', 
        color: 'Deep golden yellow exterior, brilliant orange-yellow fracture', 
        usage: 'Supermarket whole repacking, premium gourmet retail, whole spice retail jars (EU/GCC/US)' 
      },
      { 
        name: 'Salem Single Polished Finger', 
        size: '4.0 cm to 7.0 cm fingers, partially polished surface', 
        density: 'Hard brittle core', 
        color: 'Natural brownish-yellow skin, golden amber core', 
        usage: 'Commercial spice grinding mills, curry powder manufacturing, butcher seasoning blenders' 
      },
      { 
        name: 'Salem Turmeric Bulbs (Gatha / Round)', 
        size: '2.5 cm to 5.0 cm dense ovate/round rhizomes', 
        density: 'Heavy dense core', 
        color: 'Deep amber to golden yellow', 
        usage: 'High-yield industrial grinding, oleoresin extraction, herbal tinctures' 
      }
    ],
    technicalSpecs: {
      curcuminContent: '2.5% to 3.5%+ (HPLC Method - ASTA 18.0 / ISO 5566; culinary grade color intensity)',
      moisture: 'Max 10.0% - 10.5% (Toluene Distillation - ASTA 2.0 / ISO 939)',
      extraneousMatter: 'Max 0.5% by weight (Nil stones, dirt, or hair; Sortex/gravity table cleaned)',
      defectiveRhizomes: 'Max 2.0% by weight (Nil moldy or insect-damaged rhizomes)',
      totalAsh: 'Max 7.0%',
      acidInsolubleAsh: 'Max 1.0%',
      chemicalPolishAdulteration: 'Lead Chromate: 100% Negative (Guaranteed absent) | Metanil Yellow & Sudan Dyes: Undetected (LC-MS/MS tested)',
      heavyMetals: 'Lead (Pb) < 2.0 mg/kg | Cadmium (Cd) < 1.0 mg/kg | Arsenic (As) < 1.0 mg/kg (Codex CXS 193-1995 & EU compliant)',
      aflatoxins: 'B1 < 5 ppb | Total (B1+B2+G1+G2) < 10 ppb (EU Regulation (EC) 2023/915 compliant)',
      etoIrradiation: 'ETO & 2-Chloroethanol < 0.05 mg/kg (EU RASFF compliant); Non-irradiated',
      microbialStandards: 'Salmonella: Absent in 25g x 5 samples | E. coli: < 10 CFU/g'
    },
    packagingOptions: [
      'Heavy-Duty PP Woven Bags: 25 kg / 50 kg virgin PP woven bags with inner sealed food-grade polyethylene moisture liner.',
      'Export Jute Bags: 25 kg / 50 kg traditional natural jute gunny bags with food-grade protective inner liners and customized export stencil markings.',
      'Bulk Industrial Sacks: 500 kg / 1,000 kg UV-stabilized FIBC Big Bags with discharge chutes for industrial extraction plants.',
      'Corrugated Master Cartons: 10 kg / 20 kg (5-ply / 7-ply) export cartons with inner moisture-barrier liners for premium retail repacking.'
    ],
    shippingInfo: {
      minimumOrder: 'Air Freight: 500 kg - 1,000 kg | Ocean LCL: 2,000 kg - 5,000 kg | Ocean FCL: 17,000 kg - 18,000 kg (17 - 18 MT)',
      containerCapacity: '20ft FCL: ~17.0 - 18.5 MT | 40ft FCL: ~26.0 - 27.0 MT',
      containerStuffingBreakdown: {
        fcl20: [
          'Loose Floor-Loaded Bags: ~17.0 - 18.5 MT',
          'Palletized & Shrink-Wrapped: ~13.0 - 14.0 MT'
        ],
        fcl40: [
          'Floor-Loaded Bags: ~26.0 - 27.0 MT (subject to gross container road weight limits)'
        ],
        airCargo: [
          'Air Freight: 500 kg - 1,000 kg'
        ]
      },
      gatewayPorts: 'Tuticorin VOC Port (TUT) / Chennai Port (MAA) / Cochin Port (COK)',
      inlandDepots: 'ICD Irugur (Coimbatore) / ICD Tirupur',
      airTerminals: 'Tiruchirappalli (TRZ) / Coimbatore (CJB) / Chennai (MAA)',
      hsCode: '0910 30 20'
    }
  },
  {
    id: 'erode-turmeric',
    slug: 'erode-turmeric',
    name: 'Erode Turmeric Fingers & Bulbs (GI-Certified)',
    botanicalName: 'Curcuma longa L. (Cultivars: Chinna Nadan & Perum Nadan)',
    geographicalIndication: 'GI Application No. 231 (Certificate No. 340, Class 30, Govt. of India)',
    category: 'spices',
    division: 'Spices & Seasonings',
    tag: 'GI-Certified | FSSAI Central Licensed',
    compliance: 'Spices Board of India | FSSAI Central Export Licensed',
    origin: 'Erode Agricultural Belt ("Turmeric City"), Tamil Nadu, India',
    image: './assets/images/erode-turmeric.jpg',
    shortDesc: 'Cultivated in the fertile alluvial basins of the Kaveri, Bhavani, and Kalingarayan river canals in Erode district, Tamil Nadu. Granted official Geographical Indication (GI) status by the Government of India for its exceptional natural yellow pigment, high finger density, and superior resistance to storage pests. Double-polished and graded using modern mechanical rotary polishers without chemical gloss agents, sulfur dioxide fumigation, or synthetic dyes.',
    hsnCode: '0910 30 20 (Dried Whole Rhizomes - Fingers / Bulbs)',
    grades: [
      { 
        name: 'Erode GI Finger Special (Double Polished)', 
        size: '5.5 cm to 8.5 cm stout, cylindrical fingers', 
        density: 'Solid crystalline fracture', 
        color: 'Smooth deep amber exterior, solid crystalline bright orange fracture', 
        usage: 'Supermarket whole repacking, luxury culinary retail, export spice jars (EU, GCC, North America)' 
      },
      { 
        name: 'Erode GI Finger Standard (Single Polished)', 
        size: '4.0 cm to 6.5 cm well-dried fingers', 
        density: 'Extremely hard core', 
        color: 'Natural golden yellow skin, extremely hard core', 
        usage: 'Commercial spice grinding mills, curry powder blends, industrial food seasoning' 
      },
      { 
        name: 'Erode Round Bulbs (Gatha / Mother Rhizome)', 
        size: 'Dense spherical / ovate rhizomes (2.5 cm - 4.5 cm)', 
        density: 'Deep dense core', 
        color: 'Deep golden-orange core', 
        usage: 'High-yield industrial extraction, oleoresin manufacturing, pharmaceutical processing' 
      }
    ],
    technicalSpecs: {
      curcuminContent: '2.5% to 3.5%+ (HPLC Method - ASTA 18.0 / ISO 5566; compliant with official GI filing)',
      moisture: 'Max 10.0% (Toluene Distillation Method - ASTA 2.0 / ISO 939)',
      extraneousMatter: 'Max 0.5% by weight (Nil hair, soil, stones, or ferrous debris)',
      defectiveRhizomes: 'Max 1.5% by weight (Internal Mold / Insect Damage)',
      totalAsh: 'Max 6.5%',
      acidInsolubleAsh: 'Max 0.8%',
      chemicalPolishAdulteration: 'Lead Chromate: 100% Negative (ICP-MS) | Metanil Yellow & Sudan Dyes: Completely Absent (LC-MS/MS tested)',
      heavyMetals: 'Lead (Pb) < 2.0 ppm | Cadmium (Cd) < 1.0 ppm | Arsenic (As) < 1.0 ppm (Codex CXS 193-1995 compliant)',
      aflatoxins: 'B1 < 5 ppb | Total Aflatoxins (B1+B2+G1+G2) < 10 ppb (EU Regulation (EC) 2023/915 compliant)',
      etoIrradiation: '100% Free of ETO and 2-Chloroethanol (< 0.05 mg/kg limit); Non-irradiated',
      microbialStandards: 'Salmonella: Absent in 25g x 5 samples | E. coli: < 10 CFU/g',
      giCertification: 'GI Application No. 231 (Certificate No. 340, Class 30, Govt. of India)'
    },
    packagingOptions: [
      'Commercial Export Bags: 25 kg / 50 kg heavy-duty virgin PP woven bags with heat-sealed food-grade LDPE moisture liner.',
      'Traditional Jute Packs: 50 kg export-grade natural jute gunny bags with food-grade inner poly liner and official export stencil markings.',
      'Bulk Industrial Containers: 500 kg / 1,000 kg UV-treated FIBC Jumbo Bags with bottom discharge spouts.',
      'Custom Retail Packaging (OEM): 100g, 250g, 500g nitrogen-flushed stand-up barrier pouches or tamper-evident canisters.'
    ],
    shippingInfo: {
      minimumOrder: 'Air Freight: 500 kg - 1,000 kg | Ocean LCL: 2,000 kg - 5,000 kg | Ocean FCL: 17,000 kg - 18,000 kg (17 - 18 MT)',
      containerCapacity: '20ft FCL: ~17.5 - 18.5 MT | 40ft FCL: ~26.0 - 27.0 MT',
      containerStuffingBreakdown: {
        fcl20: [
          'Floor-Loaded / Loose Bags: ~17.5 - 18.5 MT (350 - 370 Bags of 50 kg)',
          'Palletized & Shrink-Wrapped: ~13.0 - 14.0 MT'
        ],
        fcl40: [
          'Floor-Loaded Bags: ~26.0 - 27.0 MT (subject to road weight regulations)'
        ],
        airCargo: [
          'Air Freight: 500 kg - 1,000 kg'
        ]
      },
      gatewayPorts: 'Cochin Port (COK) / Tuticorin VOC Port (TUT) / Chennai Port (MAA)',
      inlandDepots: 'ICD Irugur (Coimbatore) / ICD Tirupur',
      airTerminals: 'Coimbatore International (CJB) / Tiruchirappalli (TRZ) / Chennai (MAA)',
      hsCode: '0910 30 20'
    }
  },
  {
    id: 'turmeric-powder',
    slug: 'turmeric-powder',
    name: 'Pure Ground Turmeric Powder (Haldi Powder)',
    botanicalName: 'Curcuma longa L.',
    category: 'spices',
    division: 'Spices & Seasonings',
    tag: '100% Pure Single-Origin | Micro-Clean',
    compliance: 'Spices Board of India | FSSAI Central Export Licensed',
    origin: 'Erode & Salem Agricultural Belts, Tamil Nadu, India',
    image: './assets/images/turmeric-powder.jpg',
    shortDesc: 'Manufactured from select, cleaned, and destoned Salem and Erode whole turmeric fingers and bulbs. Pulverized utilizing temperature-regulated multi-stage pin and hammer mills with cyclone sifting to preserve natural volatile essential oils, bright golden hue, and characteristic warm aroma without thermal degradation or starch fillers. 100% pure single-origin ground powder, free from chemical dyes, lead chromate, and foreign starches.',
    hsnCode: '0910 30 30 (Turmeric Powder - Pure Ground)',
    grades: [
      { 
        name: 'Salem/Erode Origin Pure Ground', 
        size: '60 - 80 Mesh (180 - 250 µm); Min 98% pass-through', 
        density: 'Free-flowing uniform powder (Curcumin 2.5% - 3.5%)', 
        color: 'Luminous Golden Amber / Warm Yellow', 
        usage: 'Retail spice packaging, culinary brands, hotel & catering chains, ethnic grocery' 
      },
      { 
        name: 'High-Curcumin Standardized Grade', 
        size: '80 - 100 Mesh (150 - 180 µm); Min 99% pass-through', 
        density: 'Micro-fine aerated powder (Curcumin 4.5% - 5.5%+)', 
        color: 'Deep Orange-Gold', 
        usage: 'Nutraceutical premixes, functional beverages, wellness formulations, health supplements' 
      },
      { 
        name: 'Ultra-Fine Industrial Grinding', 
        size: '100 - 120 Mesh (125 - 150 µm)', 
        density: 'Ultra-fine soft powder (Curcumin 2.5% - 3.5%)', 
        color: 'Bright Uniform Yellow', 
        usage: 'Curry powder blending, snack food seasonings, sauce/soup dry premixes' 
      },
      { 
        name: 'Steam-Sterilized Micro-Clean Grade', 
        size: '60 - 80 Mesh (HTST Steam Treated)', 
        density: 'Low bio-burden micro-clean powder (Curcumin 2.5% - 5.0%)', 
        color: 'Natural Gold', 
        usage: 'Ready-to-eat foods, infant nutrition blenders, high-compliance EU/US food plants' 
      }
    ],
    technicalSpecs: {
      curcuminContent: '2.5% to 3.5% (Single Origin) | 4.5%+ (Standardized High-Curcumin) [ASTA 18.0 / ISO 5566]',
      moisture: 'Max 8.5% - 9.0% (Export spec; statutory max 10.0% per FSSAI/ISO 939)',
      finenessMesh: 'Min 98% passing through 60 to 80 mesh (customizable up to 100 mesh)',
      totalAsh: 'Max 7.0% (Dry Basis; strict export limit)',
      acidInsolubleAsh: 'Max 1.0% (Statutory FSSAI allows up to 1.5%)',
      volatileOil: 'Min 2.5% to 4.0% v/w (Steam Distillation - ISO 6571)',
      totalStarch: 'Max 60.0% (Natural rhizome starch; zero added filler starches)',
      colorPurityAdulteration: 'Lead Chromate: 100% Negative | Synthetic Dyes (Metanil Yellow, Sudan I-IV): Absent | Foreign Starches: Absent',
      heavyMetals: 'Lead (Pb) < 2.0 ppm | Cadmium (Cd) < 1.0 ppm | Arsenic (As) < 1.0 ppm | Mercury (Hg) < 0.1 ppm (Codex / EU compliant)',
      aflatoxins: 'B1 < 5 ppb | Total Aflatoxins (B1+B2+G1+G2) < 10 ppb (EU Reg (EC) 2023/915 compliant)',
      etoIrradiation: 'ETO & 2-Chloroethanol < 0.05 mg/kg (EU RASFF compliant); Non-irradiated',
      microbialStandards: 'TPC < 50,000 CFU/g | Yeast & Mold < 100 CFU/g | Salmonella: Absent in 25g x 5 | E. coli: < 10 CFU/g'
    },
    packagingOptions: [
      'Multi-Wall Paper Barrier Sacks: 20 kg / 25 kg food-grade multi-ply kraft paper bags with inner heat-sealed polyethylene/aluminum moisture-barrier liner.',
      'Polypropylene Export Sacks: 25 kg heavy-duty PP woven sacks with food-grade inner LDPE liner.',
      'Bulk Big Bags: 500 kg / 1,000 kg food-grade FIBC Big Bags with inner dust-proof liner and discharge spouts.',
      'Private Label & Retail Packaging (OEM): 100g, 200g, 500g, 1 kg stand-up aluminum foil zip barrier pouches, printed pillow bags, or composite tins with custom brand labelling and barcode integration.'
    ],
    shippingInfo: {
      minimumOrder: 'Air Freight: 500 kg - 1,000 kg | Ocean LCL: 2,000 kg - 5,000 kg | Ocean FCL: 18,000 kg (18 MT)',
      containerCapacity: '20ft FCL: ~18.0 - 19.0 MT | 40ft FCL: ~26.0 - 27.0 MT',
      containerStuffingBreakdown: {
        fcl20: [
          'Floor-Loaded / Loose 25 kg Bags: ~18.0 - 19.0 MT (720 - 760 Bags)',
          'Palletized & Shrink-Wrapped: ~14.0 - 15.0 MT'
        ],
        fcl40: [
          'Floor-Loaded Bags: ~26.0 - 27.0 MT (subject to gross container road weight limits)'
        ],
        airCargo: [
          'Air Freight: 500 kg - 1,000 kg'
        ]
      },
      gatewayPorts: 'Tuticorin VOC Port (TUT) / Chennai Port (MAA) / Cochin Port (COK)',
      inlandDepots: 'ICD Irugur (Coimbatore) / ICD Tirupur',
      airTerminals: 'Coimbatore (CJB) / Tiruchirappalli (TRZ) / Chennai (MAA)',
      hsCode: '0910 30 30'
    }
  },

  // ==========================================
  // TEXTILES & GARMENTS (Requirement #7)
  // 1. T-shirts
  // 2. Terry Towels
  // 3. Bedsheets
  // 4. Linens
  // 5. Shirting Fabrics
  // Completely customizable per client requirements, with dedicated TDS!
  // ==========================================
  {
    id: 't-shirts',
    slug: 't-shirts',
    name: 'Custom Export Cotton T-Shirts',
    botanicalName: '100% Combed Cotton / Ring-Spun Cotton Knit',
    category: 'textiles',
    division: 'Textiles & Garments',
    tag: 'Customizable | OEM Export',
    origin: 'Tirupur (Knitwear Capital of India), Tamil Nadu',
    image: './assets/images/tshirts.jpg',
    shortDesc: 'Manufactured in the world-renowned textile cluster of Tirupur, Tamil Nadu. 100% combed cotton, bio-washed, single jersey t-shirts with OEKO-TEX certified reactive dyeing. Completely customizable in GSM, silhouette, printing, and private label branding.',
    hsnCode: '6109 10 00',
    grades: [
      { name: '300 - 320 GSM Uniform Polo T-Shirt for Corporate Needs', size: 'XS to 5XL / Custom Specs', density: '300 - 320 GSM Heavyweight Pique Knit', color: 'Pantone reactive dyed / Solid & Contrast collars', usage: 'Corporate uniforms, institutional workwear, executive branded merchandise' },
      { name: '180 GSM Heavyweight Streetwear Tee', size: 'XS to 5XL / Custom specs', density: '180 - 200 GSM Single Jersey', color: 'Pantone matched reactive dyed', usage: 'Boutique streetwear, US/EU premium casualwear brands' },
      { name: '160 GSM Bio-Washed Retail Crewneck', size: 'Custom European / US fit', density: '160 GSM Combed Ring Spun', color: 'Azo-free solid colors & melanges', usage: 'Department store private label, corporate uniforms' },
      { name: 'Super Combed Lightweight Casual Tee', size: 'Custom sizing chart', density: '150 - 170 GSM 100% Cotton', color: 'Reactive dyed solid shades & pastels', usage: 'High-volume international apparel retail chains' }
    ],
    technicalSpecs: {
      fabricComposition: '100% Combed Compact Ring Spun Cotton / Cotton-Elastane (95/5) / Poly-Cotton',
      yarnCount: '24s, 30s, or 34s Super Combed Yarn',
      fabricWeightGSM: '140 GSM to 320 GSM (Lightweight tees to 320 GSM corporate polo uniforms)',
      finishing: 'Silicone Softener + Bio-Polishing (Anti-pilling finish)',
      shrinkageTolerance: 'Max 4% to 5% (AATCC 135 wash protocol)',
      colorFastnessWashing: 'Grade 4-5 (ISO 105-C06)',
      colorFastnessRubbing: 'Dry: Grade 4-5 | Wet: Grade 3-4 (ISO 105-X12)',
      dyesAndChemicals: 'OEKO-TEX Standard 100 & REACH compliant, Zero Azo dyes'
    },
    packagingOptions: [
      'Individual export polybag with custom client barcode & hangtag',
      'Pre-pack ratio (1-2-2-1) in 5-ply export master corrugated shippers',
      'Custom luxury magnetic presentation boxes for designer collections'
    ],
    shippingInfo: {
      minimumOrder: '1,000 pieces per style / colorway',
      containerCapacity: '20ft FCL: approx 25,000 - 30,000 pieces in master cartons',
      gatewayPorts: 'Chennai Sea Port, Tuticorin VOC Port (TUT), Coimbatore Air Cargo',
      hsCode: '6109.10.00'
    }
  },
  {
    id: 'terry-towels',
    slug: 'terry-towels',
    name: 'Hospitality & Luxury Terry Towels',
    botanicalName: '100% Ring-Spun Cotton Terry Loop',
    category: 'textiles',
    division: 'Textiles & Garments',
    tag: 'Customizable | High Absorbency',
    origin: 'Tamil Nadu Textile Corridors (Coimbatore & Karur)',
    image: './assets/images/terry-towels-clean.jpg',
    shortDesc: 'Plush, ultra-absorbent terry bath linens crafted from long-staple Indian cotton. Ideal for luxury hotel chains, resorts, spas, and department stores worldwide. Fully customizable with jacquard weaves, dobby borders, and custom client embroidery.',
    hsnCode: '6302 60 00',
    grades: [
      { name: '600 GSM Luxury Resort Bath Sheet (100x150cm)', size: '100 x 150 cm / 90 x 180 cm', density: '600 - 650 GSM High Pile Loop', color: 'Optical White / Custom Hospitality Palette', usage: '5-Star luxury hotels, resort pools, high-end department stores' },
      { name: '500 GSM Classic Bath Towel (70x140cm)', size: '70 x 140 cm standard bath', density: '500 GSM 2-ply Ring Spun', color: 'VAT dyed chlorine-resistant shades', usage: 'Hospitality chains, retail home stores, cruise liners' },
      { name: 'Hand & Face Towel Sets (400-450 GSM)', size: '50 x 90 cm (Hand) / 30 x 30 cm (Wash)', density: '400 - 450 GSM Zero-Twist Cotton', color: 'Coordinated bathroom sets', usage: 'Retail home gift collections, corporate amenities' }
    ],
    technicalSpecs: {
      materialComposition: '100% Combed Indian Cotton / Zero-Twist Soft Cotton',
      yarnSpecification: 'Pile: 20/2 or 16/1 Ring-Spun | Warp: 20/2 | Weft: 16/1',
      fabricWeightGSM: '380 GSM to 650 GSM (Tailored to buyer target price & hand-feel)',
      absorbencyRate: '< 3 seconds (AATCC 79 droplet test)',
      hemFinishing: 'Reinforced double-needle lockstitched side hems to prevent unraveling in commercial laundries',
      colorFastnessChlorine: 'Grade 4 (Hospitality VAT-dyed for high-temperature laundering)',
      certification: 'OEKO-TEX Made in Green / GOTS available upon request'
    },
    packagingOptions: [
      'Pack of 2 / 4 / 6 ribbon-tied sets with branded card inserts',
      'Bulk compression bale packaging in woven poly-wraps for commercial hotels',
      'Master export cartons with moisture desiccant bags'
    ],
    shippingInfo: {
      minimumOrder: '2,000 pieces or 1,000 kg equivalent',
      containerCapacity: '20ft FCL: approx 6 - 7 MT terry cargo | 40ft HC: approx 15 - 16 MT',
      gatewayPorts: 'Chennai Sea Port (MAA), Tuticorin Port (TUT)',
      hsCode: '6302.60.00'
    }
  },
  {
    id: 'bedsheets',
    slug: 'bedsheets',
    name: 'Luxury Cotton Bedsheet Sets & Duvets',
    botanicalName: 'Long-Staple Indian Combed Cotton',
    category: 'textiles',
    division: 'Textiles & Garments',
    tag: 'Customizable | High Thread Count',
    origin: 'Coimbatore & Karur Textile Belts, Tamil Nadu',
    image: './assets/images/bedsheets.jpg',
    shortDesc: 'Hotel-grade bed linen sets woven from long-staple cotton yarns. Available in crisp percale and lustrous sateen weaves from 200 to 600 Thread Count (TC). Tailored to exact international mattress sizes (Twin, Queen, King, Super King) with custom piping and embroidery.',
    hsnCode: '6302 21 00',
    grades: [
      { name: '400 TC 100% Indian Long-Staple Sateen Sheet Set', size: 'Queen / King / Super King', density: '400 Thread Count (Single-ply yarns)', color: 'Lustrous Silk White, Pearl Grey, Champagne', usage: 'Luxury residential retail, boutique hotel suites' },
      { name: '300 TC Crisp Percale Hospitality Sheets', size: 'Twin, Full, Queen, King', density: '300 Thread Count 1-over-1 weave', color: 'Crisp Bleached White (90+ CIE)', usage: 'High-turnover commercial hotels, hospital healthcare suites' },
      { name: 'Duvet Covers & Oxford Pillowcase Sets', size: '200x200cm, 240x220cm, 260x240cm', density: 'Matching 300-500 TC fabric', color: 'Hemstitched / Satin Stripe / Solid', usage: 'Home fashion catalogs, luxury retail distributors' }
    ],
    technicalSpecs: {
      fiberComposition: '100% Indian Long-Staple Combed Cotton (Zero Synthetic Blends)',
      yarnCounts: '40s, 60s, 80s single-ply compact spun yarns',
      threadCountDensity: '200 TC, 300 TC, 400 TC, 500 TC, 600 TC (Standard ASTM D3775)',
      weaveStructure: 'Sateen (4/1 structure) or Percale (1/1 classic crisp structure)',
      dimensionalStability: 'Max 3% shrinkage after 5 commercial wash cycles',
      tensileStrength: 'Min 45 lbs warp / 35 lbs weft (ASTM D5034)',
      sewingCraftsmanship: '12 stitches per inch, French seam detailing, heavy-duty elastic on fitted sheets'
    },
    packagingOptions: [
      'Self-fabric zipper envelope bag with branded gold foil card insert',
      'PVC / PE window book-fold packaging with hang tags and barcode stickers',
      'Bulk flat-packed hotel carton cases'
    ],
    shippingInfo: {
      minimumOrder: '500 sets per size / colorway',
      containerCapacity: '20ft FCL: approx 4,500 - 5,500 sheet sets in master cartons',
      gatewayPorts: 'Chennai Sea Port (MAA), Tuticorin VOC Port (TUT)',
      hsCode: '6302.21.00'
    }
  },
  {
    id: 'linens',
    slug: 'linens',
    name: 'Table, Kitchen & Dining Linens',
    botanicalName: 'Pure Flax Linen & Cotton-Linen Blends',
    category: 'textiles',
    division: 'Textiles & Garments',
    tag: 'Customizable | Natural Flax & Cotton',
    origin: 'Karur Handloom & Powerloom Hub, Tamil Nadu',
    image: './assets/images/linens.jpg',
    shortDesc: 'Artisanal table runners, placemats, dining napkins, apron sets, and kitchen tea towels woven in Karur, Tamil Nadu. Known for rustic textures, vintage stonewash finishes, and supreme durability for fine dining and home décor importers.',
    hsnCode: '6302 51 00',
    grades: [
      { name: 'Stonewashed Pure Flax Linen Table Runner & Napkins', size: 'Runner 40x180cm / Napkins 45x45cm', density: '180 - 220 GSM Natural Flax', color: 'Natural Oatmeal, Sage Green, Clay Rose', usage: 'Fine dining restaurants, European boutique lifestyle stores' },
      { name: 'Jacquard Woven Cotton Tablecloths', size: '140x180cm, 150x250cm, 160x300cm', density: '220 GSM Heavyweight Cotton', color: 'Yarn-dyed damasks, stripes, checks', usage: 'Banquet halls, holiday home retail, catering companies' },
      { name: 'Waffle Weave Kitchen Tea Towels', size: '50 x 70 cm', density: '240 GSM Waffle Texture', color: 'Lint-free absorbent yarn-dyed', usage: 'Cookware stores, culinary gift collections' }
    ],
    technicalSpecs: {
      composition: '100% French/Belgian Flax Linen, 100% Recycled Cotton, or 55/45 Cotton-Linen blend',
      weightRangeGSM: '160 GSM to 280 GSM',
      edgeFinish: 'Mitered corners with 1.5cm - 2cm hemstitch or frayed raw edge design',
      colorFastnessLight: 'Grade 5 (ISO 105-B02)',
      washingCare: 'Pre-washed and enzyme stonewashed for soft vintage drape and minimal residual shrinkage (< 2%)'
    },
    packagingOptions: [
      'Pack of 4 / 6 napkins tied with natural jute twine and kraft paper bellyband',
      'Hanger packs for department store display',
      'Polybagged master shippers with desiccant'
    ],
    shippingInfo: {
      minimumOrder: '1,000 units per item',
      containerCapacity: '20ft FCL: approx 15,000 - 20,000 linen units',
      gatewayPorts: 'Chennai Port (MAA), Tuticorin VOC Port (TUT)',
      hsCode: '6302.51.00'
    }
  },
  {
    id: 'shirting-fabrics',
    slug: 'shirting-fabrics',
    name: 'Yarn-Dyed Fabrics',
    botanicalName: '100% Compact Combed Cotton Woven',
    category: 'textiles',
    division: 'Textiles & Garments',
    tag: 'Customizable | Mill-Made Rolls',
    origin: 'Tamil Nadu Woven Textile Hubs (Coimbatore & Erode)',
    image: './assets/images/shirting-fabrics.jpg',
    shortDesc: 'Precision-woven mill fabrics for global apparel manufacturers and tailor houses. Featuring fine yarn counts from 40s to 80s in Oxford weaves, pinpoint poplins, herringbone twills, and custom tartan checks, alongside premium bottom-weight pant fabrics with silky durable hand-feel.',
    hsnCode: '5208 42 00 / 5209 42 00',
    grades: [
      { name: 'Shirt Garments (Formal & Casual Yarn-Dyed Fabrics)', size: 'Fabric Width 58" / 60" (147 - 152 cm)', density: '115 - 145 GSM Oxford / Poplin / Twill', color: 'Royal Navy, Sky Blue, Pink, Windowpane & Stripes', usage: 'Executive corporate shirts, formal wear, bespoke tailoring' },
      { name: 'Pant Garments (Bottom-Weight Chinos & Trouser Fabrics)', size: 'Fabric Width 58" / 60" (147 - 152 cm)', density: '220 - 280 GSM Heavy Twill & Stretch Gabardine', color: 'Khaki, Olive, Navy, Charcoal & Stone Grey', usage: 'Tailored trousers, casual chinos, uniform pants, workwear' },
      { name: '60s / 80s 2-Ply Royal Oxford Woven', size: 'Fabric Width 58" / 60" (147 - 152 cm)', density: '120 - 135 GSM Medium Weight', color: 'Classic Sky Blue, Crisp White, French Stripe', usage: 'Executive formal shirts, bespoke shirtmakers' },
      { name: '50s Compact Cotton Poplin & Twills', size: 'Fabric Width 58" (147 cm)', density: '110 - 125 GSM Smooth Weave', color: 'Vibrant yarn-dyed checks & solids', usage: 'Casual and smart-casual menswear & womenswear' },
      { name: 'Linen-Cotton Shirting (Summer Weave)', size: 'Fabric Width 56" / 58"', density: '130 - 145 GSM Breathable Slub', color: 'Natural mélange and pastel tones', usage: 'Resortwear, summer shirt collections' }
    ],
    technicalSpecs: {
      fiberBase: '100% Indian Long Staple Cotton',
      yarnCounts: '40/1, 50/1, 60/1, 80/2, 100/2 compact ring-spun yarns',
      widthTolerances: 'Usable cut width 58" +/- 1" (Roll put-up on cardboard tubes of 100 meters)',
      finishOptions: 'Liquid Ammonia finish, Silk Touch Easy-Care finish, or Natural Soft Wash',
      tensileTearStrength: 'Exceeds ISO 13934-1 & ISO 13937-2 standards for luxury apparel',
      inspectionStandard: 'Inspected under 4-Point System (ASTM D5430) with zero tolerance for running defects'
    },
    packagingOptions: [
      'Double-folded cardboard tube rolls (100 meters per bolt) wrapped in heavy LDPE transparent waterproof film',
      'Corrugated master bale cartons banded with polypropylene strapping'
    ],
    shippingInfo: {
      minimumOrder: '1,500 meters per pattern / weave',
      containerCapacity: '20ft FCL: approx 35,000 - 40,000 running meters',
      gatewayPorts: 'Chennai Sea Port (MAA), Tuticorin VOC Port (TUT)',
      hsCode: '5208.42.00'
    }
  },

  // ==========================================
  // HANDICRAFTS & ARTEFACTS
  // 1. Traditional Metalcraft (Brassware & Bronze)
  // 2. Modern Home Decors & Heritage Artefacts (Handcrafted Wooden Artefacts & Wall Hangings)
  // 3. B2B Private Label & Custom Sourcing (Pan-India)
  // ==========================================
  {
    id: 'traditional-metalcraft',
    slug: 'traditional-metalcraft',
    name: 'Artisanal Brassware & Bronze Artefacts',
    botanicalName: 'Cast Brass / Bell Metal Alloy',
    category: 'handicrafts',
    division: 'Indian Heritage Handicrafts',
    tag: 'Custom Sourcing Available',
    origin: 'Thanjavur, Swamimalai & Madurai (Tamil Nadu)',
    image: './assets/images/handicrafts.jpg',
    shortDesc: 'Handcrafted solid brass oil lamps (Kuthuvilakku), ornamental Urlis, temple bells, and bronze statues cast using the lost-wax (Cire Perdue) method perfected over centuries by master craftsmen in Tamil Nadu.',
    hsnCode: '7419 80 30',
    grades: [
      { name: 'Traditional Kuthuvilakku Brass Oil Lamps', size: '12 inches up to 6 feet height', density: 'Heavy cast solid brass', color: 'Polished Gold / Antique Patina', usage: 'Temples, luxury hotels, heritage interior architecture' },
      { name: 'Engraved Peacock & Floral Urli Bowls', size: 'Diameter 8 inches to 36 inches', density: 'Thick brass vessel', color: 'Golden sheen / Vintage finish', usage: 'Boutique decor, water floral centerpieces' },
      { name: 'Hand-Cast Chola Bronze Statues', size: 'Custom dimensions 6\" to 48\"', density: 'High copper-tin alloy', color: 'Traditional bronze patina', usage: 'Art galleries, collectors, luxury private estates' }
    ],
    technicalSpecs: {
      materialComposition: 'Solid Brass (60-70% Copper, 30-40% Zinc) or Traditional Bronze (Panchaloha / Bell Metal)',
      finishingOptions: 'Mirror High-Polish Gold, Antique Oxidized Finish, or Matt Brushed Satin',
      protectiveCoating: 'Clear anti-tarnish protective lacquer applied',
      craftsmanship: '100% Hand-finished by GI-recognized artisan clusters in Tamil Nadu'
    },
    packagingOptions: [
      'Individual bubble-wrap with expanded polyethylene (EPE) foam edge protectors',
      'Custom branded inner gift box with velvet cushioning',
      'ISPM-15 Heat-Treated / Fumigated Wooden Crates for international sea & air freight'
    ],
    shippingInfo: {
      minimumOrder: '$2,500 USD equivalent or 50 pieces',
      containerCapacity: 'LCL Palletized wooden crates or 20ft FCL mixed handicraft cargo',
      gatewayPorts: 'Chennai Sea Port, Tuticorin Port, Chennai Air Cargo Hub',
      hsCode: '7419.80.30'
    }
  },
  {
    id: 'modern-home-decor',
    slug: 'modern-home-decor',
    name: 'Modern Home Decors & Heritage Artefacts',
    botanicalName: 'Handcrafted Wood, Terracotta & Artisanal Wall Accents',
    category: 'handicrafts',
    division: 'Indian Heritage Handicrafts',
    tag: 'Artisanal & Modern Living',
    origin: 'Tamil Nadu, Rajasthan & Pan-India Craft Guilds',
    image: './assets/images/modern-home-decor.jpg',
    shortDesc: 'Curated artisanal home accents blending traditional Indian craftsmanship with contemporary living aesthetics. Featuring handcrafted wooden jewellery boxes, artisanal wall hanging decors, elegant floral accents, bespoke custom-made wooden artefacts on demand, and heritage terracotta creations.',
    hsnCode: '4420 90 90 / 6913 90 00',
    grades: [
      { 
        name: 'Handcrafted wooden artefacts', 
        size: 'Jewellery boxes 8x6x4" to bespoke chests', 
        density: 'Seasoned Sheesham & Teak hardwood', 
        color: 'Natural walnut polish / brass inlay', 
        usage: 'Luxury giftware, boutique home decor, residential bedside and tabletop accent pieces',
        image: './assets/images/modern-home-decor.jpg'
      },
      { 
        name: 'Artisanal Wall Hanging Decors', 
        size: 'Framed panels 16x24" to 30x40" sets', 
        density: 'Framed hand-painted canvas & wooden relief', 
        color: 'Contemporary earth tones & gold leaf accents', 
        usage: 'Feature walls, boutique hotels, modern apartment living',
        image: './assets/images/wall-hanging-decor.jpg'
      },
      { 
        name: 'Custom-Made Wooden Artefacts On Demand', 
        size: 'Handcrafted cups & saucers, tableware & bespoke CAD blueprints', 
        density: 'Seasoned Teakwood & FSC kiln-dried hardwoods', 
        color: 'Natural hand-carved wood grain / custom organic wax finish', 
        usage: 'Artisanal wooden tea sets, cups & saucers, boutique tableware, and full turnkey capability to engineer any bespoke wooden artefacts to international buyer specifications',
        image: './assets/images/wooden-artefacts.jpg'
      }
    ],
    technicalSpecs: {
      materialComposition: 'Kiln-dried sheesham wood, seasoned teak, hand-painted canvas, brass hardware, glazed ceramic',
      craftsmanship: '100% Hand-crafted by master woodworkers and artisan guilds across India',
      customSourcingCapability: 'Full capacity to source and manufacture bespoke wooden artefacts on demand to client CAD drawings',
      surfaceFinish: 'Non-toxic lead-free polishes, natural beeswax sealants, anti-termite boron treatment',
      durabilityPackaging: 'Custom drop-tested export packaging with shock-absorbent molded EPE cushioning'
    },
    packagingOptions: [
      'Individual gift-ready corrugated boxes with custom foam inserts',
      'Drop-tested 5-ply export shippers with corner edge guards',
      'ISPM-15 Heat-treated wooden crates for palletized freight'
    ],
    shippingInfo: {
      minimumOrder: '$2,000 USD equivalent or 50 sets',
      containerCapacity: 'LCL palletized shipments or 20ft / 40ft FCL mixed cargo',
      gatewayPorts: 'Chennai Port (MAA), Tuticorin VOC Port (TUT), Chennai Air Cargo (MAA)',
      hsCode: '4420.90.90 / 6913.90.00'
    }
  },
  {
    id: 'oem-private-label',
    slug: 'oem-private-label',
    name: 'B2B Private Label & Custom Sourcing',
    botanicalName: 'Turnkey Multi-Category Contract Procurement',
    category: 'handicrafts',
    division: 'Indian Heritage Handicrafts',
    tag: 'Turnkey Contract Sourcing',
    origin: 'All over India / Pan-India Sourcing Hubs',
    image: './assets/images/private-label.jpg',
    shortDesc: 'Turnkey contract sourcing for boutique retail brands, lifestyle chains, and specialty distributors across North America, Europe, and the Middle East. Sourcing sustainable eco-goods (bamboo toothbrushes, glassware, custom spice jars, textile amenities) across verified manufacturing clusters all over India / Pan-India with custom barcoding and private label retail packaging.',
    hsnCode: 'Custom Multi-HSN',
    grades: [
      { name: 'Eco-Friendly Lifestyle Goods (Bamboo & Glass)', size: 'Custom retail SKUs', density: 'Biodegradable / Recyclable', color: 'Natural Bamboo & Clear Glass', usage: 'Zero-waste lifestyle brands, hotel amenities, retail stores' },
      { name: 'Custom Spice Glass Jars & Grinders', size: '50g to 250g retail units', density: 'Nitrogen flushed', color: 'Custom buyer branding', usage: 'Supermarket private label spice shelves' },
      { name: 'Luxury Corporate & Boutique Gift Hampers', size: 'Curated spice, textile & brass combos', density: 'Deluxe gift packaging', color: 'Gold foil embossing', usage: 'Diplomatic missions, luxury corporate gifting' }
    ],
    technicalSpecs: {
      servicesIncluded: 'Origin vetting, lab testing (SGS/Bureau Veritas upon request), packaging design adaptation, barcoding, FDA / EU label compliance',
      leadTime: '30 to 45 days from sample sign-off to port loading',
      minimumOrderValue: '$5,000 USD',
      sustainability: 'FSC-certified bamboo, lead-free borosilicate glassware, biodegradable carton packaging'
    },
    packagingOptions: [
      'Retail shelf-ready packaging (SRP) in master shippers',
      'Barcode, SKU label, and Amazon FBA pallet prep compliant'
    ],
    shippingInfo: {
      minimumOrder: 'Project based ($5,000 USD)',
      containerCapacity: 'Air Cargo Express or 20ft / 40ft FCL',
      gatewayPorts: 'Chennai Air/Sea, Tuticorin VOC Port, Bangalore Air',
      hsCode: 'Custom'
    }
  }
];

export const TRUST_BADGES = [
  { name: 'Spices Board of India', code: 'CRES Registered', desc: 'Statutory registration for authentic spice merchant exports' },
  { name: 'Directorate General of Foreign Trade (DGFT)', code: 'IEC Certified', desc: 'Valid Government of India Importer-Exporter Code' },
  { name: 'FSSAI', code: 'Central Food Safety License', desc: 'Food Safety and Standards Authority of India compliance' },
  { name: 'GST & Zero-Rated LUT', code: 'Export Compliant', desc: 'Fully compliant GST invoicing under Letter of Undertaking' }
];

export const GATEWAY_PORTS = [
  {
    name: 'Tuticorin (V.O. Chidambaranar Port)',
    code: 'IN TUT 1',
    state: 'Tamil Nadu',
    type: 'Major Deepwater Sea Port',
    highlights: 'Direct hub for Colombo transshipment, GCC, SE Asia & European feeder routes. Primary maritime gateway for South Tamil Nadu spices and textiles.',
    turnaround: 'Rapid container loading with direct road connectivity from Tirupur and Erode processing centers.'
  },
  {
    name: 'Chennai Port & Ennore (Kamajarar)',
    code: 'IN MAA 1',
    state: 'Tamil Nadu',
    type: 'Premier Gateway Container Port',
    highlights: 'Major East Coast container terminal with mainline vessel calls to Far East, USA East Coast, and Europe.',
    turnaround: 'High-frequency weekly sailings and specialized container freight stations (CFS).'
  },
  {
    name: 'Cochin Port (Vallarpadam ICTT)',
    code: 'IN COK 1',
    state: 'Kerala',
    type: 'International Container Transshipment Terminal',
    highlights: 'Strategically located 11 nautical miles off the international East-West shipping highway. Primary gateway for Western Ghats Cardamom and Black Pepper.',
    turnaround: 'Shortest maritime transit times to Jebel Ali and European Mediterranean ports.'
  },
  {
    name: 'Coimbatore & Chennai Air Cargo Complexes',
    code: 'IN CJB 4 / IN MAA 4',
    state: 'Tamil Nadu',
    type: 'International Air Hubs',
    highlights: 'Dedicated bonded air cargo terminals for high-value Green Cardamom, garment sample dispatch, and urgent courier consignments.',
    turnaround: '48 to 72 hour customs clearance and direct freighter connections to Dubai, Frankfurt, and Singapore.'
  }
];

export const DOCUMENTATION_CHECKLIST = [
  { title: 'Commercial Invoice', desc: 'Itemized invoice showing buyer details, Incoterm, itemized grades, FOB/CIF value, and banking coordinates.' },
  { title: 'Packing List', desc: 'Detailed breakdown of gross weight, net weight, carton/bag counts, container numbers, and seal IDs.' },
  { title: 'Bill of Lading (BL) / Air Waybill', desc: 'Clean On Board ocean bill of lading issued by premier shipping lines (Maersk, MSC, Hapag-Lloyd, CMA CGM).' },
  { title: 'Certificate of Origin (COO)', desc: 'Issued by Authorized Chambers of Commerce / Export Promotion Councils (GSP / Non-Preferential).' },
  { title: 'Phytosanitary / Textile Test Certificate', desc: 'Issued by Quarantine Organization or Textile Committee validating chemical and biological compliance.' },
  { title: 'Certificate of Analysis (COA) / Lab Test', desc: 'Standard lab test report verifying physical parameters, moisture %, and safety standards (SGS / Eurofins upon request).' }
];
