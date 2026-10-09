export const COMMODITY_CATEGORIES = [
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
    name: 'Custom Export Cotton T-Shirts & Corporate Polos (OEM / Private Label)',
    botanicalName: '100% Combed Compact Ring-Spun Cotton | Single Jersey & Piqué Knit',
    category: 'textiles',
    division: 'Textiles & Garments',
    tag: 'OEM / Private Label | AEPC Registered | OEKO-TEX Standard 100',
    origin: 'Tirupur Knitwear Cluster, Tamil Nadu, India',
    compliance: 'AEPC Registered | OEKO-TEX Standard 100 Certified Dyes | EU REACH Compliant',
    image: './assets/images/tshirts.jpg',
    shortDesc: 'Manufactured directly within India’s knitwear hub in Tirupur, Tamil Nadu. Engineered from long-staple compact combed cotton, pre-shrunk, and bio-polished with eco-friendly enzymatic washes to eliminate pilling and deliver a soft hand-feel. Fully customizable across fabric GSM, yarn counts, international sizing specifications (US/EU/Asian fits), Pantone reactive dyeing, screen/rotary/DTG printing, and complete private-label retail trims.',
    hsnCode: '6109 10 00 (T-Shirts, Singlets & Other Vests, Knitted or Crocheted: Of Cotton)',
    grades: [
      {
        name: 'Corporate Uniform Polo Shirt',
        size: 'XS to 5XL / Custom Specs',
        density: '280 - 320 GSM Double Piqué / Honeycomb',
        color: '2/20s or 2/24s Two-Ply Combed Cotton; Pantone reactive dyed; solid & contrast jacquard collars',
        usage: 'Corporate uniforms, institutional workwear, executive branded merchandise'
      },
      {
        name: 'Heavyweight Streetwear Tee',
        size: 'XS to 5XL / Drop-shoulder oversized fit',
        density: '220 - 240 GSM Heavy Single Jersey',
        color: '16s or 20s Super Combed Ring-Spun Cotton; Pantone matched reactive dyed; vintage wash options',
        usage: 'Boutique streetwear brands, US/EU premium casualwear lines'
      },
      {
        name: 'Retail Bio-Washed Crewneck',
        size: 'European / US regular & slim fit',
        density: '180 - 200 GSM Single Jersey',
        color: '24s or 30s Compact Combed Cotton; Azo-free solid colors, yarn-dyed stripes, & heather melanges',
        usage: 'Department store private labels, retail brands, promotional merchandise'
      },
      {
        name: 'Super Combed Lightweight Tee',
        size: 'Standard international sizing chart',
        density: '140 - 160 GSM Single Jersey',
        color: '34s or 40s Ultra-Fine Combed Cotton; Reactive dyed vibrant solids & pastel shades',
        usage: 'High-volume retail chains, layering basics, innerwear programs'
      }
    ],
    technicalSpecs: {
      fabricComposition: '100% Combed Compact Ring-Spun Cotton | Optional blends: Cotton-Elastane (95/5 Spandex), Poly-Cotton CVC (60/40 or 50/50)',
      yarnCountCalibration: '140 - 160 GSM: 34s/40s Super Combed | 180 - 200 GSM: 24s/30s Compact | 220 - 240 GSM: 16s/20s Heavy | 280 - 320 GSM: 2/20s or 2/24s Two-Ply (Piqué)',
      fabricFinishing: 'Enzymatic Bio-Polishing (Anti-pilling) + Silicone Softener; Pre-shrunk Stenter Finish',
      dimensionalStability: 'Max 4.0% to 5.0% Length & Width (AATCC 135 / ISO 6330 Wash Cycles)',
      torquingSpirality: 'Max 3.0% post-wash (ISO 16322)',
      colorFastnessWashing: 'Grade 4-5 (ISO 105-C06 / AATCC 61)',
      colorFastnessRubbing: 'Dry: Grade 4-5 | Wet: Grade 3-4 (ISO 105-X12 / AATCC 8)',
      colorFastnessLight: 'Grade 4+ (ISO 105-B02)',
      chemicalDyeSafety: 'OEKO-TEX Standard 100 & EU REACH Annex XVII compliant (100% Zero Azo dyes, heavy-metal free)',
      customBranding: 'Screen Printing (Plastisol, Water-base, Discharge, High-Density Puff), Direct-to-Garment (DTG), Computerized Embroidery, Custom Woven Damask Neck Labels, Recycled FSC Hangtags'
    },
    packagingOptions: [
      'Individual Garment Packaging: Each piece neatly folded and packed in a transparent, self-adhesive food-grade polybag (PP/LDPE or GRS-certified recycled poly) with statutory child-safety suffocation warnings, custom barcode stickers, and anti-humidity silica gel desiccant packs.',
      'Master Export Cartons: Standard pre-pack assortment ratio (e.g., S:M:L:XL:2XL / 1:2:2:2:1) packed into heavy-duty 5-ply or 7-ply export-grade corrugated cartons (bursting strength calibrated).',
      'Palletization & Dispatch: Strapped, edge-protected, and stretch-wrapped on ISPM-15 compliant heat-treated pallets or floor-loaded cartons for maximum container cube utilization.',
      'Presentation Packaging: Custom rigid magnetic gift boxes, FSC-certified craft sleeves, or flat-pack retail bundles available for boutique collections.'
    ],
    shippingInfo: {
      minimumOrder: '500 to 1,000 pieces per style/colorway (Custom Pantone Dyeing & Branding) | Sampling: Proto & Fit approval samples available within 7 - 10 working days',
      containerCapacity: '20ft FCL: ~20,000 - 25,000 pcs (Lightweight Crewneck Tees) | ~14,000 - 16,000 pcs (Heavyweight Polos / Streetwear Tees) | 40ft High Cube (HC): ~45,000 - 55,000 pcs (Tees) | ~30,000 - 35,000 pcs (Heavy Polos)',
      containerStuffingBreakdown: {
        fcl20: [
          '~20,000 - 25,000 pcs (Lightweight Crewneck Tees in Master Cartons)',
          '~14,000 - 16,000 pcs (Heavyweight Polos / Streetwear Tees in Master Cartons)'
        ],
        fcl40: [
          '~45,000 - 55,000 pcs (Lightweight Crewneck Tees in Master Cartons)',
          '~30,000 - 35,000 pcs (Heavyweight Polos in Master Cartons)'
        ]
      },
      gatewayPorts: 'Tuticorin VOC Port (TUT) / Chennai Port (MAA) / Cochin Port (COK)',
      inlandDepots: 'ICD Tirupur (Veerapandi / Chettipalayam) / ICD Irugur (Coimbatore)',
      airTerminals: 'Coimbatore International (CJB) / Tiruchirappalli (TRZ) / Chennai (MAA) / Bengaluru (BLR)',
      hsCode: '6109 10 00'
    }
  },
  {
    id: 'terry-towels',
    slug: 'terry-towels',
    name: 'Hospitality & Luxury Cotton Terry Towels (OEM / Institutional Export)',
    botanicalName: '100% Ring-Spun Long-Staple Cotton | 3-Pick Terry Weave (Dobby & Jacquard)',
    category: 'textiles',
    division: 'Textiles & Garments',
    tag: 'OEM / Institutional Export | TEXPROCIL Regd | OEKO-TEX Standard 100',
    origin: 'Karur & Coimbatore Textile Belts, Tamil Nadu, India',
    compliance: 'TEXPROCIL Registered | OEKO-TEX Standard 100 Certified | ASTM D5433 Hospitality Compliant',
    image: './assets/images/terry-towels-clean.jpg',
    shortDesc: 'Woven in the renowned home-textile clusters of Karur and Coimbatore from 100% high-grade combed and carded long-staple Indian cotton. Specifically engineered for international luxury hospitality chains, commercial laundries, spas, and department store retail lines. Built with high-tensile pile loops and reinforced double-needle lockstitched hems to endure rigorous industrial tunnel washing cycles while retaining softness, volume, and rapid water absorbency.',
    hsnCode: '6302 60 00 (Toilet Linen & Kitchen Linen of Terry Towelling, of Cotton)',
    grades: [
      {
        name: 'Luxury Bath Sheet / Pool Towel',
        size: '90 cm × 180 cm / 100 cm × 150 cm',
        imperial: '35" × 70" / 40" × 60"',
        density: '600 - 800 GSM',
        color: '2/20s Ring-spun combed cotton pile; yarn-dyed vat stripes',
        usage: 'Luxury 5-star resort pool decks, day spas, VIP suite linen'
      },
      {
        name: 'Executive Hotel Bath Towel',
        size: '70 cm × 140 cm',
        imperial: '27" × 54"',
        density: '500 - 650 GSM',
        color: '2/20s or 16s Ring-spun cotton pile; reinforced dobby border',
        usage: 'Commercial hotels, cruise liners, healthcare VIP suites'
      },
      {
        name: 'Hand Towel / Salon Towel',
        size: '40 cm × 75 cm / 50 cm × 90 cm',
        imperial: '16" × 30" / 20" × 35"',
        density: '450 - 550 GSM',
        color: '16s Single ring-spun loop; high-absorbency weave',
        usage: 'Hotel guest room vanity, premium hair salons, golf clubs'
      },
      {
        name: 'Face Cloth / Washcloth (Finger Towel)',
        size: '30 cm × 30 cm / 33 cm × 33 cm',
        imperial: '12" × 12" / 13" × 13"',
        density: '450 - 600 GSM',
        color: '2/20s Double-loop ground; ultra-dense texture',
        usage: 'Hospitality guest turndown sets, airline first-class packs'
      },
      {
        name: 'Heavyweight Bath Mat (Framed)',
        size: '50 cm × 80 cm',
        imperial: '20" × 32"',
        density: '800 - 1,000 GSM',
        color: 'Dense double-loop ground; Greek key / picture-frame border',
        usage: 'Institutional hotel bathroom floor mats (high skid resistance)'
      }
    ],
    technicalSpecs: {
      fiberComposition: '100% Natural Long-Staple Cotton (Available in Zero-Twist, Low-Twist, or Combed Ring-Spun)',
      pileYarnOptions: '16s Single, 2/20s Two-Ply, or 12s Open End (Ground weave)',
      absorbencyRate: '< 3.0 to 5.0 seconds (AATCC Test Method 79 - rapid wetting performance)',
      waterRetentionCapacity: '> 400% of dry fabric weight (ASTM D4772)',
      hemConstruction: 'Full length double-needle lockstitch side and end hems (1.0 cm to 1.5 cm) preventing fraying during high-speed commercial laundering',
      dimensionalStability: 'Max 5.0% - 6.0% after 5 industrial wash cycles (AATCC 135 / ISO 6330)',
      colorFastnessBleaching: 'Vat Dyeing (Hotel Standard): Grade 4-5 chlorine & hot wash (ISO 105-C06 / ISO 105-N01) | Reactive Dyeing: Grade 4-5 (ISO 105-C06)',
      colorFastnessRubbing: 'Dry: Grade 4-5 | Wet: Grade 3-4 (ISO 105-X12)',
      chemicalSafety: 'OEKO-TEX Standard 100 (Product Class II) certified; 100% free from restricted aromatic amines (Azo dyes), formaldehydes, and heavy metals',
      customBranding: 'Dobby cam borders, custom woven jacquard logos, high-density embroidery, dyed yarn logos, custom woven satin brand labels'
    },
    packagingOptions: [
      'Export Master Cartons (Retail & Premium Hospitality): Polybag-wrapped bundles (e.g., 6 or 12 pcs inner pack) cased inside heavy-duty 5-ply or 7-ply export-grade corrugated cartons; protected with silica gel desiccant packs.',
      'Hydraulic Compressed Bales (Bulk Commercial & Institutional): Packed in water-resistant poly-wrap and outer heavy-duty PP woven fabric, steel-strapped for maximum freight consolidation.',
      'Retail Display Packs: Custom printed ribbon bands, belly-bands, FSC-certified card hangers, or PVC zipper bags with custom EAN/UPC barcode stickers.'
    ],
    shippingInfo: {
      minimumOrder: '1,000 pieces per size/colorway (Solid reactive dyed) | 2,000 pieces (Custom Jacquard / Dobby weave) | Pilot / Pre-Production Sample: 7 - 10 working days',
      containerCapacity: '20ft FCL: ~9.5 - 11.0 MT (Compressed Bales) / ~5.0 - 6.5 MT (Master Cartons) | 40ft High Cube (HC): ~20.0 - 22.0 MT (Compressed Bales) / ~12.0 - 14.0 MT (Master Cartons)',
      containerStuffingBreakdown: {
        fcl20: [
          '~9.5 - 11.0 MT (Hydraulic Compressed Bales with Strapping)',
          '~5.0 - 6.5 MT (Export Master Corrugated Cartons)'
        ],
        fcl40: [
          '~20.0 - 22.0 MT (Hydraulic Compressed Bales with Strapping in 40ft HC)',
          '~12.0 - 14.0 MT (Export Master Corrugated Cartons in 40ft HC)'
        ]
      },
      gatewayPorts: 'Tuticorin VOC Port (TUT) / Cochin Port (COK) / Chennai Port (MAA)',
      inlandDepots: 'ICD Karur / ICD Irugur (Coimbatore) / ICD Tirupur',
      airTerminals: 'Coimbatore (CJB) / Tiruchirappalli (TRZ) / Chennai (MAA)',
      hsCode: '6302 60 00'
    }
  },
  {
    id: 'bedsheets',
    slug: 'bedsheets',
    name: 'Luxury Cotton Bedsheet Sets, Duvets & Pillowcases (OEM / Institutional Export)',
    botanicalName: '100% Long-Staple Indian Combed Cotton | Percale & Sateen Weaves (200 - 600 TC)',
    category: 'textiles',
    division: 'Textiles & Garments',
    tag: 'OEM / Institutional Export | TEXPROCIL Regd | OEKO-TEX Standard 100',
    origin: 'Coimbatore & Karur Textile Corridors, Tamil Nadu, India',
    compliance: 'TEXPROCIL Registered | OEKO-TEX Standard 100 Certified | ASTM D3775 Compliant',
    image: './assets/images/bedsheets.jpg',
    shortDesc: 'Woven and stitched across the textile clusters of Coimbatore and Karur utilizing long-staple Indian combed cotton (Suvin and Shankar-6 parentage). Engineered for international five-star hospitality chains, luxury boutique resorts, and premium retail home furnishing brands. Available in crisp, breathable 1-over-1 percale and silky 4-over-1 lustrous sateen weaves, precision-tailored to global mattress dimensions with reinforced double-stitched hems, tear-resistant seams, and high tensile endurance against commercial tunnel laundering.',
    hsnCode: '6302 31 00 (Bed Linen, Not Printed: Of Cotton) | 6302 21 00 (Bed Linen, Printed: Of Cotton)',
    grades: [
      {
        name: '500 - 600 TC Luxury Sateen Set',
        size: 'King, Cal King, Queen, Super King',
        density: '500 - 600 TC (4-over-1 Sateen)',
        color: '80s / 100s Single-Ply Combed Cotton; Mercerized, Reactive Solid & Pastel Dyes',
        usage: 'Luxury 5-star hotel suites, boutique resorts, premium home fashion department stores'
      },
      {
        name: '300 - 400 TC Executive Sateen Set',
        size: 'Twin, Full, Queen, King, Super King',
        density: '300 - 400 TC (4-over-1 Lustrous Sateen)',
        color: '60s Single-Ply Combed Cotton; Solid Bleached White / 1cm & 2cm Satin Stripe',
        usage: 'Commercial luxury hotels, serviced apartments, premium retail private labels'
      },
      {
        name: '200 - 300 TC Crisp Percale Set',
        size: 'Twin XL, Full, Queen, King',
        density: '200 - 300 TC (1-over-1 Classic Plain Weave)',
        color: '40s or 50s Single-Ply Combed Yarn; Crisp matte finish, Optical White (90+ CIE)',
        usage: 'High-turnover hospitality chains, luxury cruise liners, medical healthcare suites'
      },
      {
        name: 'Duvet Covers & Oxford Pillowcases',
        size: 'Single, Double, King, Super King (Custom Tech Packs)',
        density: '300 - 500 TC Percale / Sateen',
        color: 'Matching fabrics with button/zipper closures, 5cm Oxford flanges, French seams',
        usage: 'Coordinated retail bedding collections, catalog distributors, luxury spas'
      }
    ],
    technicalSpecs: {
      fiberComposition: '100% Pure Long-Staple Combed Cotton (Zero polyester or synthetic fillers)',
      threadCountStandard: 'Verified under ASTM D3775 (Authentic single-ply square-inch yarn count; zero multi-ply claims)',
      fabricFinishing: 'Singeing, Desizing, Scouring, Bleaching, Mercerizing (Enhanced sheen), Sanforizing (Shrinkage control)',
      dimensionalStability: 'Max 3.0% Length & Width after 5 commercial wash cycles (AATCC 135 / ISO 6330)',
      tensileTearStrength: 'Tensile: Min 45 lbs Warp / 38 lbs Weft (ASTM D5034) | Tear: Min 3.5 lbs Warp / 3.0 lbs Weft (ASTM D1424)',
      pillingResistance: 'Class 4 to 5 after 2,000 cycles (ASTM D3512 / Martindale ISO 12945-2)',
      colorFastnessWashing: 'Grade 4-5 (ISO 105-C06) | Bleach Fastness: Vat dyed Grade 4-5 for commercial white wash formulas',
      colorFastnessRubbing: 'Dry: Grade 4-5 | Wet: Grade 3-4 (ISO 105-X12)',
      chemicalSafety: 'OEKO-TEX Standard 100 (Product Class II) certified; 100% compliant with EU REACH Annex XVII (pH 5.5 - 7.0)',
      workmanshipSpecifications: '10 to 12 stitches per inch (SPI); heavy-duty 360° elastic casing on fitted sheets (up to 40 cm deep); French seams'
    },
    packagingOptions: [
      'Retail Presentation Packaging: Clear PVC / PE zippered book-fold wallet with custom four-color printed card insert, brand hangtags & barcodes; sustainable self-fabric envelope bags; or rigid luxury magnetic presentation gift boxes.',
      'Institutional Master Packing: Folded and tied in master bundles (6 to 12 sets per moisture-barrier inner polybag), packed flat into heavy-duty 5-ply or 7-ply corrugated export cartons.',
      'Palletization & Dispatch: Stretch-wrapped and banded on ISPM-15 certified heat-treated wooden or durable plastic export pallets.'
    ],
    shippingInfo: {
      minimumOrder: '500 sets per size / colorway (Retail sets) | 1,000 sets (Institutional hospitality) | Proto & Lab Dip Approvals: 7 - 10 working days',
      containerCapacity: '20ft FCL: ~3,800 - 4,800 Sets (Retail Cartons) / ~5,500 - 6,500 Sets (Compressed) | 40ft High Cube (HC): ~8,500 - 10,500 Sets (Retail) / ~12,000 - 14,000 Sets (Compressed)',
      containerStuffingBreakdown: {
        fcl20: [
          '~3,800 - 4,800 Sets (Retail PVC Book-Fold / Master Cartons)',
          '~5,500 - 6,500 Sets (Institutional Flat-Pack / Compressed Cartons)'
        ],
        fcl40: [
          '~8,500 - 10,500 Sets (Retail Master Cartons in 40ft High Cube)',
          '~12,000 - 14,000 Sets (Institutional Compressed Packs in 40ft High Cube)'
        ]
      },
      gatewayPorts: 'Tuticorin VOC Port (TUT) / Cochin Port (COK) / Chennai Port (MAA)',
      inlandDepots: 'ICD Karur / ICD Irugur (Coimbatore) / ICD Tirupur',
      airTerminals: 'Coimbatore (CJB) / Tiruchirappalli (TRZ) / Chennai (MAA) / Bengaluru (BLR)',
      hsCode: '6302 31 00 / 6302 21 00'
    }
  },
  {
    id: 'linens',
    slug: 'linens',
    name: 'Table, Kitchen & Dining Linens (OEM / Private Label Export)',
    botanicalName: '100% European Flax Linen, 100% Combed Cotton, & Cotton-Linen Blends',
    category: 'textiles',
    division: 'Textiles & Garments',
    tag: 'OEM / Private Label | HEPC / TEXPROCIL Regd | OEKO-TEX Standard 100',
    origin: 'Karur Handloom & Powerloom Textile Cluster, Tamil Nadu, India',
    compliance: 'HEPC / TEXPROCIL Registered | OEKO-TEX Standard 100 Certified | EU REACH Compliant',
    image: './assets/images/linens.jpg',
    shortDesc: 'Woven and crafted in India\'s premier home-textile hub in Karur, Tamil Nadu. Designed for international lifestyle retailers, department store private labels, commercial banquet venues, and hospitality dining establishments. Available in natural stonewashed pure flax linen, crisp cotton damasks, and high-absorbency waffle weaves. Featuring precision tailoring including mitered corners, delicate hemstitching, reinforced bar-tacking, and enzymatic stonewashing for an elegant drape and minimal residual shrinkage.',
    hsnCode: '6302 51 00 (Cotton Table) | 6302 59 00 (Linen Table) | 6302 91 00 (Cotton Kitchen) | 6302 99 00 (Flax Kitchen)',
    grades: [
      {
        name: 'Stonewashed Pure Linen Table Runner & Napkins',
        size: 'Runner: 40 × 180 cm / 45 × 250 cm; Napkins: 45 × 45 cm / 50 × 50 cm',
        density: '180 - 220 GSM 100% Flax Linen',
        color: 'Pre-washed enzyme stonewash, 2 cm hemstitched border with precision mitered corners',
        usage: 'High-end boutique home retail, Michelin-tier fine dining, luxury rustic resort dining'
      },
      {
        name: 'Yarn-Dyed Cotton Banquet Tablecloths',
        size: '140 × 180 cm, 150 × 250 cm, 160 × 300 cm (Round: 180 cm / 220 cm dia)',
        density: '200 - 240 GSM Heavy Cotton',
        color: 'Yarn-dyed jacquard damask, woven checks, or solid poplins; soil-release finish optional',
        usage: 'Commercial banquet halls, hotel food & beverage service, holiday home collections'
      },
      {
        name: 'Waffle Weave & Flat-Weave Tea Towels',
        size: '50 × 70 cm / 45 × 65 cm',
        density: '220 - 260 GSM Honeycomb / Waffle or Herringbone',
        color: '100% Combed Cotton, lint-free weave, reinforced corner hanging loop, lockstitched hems',
        usage: 'Culinary gift sets, specialty cookware stores, institutional kitchen service'
      },
      {
        name: 'Chef Aprons & Heavy Utility Kitchen Sets',
        size: '70 × 85 cm (Adjustable neck strap & waist ties)',
        density: '240 - 280 GSM Heavy Cotton Canvas or Twill',
        color: 'Stress points reinforced with bar-tack stitching, deep front utility pockets, brass hardware',
        usage: 'Restaurant staff uniform programs, barista gear, premium lifestyle retail'
      }
    ],
    technicalSpecs: {
      fiberComposition: '100% Long-Staple European Flax Linen / 100% Combed Cotton / 55% French Linen & 45% Cotton Blend / GRS Recycled Cotton',
      weaveStructure: 'Plain Weave, 4-Sided Oxford Hemstitch, Waffle/Honeycomb, Herringbone, Jacquard Damask',
      fabricFinishing: 'Enzyme stonewashed or bio-softened for soft hand-feel and dimensional stability',
      dimensionalStability: 'Max 2.0% to 3.0% post-wash (AATCC 135 / ISO 6330 Wash Cycles)',
      absorbencyRate: '< 4 seconds wetting time (AATCC 79 droplet test)',
      colorFastnessWashing: 'Grade 4 to 5 (ISO 105-C06)',
      colorFastnessLight: 'Grade 4 to 5 (ISO 105-B02 / Xenon Arc)',
      colorFastnessRubbing: 'Dry: Grade 4-5 | Wet: Grade 3-4 (ISO 105-X12)',
      chemicalSafety: 'OEKO-TEX Standard 100 (Product Class II) certified; 100% compliant with EU REACH Annex XVII',
      workmanshipSpecifications: '10 to 12 stitches per inch (SPI); clean mitered corner tailoring; bar-tacked hanging loops'
    },
    packagingOptions: [
      'Retail Presentation Packs: Pack of 4 or 6 napkins bound with natural jute twine, herringbone ribbon, or FSC kraft paper bellyband; hanger-packed tea towels; or book-fold presentation in biodegradable clear polybags with barcodes.',
      'Master Export Cartons: Poly-lined bundles packed into durable 5-ply or 7-ply export-grade corrugated cartons; protected with silica gel desiccant packs.',
      'Palletization & Dispatch: Stretch-wrapped on ISPM-15 compliant heat-treated wooden or plastic export pallets.'
    ],
    shippingInfo: {
      minimumOrder: '500 to 1,000 units per style/colorway (Runners/Tablecloths) | 1,500 to 2,000 units (Napkins/Tea Towels) | Proto & Lab-Dip Approvals: 7 - 10 working days',
      containerCapacity: '20ft FCL: ~20,000 - 26,000 pieces (~6.5 - 7.5 MT net) / ~35,000 - 45,000 pcs (Napkins/Towels) | 40ft High Cube (HC): ~45,000 - 55,000 pieces',
      containerStuffingBreakdown: {
        fcl20: [
          '~20,000 - 26,000 pieces (~6.5 - 7.5 MT net) (Assorted Table & Kitchen Linen Master Cartons)',
          '~35,000 - 45,000 pieces (Dedicated Napkins / Tea Towels in Master Cartons)'
        ],
        fcl40: [
          '~45,000 - 55,000 assorted pieces in 40ft High Cube Master Cartons'
        ]
      },
      gatewayPorts: 'Tuticorin VOC Port (TUT) / Cochin Port (COK) / Chennai Port (MAA)',
      inlandDepots: 'ICD Karur / ICD Irugur (Coimbatore) / ICD Tirupur',
      airTerminals: 'Tiruchirappalli International (TRZ) / Coimbatore (CJB) / Chennai (MAA)',
      hsCode: '6302 51 00 / 6302 59 00 / 6302 91 00 / 6302 99 00'
    }
  },
  {
    id: 'shirting-fabrics',
    slug: 'shirting-fabrics',
    name: 'Mill-Woven Yarn-Dyed Fabrics (Shirting, Bottom-Weight & Suitings)',
    botanicalName: '100% Long-Staple Combed Cotton, Linen Blends & Stretch Cotton | Auto-Loom & Airjet Woven',
    category: 'textiles',
    division: 'Textiles & Garments',
    tag: 'OEM / Private Label | TEXPROCIL Regd | OEKO-TEX Standard 100',
    origin: 'Coimbatore & Erode Woven Textile Belts, Tamil Nadu, India',
    compliance: 'TEXPROCIL Registered | OEKO-TEX Standard 100 Certified | ASTM D5430 4-Point System Inspected',
    image: './assets/images/shirting-fabrics.jpg',
    shortDesc: 'Engineered across the advanced airjet and rapier weaving mills of Coimbatore and Erode in Tamil Nadu. Crafted using premium ring-spun compact combed cotton yarns dyed with high-fastness reactive dyestuffs prior to weaving. Specially produced for international garment manufacturers, corporate uniform converters, and bespoke tailoring brands. Available in classic poplins, royal Oxfords, fine twills, pinpoint weaves, tattersall checks, and bottom-weight chino stretch gabardines with advanced wrinkle-resistant, liquid ammonia, and silky easy-care finishes.',
    hsnCode: '5208 42 00 (Shirting Plain Weave ≤ 200 GSM) | 5208 43 00 (Shirting Twills ≤ 200 GSM) | 5209 43 00 (Bottom-Weight Twills > 200 GSM)',
    grades: [
      {
        name: 'Royal Oxford & Pinpoint Shirting',
        size: '58" / 60" (147 - 152 cm); 100m - 120m rolls',
        density: '125 - 145 GSM 2-over-2 Basket / Pinpoint Weave',
        color: '60/2, 80/2, or 100/2 Compact Double-Ply Yarns; Yarn-dyed solids, bengal stripes',
        usage: 'Executive corporate dress shirts, bespoke tailor houses, luxury formalwear'
      },
      {
        name: 'Classic Micro-Check & Poplin Shirting',
        size: '58" (147 cm); 100m - 120m rolls',
        density: '110 - 130 GSM 1-over-1 Plain Weave Poplin',
        color: '50s or 60s Single Compact Combed Cotton; High-definition yarn-dyed checks',
        usage: 'Smart casual shirts, premium retail brands, corporate office collections'
      },
      {
        name: 'Chino & Trouser Bottom-Weight Twill',
        size: '58" / 60" (147 - 152 cm); 80m - 100m rolls',
        density: '220 - 280 GSM 3/1 or 2/1 Right-Hand Twill / Gabardine',
        color: '16s, 20s, or 2/30s Cotton (Optional: 98/2 Cotton-Spandex Stretch); Yarn-dyed cross twill',
        usage: 'Tailored chinos, five-pocket trousers, executive uniforms, durable workwear'
      },
      {
        name: 'Linen-Cotton Summer Slub Weave',
        size: '56" / 58" (142 - 147 cm); 100m rolls',
        density: '130 - 150 GSM Breathable Slub Plain Weave',
        color: '55% European Flax Linen / 45% Combed Cotton; Yarn-dyed natural chambray & mélanges',
        usage: 'Resortwear, summer shirt collections, casual tailoring, premium boutique labels'
      }
    ],
    technicalSpecs: {
      fiberBase: '100% Long-Staple Indian Combed Cotton (Shankar-6 / Suvin lineage) | Linen-Cotton Blends | Cotton-Spandex (98/2)',
      yarnCounts: '40/1, 50/1, 60/1, 80/2, 100/2 Ne compact ring-spun yarns',
      visualGradingStandard: '100% inspected under the ASTM D5430 4-Point System (First Quality / Grade A standard: Max 20–24 penalty points per 100 sq. yards; zero continuous running flaws)',
      dimensionalStability: 'Max 2.0% to 2.5% Warp & Weft after 3 commercial washes (AATCC 135 / ISO 6330)',
      tensileStrength: 'Warp: Min 45 kgf | Weft: Min 35 kgf (ISO 13934-1)',
      tearStrength: 'Warp: Min 1,800 g | Weft: Min 1,500 g (ISO 13937-2 Elmendorf method)',
      fabricFinishingOptions: 'Liquid Ammonia Finish (Enhanced luster, silk hand-feel, superior crease recovery) | Silk Touch Easy-Care Finish (Durable press, free formaldehyde < 75 ppm compliant) | Mercerized & Pre-Shrunk (Sanforized)',
      colorFastnessWashing: 'Grade 4 to 5 (ISO 105-C06)',
      colorFastnessRubbing: 'Dry: Grade 4-5 | Wet: Grade 3-4 (ISO 105-X12)',
      colorFastnessLight: 'Grade 4 to 5 (ISO 105-B02 / Xenon Arc)',
      chemicalSafety: 'OEKO-TEX Standard 100 (Product Class II) certified; 100% compliant with EU REACH Annex XVII (Azo-free, zero restricted phthalates, skin-friendly neutral pH 5.5 - 7.0)'
    },
    packagingOptions: [
      'Standard Roll Packaging: Fabric rolled crease-free on heavy-duty, reinforced 1.5" or 2" inner cardboard tubes (100 to 120 running meters per roll); sealed in double-layer transparent food-grade LDPE moisture-proof film with outer protective woven poly-sleeves.',
      'Roll Identification: Detailed roll-end sticker labels indicating roll number, lot/batch number, gross/net weight, total running meters, width, and inspection barcode.',
      'Bale / Carton Packing: Bulk rolls packed in sturdy 5-ply export master cartons for high-end boutique fabric lengths, or baled rolls strapped with high-tensile polyester bands for containerized ocean consolidation.',
      'Palletization: Vertical or horizontal roll stacking on ISPM-15 compliant heat-treated pallets wrapped with heavy-duty stretch film and corner protectors.'
    ],
    shippingInfo: {
      minimumOrder: '1,200 to 1,500 running meters per pattern / colorway | Pattern Desk / Handloom Sample Strip: Available within 7 - 10 working days',
      containerCapacity: '20ft FCL: ~38,000 - 42,000 m (Shirting, ~8.0 MT) / ~18,000 - 22,000 m (Chinos, ~8.5 MT) | 40ft High Cube (HC): ~80,000 - 90,000 m (Shirting) / ~42,000 - 48,000 m (Chinos)',
      containerStuffingBreakdown: {
        fcl20: [
          '~38,000 - 42,000 running meters (~8.0 MT) (Lightweight Shirting Rolls, 115 - 145 GSM, 58" Width)',
          '~18,000 - 22,000 running meters (~8.5 MT) (Bottom-Weight Chino / Pant Rolls, 220 - 280 GSM, 58" Width)'
        ],
        fcl40: [
          '~80,000 - 90,000 running meters in 40ft High Cube (Lightweight Shirting Rolls)',
          '~42,000 - 48,000 running meters in 40ft High Cube (Bottom-Weight Chinos / Pants)'
        ]
      },
      gatewayPorts: 'Tuticorin VOC Port (TUT) / Cochin Port (COK) / Chennai Port (MAA)',
      inlandDepots: 'ICD Irugur (Coimbatore) / ICD Tirupur / ICD Karur',
      airTerminals: 'Coimbatore International (CJB) / Tiruchirappalli (TRZ) / Chennai (MAA)',
      hsCode: '5208 42 00 / 5208 43 00 / 5209 43 00'
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
    name: 'Artisanal Brassware & Lost-Wax Bronze Artefacts',
    botanicalName: 'Sand-Cast Brass & Traditional Cire Perdue (Lost-Wax) Bronze',
    category: 'handicrafts',
    division: 'Indian Heritage Handicrafts',
    tag: 'EPCH Regd | Lost-Wax (Cire Perdue) | GI Provenance',
    origin: 'Swamimalai, Thanjavur & Nachiarkoil Artisan Clusters, Tamil Nadu, India',
    compliance: 'EPCH Registered | ASI Non-Antiquity Compliant | GI Cluster Provenance',
    image: './assets/images/handicrafts.jpg',
    shortDesc: 'Handcrafted by generational master sthapatis and metal artisans in the historic craft clusters of Swamimalai, Thanjavur, and Nachiarkoil in Tamil Nadu. Featuring traditional lost-wax cast (Cire Perdue) Chola-style bronze sculptures, hand-lathed solid brass Kuthuvilakku oil lamps, ornate floral Urlis, and decorative temple bells. Every piece is individually cast, hand-chiseled, and sealed with high-grade anti-tarnish protective lacquer to ensure lifelong luster for luxury hospitality, art galleries, and fine architectural interiors.',
    hsnCode: '8306 29 20 (Brass Statuettes & Ornaments) | 7419 80 30 (Brass Vessels & Utensils) | 9703 00 00 (Original Bronze Statuary)',
    grades: [
      {
        name: 'Traditional Nachiarkoil Kuthuvilakku (Oil Lamp)',
        size: 'Height: 12" to 72" (30 cm to 180 cm); 5-spout / 7-spout tops',
        density: '2.5 kg up to 45 kg per lamp; Solid sand-cast base',
        color: 'Solid Cast Brass (60/40); Mirror high-polish gold or antique oxidized finish',
        usage: 'Temple sanctums, luxury hotel lobbies, heritage interior architecture, gifting'
      },
      {
        name: 'Ornamental Peacock & Floral Urli Bowls',
        size: 'Diameter: 10" to 36" (25 cm to 90 cm); Depth: 3" to 12"',
        density: '3.0 kg to 28 kg; Heavy solid rim with hand-chiseled motifs',
        color: 'Heavy Bell Brass; Luminous golden sheen or vintage bronze patina',
        usage: 'Boutique resort water lounges, floral floating centerpieces, spa reception focal points'
      },
      {
        name: 'Swamimalai Lost-Wax Chola Bronzes (GI-Tagged)',
        size: 'Height: 6" to 60"+ (Custom sacred iconography)',
        density: '2.0 kg up to 150+ kg; Solid lost-wax bronze casting',
        color: 'Traditional Bronze / Panchaloha alloy; Natural antique museum patina',
        usage: 'Art galleries, luxury estates, international collectors, architectural sanctums'
      },
      {
        name: 'Hand-Engraved Temple Bells & Wall Hangings',
        size: 'Diameter: 4" to 18"; Hanging length: 12" to 48"',
        density: '1.5 kg to 18 kg; Resonant acoustic casting',
        color: 'Acoustic Bell Metal (Copper-Tin Bronze); Hand-etched chain links',
        usage: 'Architectural entryways, sacred spaces, heritage dining ambience'
      }
    ],
    technicalSpecs: {
      alloyMetallurgy: 'Solid Brass: 60% - 65% Cu, 35% - 40% Zn | Bronze: 78% - 80% Cu, 20% - 22% Sn | Panchaloha 5-Metal Alloy',
      castingTechnology: 'Traditional Lost-Wax Process (Cire Perdue) for figurines; Precision Cohesive Clay Sand-Casting for lamps & bowls',
      surfaceProtection: 'Multi-coat transparent automotive-grade anti-tarnish acrylic/cellulose lacquer; resists humidity and oxidation',
      finishingVariations: 'High-Mirror Polished Brass, Deep Antique Bronze Patina, Verde Gris (Verdigris green oxidized), or Matt Brushed Satin',
      craftIntegrity: '100% hand-detailed, file-worked, and chiseled by heritage artisan guilds (Compliant with GI specifications)'
    },
    packagingOptions: [
      'Primary Protection: Each item degreased, wrapped in moisture-barrier paper, wrapped in anti-tarnish VCI (Vapor Corrosion Inhibitor) film, and cushioned in multi-layer 10mm high-density expanded polyethylene (EPE) foam.',
      'Inner Packing: Custom heavy-duty corrugated inner cartons contoured with molded foam profiles; optional luxury velvet-lined wooden presentation boxes for gallery items.',
      'Master Export Crating: Heavy-duty ISPM-15 certified heat-treated pine/plywood crates with reinforced steel corner brackets and industrial strapping.',
      'Moisture & Marine Protection: Silica gel packs and container-grade desiccant bags to prevent moisture damage during tropical sea freight.'
    ],
    shippingInfo: {
      minimumOrder: 'Tier 1 (Artisanal Brassware / Urlis / Lamps): $2,500 USD equivalent (or 30 - 50 pieces) | Tier 2 (Lost-Wax Master Bronzes): Individual bespoke commissions accepted (Single piece up to life-size)',
      containerCapacity: 'LCL Sea Freight: Palletized & banded ISPM-15 heat-treated plywood crates | Air Cargo: Shock-cushioned wooden cases | 20ft FCL: ~12.0 - 15.0 MT gross payload',
      containerStuffingBreakdown: {
        fcl20: [
          '20ft FCL Mixed Handicraft Cargo: ~12.0 - 15.0 MT gross payload in heat-treated crates',
          'LCL Sea Freight: Palletized & banded ISPM-15 heat-treated plywood crates'
        ],
        fcl40: [
          'Air Cargo: Reinforced shock-cushioned wooden cases for high-value statuary & expedited delivery'
        ]
      },
      gatewayPorts: 'Chennai Port (MAA) / Tuticorin VOC Port (TUT) / Cochin Port (COK)',
      airTerminals: 'Chennai International (MAA) / Tiruchirappalli (TRZ) / Bengaluru (BLR)',
      hsCode: '8306 29 20 / 7419 80 30 / 9703 00 00'
    }
  },
  {
    id: 'modern-home-decor',
    slug: 'modern-home-decor',
    name: 'Modern Home Décor, Woodenware & Heritage Artefacts (OEM / Custom Sourcing)',
    botanicalName: 'Kiln-Dried Sheesham, Teak, Mango Wood, Natural Terracotta & Mixed Media',
    category: 'handicrafts',
    division: 'Indian Heritage Handicrafts',
    tag: 'OEM / Custom Sourcing | EPCH Regd | VRIKSH Certified',
    origin: 'Tamil Nadu, Rajasthan & Traditional Indian Artisan Guilds',
    compliance: 'EPCH Registered | VRIKSH Certified (CITES Timber Legality) | ISPM-15 Compliant',
    image: './assets/images/modern-home-decor.jpg',
    shortDesc: 'A curated export portfolio combining timeless Indian artisanal craftsmanship with sleek contemporary interior silhouettes. Sourced directly from accredited artisan clusters across Tamil Nadu and Rajasthan. Featuring solid hardwood jewellery boxes with brass inlays, modern sculptural wall relief panels, artisanal terracotta accents, and bespoke food-grade wooden tableware. Every timber piece is kiln-seasoned to controlled moisture levels (8%–12%), anti-termite boron treated, and sealed with eco-friendly, non-toxic finishes engineered to withstand global climatic shifts.',
    hsnCode: '4420 90 90 (Wooden Boxes & Decor) | 4419 90 90 (Wooden Tableware) | 6913 90 00 (Terracotta & Ceramics)',
    grades: [
      {
        name: 'Artisanal Wooden Keepsake & Jewellery Boxes',
        size: '8"×6"×4" up to 14"×10"×6" (Custom sizes)',
        density: 'Kiln-Dried Sheesham / Mango Wood; solid brass inlay hardware; velvet interior',
        color: 'Natural Walnut, Matte Natural Teak, Bleached Oak, or Rich Ebony; lacquer sealed',
        usage: 'Luxury retail giftware, boutique home décor, high-end department store private labels',
        image: './assets/images/modern-home-decor.jpg'
      },
      {
        name: 'Contemporary Wall Relief Panels & Hangings',
        size: '16"×24", 24"×36", 30"×40" individual & triptych sets',
        density: 'Seasoned hardwood frame with hand-carved relief, canvas, & brass accents',
        color: 'Matte earth tones, distressed off-white, antique metallic & gold leaf accents',
        usage: 'Feature walls, boutique hotel lobbies, luxury residential apartments, interior designers',
        image: './assets/images/wall-hanging-decor.jpg'
      },
      {
        name: 'Bespoke Wooden Tableware & Tea Collections',
        size: 'Cups, Saucers, Bowls, Platters (Custom CAD drawings)',
        density: 'Seasoned Teakwood / Neem Wood (Dense, close-grained, naturally antimicrobial)',
        color: '100% Food-Safe cold-pressed plant oils / organic beeswax; zero toxic varnishes',
        usage: 'Specialty culinary boutiques, eco-luxury lifestyle stores, sustainable hospitality',
        image: './assets/images/wooden-artefacts.jpg'
      },
      {
        name: 'Terracotta & Earthenware Sculptural Accents',
        size: 'Height: 6" to 24" (Tabletop & floor planters/vases)',
        density: 'Refined low-porosity alluvial terracotta clay; high-fire kiln cured',
        color: 'Raw unglazed terracotta, smoke-blackened pottery, or matte glazed highlights',
        usage: 'Eco-friendly home collections, organic modern living, landscape architecture',
        image: './assets/images/modern-home-decor.jpg'
      }
    ],
    technicalSpecs: {
      timberMoistureContent: 'Strict 8.0% to 12.0% (Vacuum kiln-dried; verified by pin-type digital moisture meters)',
      woodSeasoningTreatment: 'Chemical-free vacuum-pressure Boron-Boric treatment (non-hazardous anti-termite & anti-fungal)',
      foodContactSafety: 'US FDA 21 CFR 175.300 & EU Regulation (EC) No 1935/2004 compliant (Non-leaching, food-contact safe)',
      coatingsFinishing: 'Ultra-low VOC, 100% lead-free water-based sealants, food-grade mineral oils & natural beeswax',
      transitIntegrity: 'ISTA 1A / 3A drop-tested master cartons engineered for international e-commerce & retail transit',
      turnkeyOemCapability: 'In-house prototyping from client CAD blueprints, 3D renderings & tech packs with custom brand engraving'
    },
    packagingOptions: [
      'Unit Presentation Packaging: Individual drop-tested gift-ready boxes with interior velvet lining, tissue wrap, and molded expanded polyethylene (EPE) shock absorbers.',
      'Master Shippers: Heavy-duty 5-ply / 7-ply double-wall export corrugated master cartons with reinforced corner edge guards and strapping.',
      'Palletization & Crating: Stretch-wrapped on ISPM-15 compliant heat-treated solid timber or plywood pallets with internal silica gel desiccant packs.'
    ],
    shippingInfo: {
      minimumOrder: 'Standard Catalog: $2,000 USD (or 50 units/design) | Bespoke OEM: 100 units/design | Prototypes: 10 - 14 working days',
      containerCapacity: '20ft FCL: ~1,500 - 2,500 master cartons (~26 - 28 CBM) | 40ft High Cube (HC): ~55 - 60 CBM mixed home décor cargo',
      containerStuffingBreakdown: {
        fcl20: [
          '20ft FCL (Assorted Master Shippers): ~1,500 - 2,500 master cartons (~26 - 28 CBM)',
          'LCL Sea Freight: Palletized & banded ISPM-15 heat-treated plywood crates'
        ],
        fcl40: [
          '40ft High Cube (HC): ~55 - 60 CBM mixed home décor cargo'
        ]
      },
      gatewayPorts: 'Chennai Port (MAA) / Tuticorin VOC Port (TUT) / Cochin Port (COK)',
      airTerminals: 'Chennai International (MAA) / Coimbatore (CJB) / Bengaluru (BLR)',
      hsCode: '4420 90 90 / 4419 90 90 / 6913 90 00'
    }
  },
  {
    id: 'oem-private-label',
    slug: 'oem-private-label',
    name: 'B2B Turnkey Private Label, OEM & Custom Contract Sourcing',
    botanicalName: 'End-to-End Procurement, Custom Packaging, Regulatory Compliance & Export Consolidation',
    category: 'handicrafts',
    division: 'Turnkey Contract Sourcing',
    tag: 'Turnkey OEM & Private Label | DGFT / IEC Registered | US FDA & EU Ready',
    origin: 'Verified Manufacturing Hubs Across South India & Pan-India Industrial Clusters',
    compliance: 'DGFT / IEC Registered | US FDA Food Contact Compliant | EU REACH & CE Ready',
    image: './assets/images/private-label.jpg',
    shortDesc: 'A dedicated turnkey sourcing and private-label manufacturing desk bridging international retail brands, supermarket chains, hospitality groups, and e-commerce importers with audited Indian manufacturing clusters. We manage the entire cross-border procurement lifecycle: vendor qualification, CAD prototype tooling, formulation & lab testing, custom retail packaging (blister cards, glass spice jars, nitrogen-flushed tins, rigid gift boxes), GS1 barcode integration, and final container consolidation with unified export documentation.',
    hsnCode: 'Consolidated Multi-Category (7010.90 / 9603.21 / 8210.00 / 6302.60 / 4819.10)',
    grades: [
      {
        name: 'Private-Label Retail Spices & Condiments',
        size: '50g to 500g glass jars, adjustable ceramic grinder caps, composite tins',
        density: 'Whole & ground single-origin spices; US FDA / EU MRL compliant raw material',
        color: 'Nitrogen flushing, induction foil heat-sealing, tamper-evident neck bands, GS1 barcodes',
        usage: 'Supermarket private labels, gourmet grocery chains, specialty food brands',
        image: './assets/images/private-label.jpg'
      },
      {
        name: 'Sustainable Living & Hotel Amenities',
        size: 'Bamboo toothbrushes, neem combs, loofah pads, cotton vanity sets',
        density: 'FSC-certified Moso bamboo, 100% biodegradable polymers, BPA-free bristles',
        color: 'Kraft pillow boxes, engraved laser logos, zero-plastic retail presentation',
        usage: 'Eco-luxury resorts, zero-waste lifestyle retailers, airline comfort kits',
        image: './assets/images/wooden-artefacts.jpg'
      },
      {
        name: 'Boutique Glassware & Tableware Accessories',
        size: 'High-borosilicate spice jars, oil pourers, airtight bamboo-lid containers',
        density: 'Lead-free, cadmium-free borosilicate glass; food-contact approved silicone seals',
        color: 'Custom screen-printed bottles, bespoke silicone sleeves, drop-tested retail cartons',
        usage: 'Kitchenware retail chains, home organization brands, roasteries',
        image: './assets/images/private-label.jpg'
      },
      {
        name: 'Curated Luxury Corporate & Diplomatic Hampers',
        size: 'Thematic combinations (Spices + Artisan Brassware + Organic Textiles)',
        density: 'Certified single-origin spices, hand-cast brass Urlis/lamps, handloom linens',
        color: 'Rigid magnetic luxury gift boxes, gold/silver foil stamping, satin ribbon inserts',
        usage: 'Corporate VIP gifting, diplomatic missions, festival retail collections',
        image: './assets/images/handicrafts.jpg'
      }
    ],
    technicalSpecs: {
      vendorQualificationAudits: 'Every partner facility is pre-audited for quality infrastructure, labor ethics, environmental compliance & delivery track record',
      foodContactSafety: 'Fully certified under US FDA 21 CFR 175/177, California Proposition 65 (Lead/Cadmium < 0.1 ppm) & EU Regulation (EC) No 1935/2004',
      thirdPartyInspection: 'Consignment inspection & batch testing executed via accredited testing houses (SGS, Bureau Veritas, Intertek, or NABL labs) upon buyer nomination',
      labelingRegulatoryAlignment: 'US Market: FDA 21 CFR Part 101 panels | EU: FIC Regulation 1169/2011 & CE marks | GCC: GSO 9/2013 bilingual (Arabic/English) standards',
      ecommerceFbaCompliance: 'Turnkey fulfillment prep: FNSKU barcode application, suffocation warning polybags, carton weight < 50 lbs, GMA / Euro pallet configuration'
    },
    packagingOptions: [
      'Shelf-Ready Packaging (SRP): Perforated retail display outers (RRP/SRP) engineered for direct placement onto supermarket and retail shelves.',
      'Transit Integrity & Drop Testing: Packed inside heavy-duty 5-ply / 7-ply double-wall export master cartons meeting ISTA 1A / 3A drop-test criteria to eliminate e-commerce transit damage.',
      'Consolidated Container Packing: Multi-SKU consolidation with clear pallet mapping, color-coded carton labels, and shrink-wrapped ISPM-15 heat-treated export pallets.'
    ],
    shippingInfo: {
      minimumOrder: 'Minimum Project Value (MOV): $5,000 USD (Consolidated mixed SKUs or single-line OEM runs) | Turnkey Project Lead Time: 25 - 45 business days',
      containerCapacity: '20ft / 40ft FCL Factory-Direct Stuffing | LCL Multi-Vendor Palletized Consolidation | Air Cargo Express',
      containerStuffingBreakdown: {
        fcl20: [
          'Full Container Load (20ft / 40ft FCL): Factory-direct stuffing with mixed SKU manifest',
          'Less than Container Load (LCL): Consolidated multi-vendor palletized shipments'
        ],
        fcl40: [
          'Air Cargo Express / Priority: Dedicated sampling runs and expedited retail deliveries'
        ]
      },
      gatewayPorts: 'Chennai Port (MAA) / Tuticorin VOC Port (TUT) / Cochin Port (COK)',
      airTerminals: 'Chennai (MAA) / Bangalore Kempegowda (BLR) / Coimbatore (CJB)',
      hsCode: 'Consolidated Multi-Category (7010.90 / 9603.21 / 8210.00 / 6302.60 / 4819.10)'
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
