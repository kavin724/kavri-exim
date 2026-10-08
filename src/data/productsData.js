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
    name: 'Tellicherry Black Pepper',
    botanicalName: 'Piper nigrum',
    category: 'spices',
    division: 'Spices & Seasonings',
    tag: 'Export Ready | Origin Certified',
    origin: 'Malabar Coast & Western Ghats Foothills',
    image: './assets/images/pepper.jpg',
    shortDesc: 'The gold standard of world peppercorns. Fully vine-ripened, sun-cured, and machine-garbled into Tellicherry Garbled Extra Bold (TGEB) berries renowned for high natural piperine and woody citrus aromatics.',
    hsnCode: '0904 11 10',
    grades: [
      { name: 'TGSEB (Tellicherry Garbled Special Extra Bold)', size: '4.75mm+ (88%+ mesh)', density: '580+ g/L (GL)', color: 'Uniform Dark Black', usage: 'Gourmet mills, high-end retail, US/EU hospitality' },
      { name: 'TGEB (Tellicherry Garbled Extra Bold)', size: '4.25 mm - 4.75 mm', density: '550 - 580 g/L (GL)', color: 'Deep Brownish Black', usage: 'Food seasoning blends, industrial grinding' },
      { name: 'MG-1 (Malabar Garbled Grade 1)', size: '3.75mm - 4.25mm', density: '500 - 520 g/L (GL)', color: 'Natural Black', usage: 'Meat processing, oleoresin extraction, institutional bulk' },
      { name: 'Pinheads & Light Berries', size: '< 2.5mm', density: '300 - 350 g/L (GL)', color: 'Blackish-grey', usage: 'Essential oil distillation, pharmaceutical applications' }
    ],
    technicalSpecs: {
      moisture: 'Max 11.0% (Dean-Stark method)',
      piperineContent: 'Min 4.8% to 6.2% (HPLC)',
      bulkDensityGL: '550 - 580+ g/L guaranteed',
      lightBerries: 'Max 1.0% in TGEB grade',
      pinheads: 'Max 0.5% in garbled grade',
      extraneousMatter: 'Max 0.2% (Triple magnetic filtered)',
      salmonella: 'Absent in 25g (Steam-sterilized upon request)',
      eColi: '< 10 cfu/g'
    },
    packagingOptions: [
      '25 kg / 50 kg Heavy-Duty PP Woven Bags with Inner Polyliner',
      '25 kg / 50 kg Natural Jute Gunny Bags with Food-Grade Marking',
      '1 Ton Jumbo FIBC Bulk Bags for industrial processors'
    ],
    shippingInfo: {
      minimumOrder: '5 MT (LCL) / 15 MT (20ft FCL)',
      containerCapacity: '20ft FCL: approx 15 MT | 40ft FCL: approx 26 - 27 MT',
      gatewayPorts: 'Tuticorin VOC Port (TUT), Cochin (COK), Chennai (MAA)',
      hsCode: '0904.11.10'
    }
  },
  {
    id: 'kolli-pepper',
    slug: 'kolli-pepper',
    name: 'Kolli Black Pepper',
    botanicalName: 'Piper nigrum (Kolli Hills Ecotype)',
    category: 'spices',
    division: 'Spices & Seasonings',
    tag: 'Origin Certified | High Piperine',
    origin: 'Kolli Hills (Kolli Malai), Eastern Ghats, Tamil Nadu',
    image: './assets/images/kolli-pepper.jpg',
    shortDesc: 'Organically cultivated in the untouched mountain valleys of Kolli Hills, Tamil Nadu, at altitudes of 1,000–1,300 meters. Celebrated by international spice blenders for exceptional piperine pungency (up to 6.5%) and rich earthy heat.',
    hsnCode: '0904 11 10',
    grades: [
      { name: 'Kolli Bold Shade-Grown Grade A', size: '4.5mm - 5.0mm', density: '550 - 580 g/L (GL)', color: 'Pitch Black Wrinkled', usage: 'Premium pharmaceutical extraction, gourmet spice mills' },
      { name: 'Kolli Garbled Standard', size: '4.0mm - 4.5mm', density: '520 - 550 g/L (GL)', color: 'Natural Dark Black', usage: 'Artisanal seasoning houses, meat curing, spice blends' },
      { name: 'Kolli Whole Grinding Grade', size: '3.5mm - 4.0mm', density: '480 - 520 g/L (GL)', color: 'Deep Blackish Brown', usage: 'Curry powders, oleoresin extraction' }
    ],
    technicalSpecs: {
      moisture: 'Max 10.5% (Dean-Stark method)',
      piperineContent: '5.2% to 6.8% (HPLC verified - naturally high)',
      volatileOil: 'Min 2.8% to 3.5% v/w',
      bulkDensityGL: '520 - 580 g/L guaranteed',
      extraneousMatter: 'Max 0.25% (Sortex & magnetic cleaned)',
      aflatoxins: 'B1 < 2 ppb, Total < 4 ppb (EU compliant)',
      cultivation: 'Rainfed shade-grown on natural silver oak standards without chemical ripeners'
    },
    packagingOptions: [
      '25 kg / 50 kg PP Woven Bags with Inner Polyliner',
      '10 kg / 25 kg Multi-layer Kraft Paper Bags for boutique importers',
      'Custom vacuum pouches for gourmet private labels'
    ],
    shippingInfo: {
      minimumOrder: '1 MT (LCL/Air) / 10 MT (FCL)',
      containerCapacity: '20ft FCL: approx 15 MT | 40ft FCL: approx 26 MT',
      gatewayPorts: 'Tuticorin VOC Port (TUT), Chennai Sea Port (MAA)',
      hsCode: '0904.11.10'
    }
  },
  {
    id: 'salem-turmeric',
    slug: 'salem-turmeric',
    name: 'Salem Turmeric Fingers',
    botanicalName: 'Curcuma longa (Salem Finger Variety)',
    category: 'spices',
    division: 'Spices & Seasonings',
    tag: 'Export Ready | Origin Certified',
    origin: 'Salem District, Kaveri Basin, Tamil Nadu',
    image: './assets/images/salem-turmeric.jpg',
    shortDesc: 'The benchmark culinary turmeric of South India. Long, stout fingers polished to a golden amber sheen, renowned globally for brilliant natural yellow color, high essential aroma, and clean taste.',
    hsnCode: '0910 30 20',
    grades: [
      { name: 'Salem Double Polished Finger (Grade 1)', size: '6cm - 10cm long stout fingers', density: 'Solid brittle fracture', color: 'Luminous Golden Amber', usage: 'Supermarket whole repack, culinary trade, gourmet retail' },
      { name: 'Salem Single Polished Finger', size: '5cm - 8cm fingers', density: 'Hard core', color: 'Natural Amber Yellow', usage: 'Wholesale grinding mills, spice blending plants' },
      { name: 'Salem Turmeric Bulbs (Gatha)', size: 'Solid round rhizome bulbs', density: 'Heavy dense core', color: 'Golden Yellow', usage: 'Industrial oleoresin and curcumin extraction' }
    ],
    technicalSpecs: {
      curcuminContent: '3.2% to 4.2% (HPLC tested)',
      moisture: 'Max 10.0% (Whole fingers)',
      totalAsh: 'Max 6.5%',
      acidInsolubleAsh: 'Max 0.8%',
      leadChromateTest: 'Strictly Negative (100% natural, zero chemical polish)',
      foreignOrganicMatter: 'Max 0.3%',
      starchPurity: 'Pure genuine Curcuma longa'
    },
    packagingOptions: [
      '25 kg / 50 kg Heavy-Duty PP Woven Bags with Inner Liner',
      '50 kg Natural Export Jute Bags with food-grade stencil print',
      'Custom palletized wooden crates for specialized buyers'
    ],
    shippingInfo: {
      minimumOrder: '5 MT (LCL) / 18 MT (20ft FCL)',
      containerCapacity: '20ft FCL: approx 18 MT | 40ft FCL: approx 26 MT',
      gatewayPorts: 'Tuticorin VOC Port (TUT), Chennai Port (MAA)',
      hsCode: '0910.30.20'
    }
  },
  {
    id: 'erode-turmeric',
    slug: 'erode-turmeric',
    name: 'Erode Turmeric Fingers (GI-Tagged)',
    botanicalName: 'Curcuma longa (Erode Variety)',
    category: 'spices',
    division: 'Spices & Seasonings',
    tag: 'GI Tagged | Geographical Indication',
    origin: 'Erode District (Turmeric City), Tamil Nadu, India',
    image: './assets/images/erode-turmeric.jpg',
    shortDesc: 'Officially granted Geographical Indication (GI) status by the Government of India. Cultivated along the Kaveri river basin, Erode turmeric is globally prized for its deep golden-yellow color, high resistance to insect pests, and distinct therapeutic phytochemical profile.',
    hsnCode: '0910 30 20',
    grades: [
      { name: 'Erode GI Finger Grade Special', size: '5cm - 8cm smooth slender fingers', density: 'Extremely hard fracture', color: 'Deep Golden Chrome Yellow', usage: 'High-end culinary export, traditional Ayurvedic formulations' },
      { name: 'Erode Finger Commercial Bold', size: '4cm - 7cm', density: 'Dense rhizome', color: 'Rich Golden Yellow', usage: 'Global food processors, extraction, institutional spice buyers' },
      { name: 'Erode Bulb (Gatha) Export Grade', size: 'Round/oval rhizomes', density: 'Very high density', color: 'Deep Amber Orange', usage: 'Curcumin extractors, oleoresin manufacturers' }
    ],
    technicalSpecs: {
      curcuminContent: '3.0% to 4.0%+ (Certified Erode GI specification)',
      moisture: 'Max 9.5% - 10.0%',
      totalAsh: 'Max 6.0%',
      acidInsolubleAsh: 'Max 0.7%',
      giCertification: 'Registered under Geographical Indications Registry (India)',
      leadChromateAdulteration: 'Negative (100% Guaranteed pure)',
      pesticideResidue: 'Conforms to strict EU MRL and US FDA guidelines'
    },
    packagingOptions: [
      '25 kg / 50 kg PP Bags with Official GI Batch Hologram Tag',
      '50 kg Natural Jute Gunny Bags',
      'Custom vacuum-packed cartons for premium importers'
    ],
    shippingInfo: {
      minimumOrder: '5 MT (LCL) / 18 MT (20ft FCL)',
      containerCapacity: '20ft FCL: approx 18 MT | 40ft FCL: approx 26 MT',
      gatewayPorts: 'Tuticorin VOC Port (TUT), Cochin (COK), Chennai (MAA)',
      hsCode: '0910.30.20'
    }
  },
  {
    id: 'turmeric-powder',
    slug: 'turmeric-powder',
    name: 'Pure Ground Turmeric Powder',
    botanicalName: 'Curcuma longa Pulvis',
    category: 'spices',
    division: 'Spices & Seasonings',
    tag: 'Export Ready | Ultra-Fine Mesh',
    origin: 'Tamil Nadu Turmeric Belts (Erode & Salem)',
    image: './assets/images/turmeric-powder.jpg',
    shortDesc: 'Cryogenically pulverized from cleaned, steam-sterilized Salem and Erode finger rhizomes. Retains maximum volatile oils, natural curcumin, and intense golden color without overheating or starch fillers.',
    hsnCode: '0910 30 30',
    grades: [
      { name: 'Premium High-Curcumin Powder (Curcumin 4.5%+)', size: '80 - 100 Mesh micro-fine', density: 'Aerated fine powder', color: 'Luminous Deep Orange-Gold', usage: 'Nutraceuticals, golden milk wellness blends, premium retail jars' },
      { name: 'Standard Culinary Grade (Curcumin 3.0% - 3.5%)', size: '60 - 80 Mesh fine grind', density: 'Uniform texture', color: 'Bright Sunny Yellow', usage: 'Industrial food seasoning, curry powder blends, food processing' },
      { name: 'Steam-Sterilized Export Powder', size: '80 Mesh ultra-clean', density: 'Low bio-burden', color: 'Golden Yellow', usage: 'US FDA / EU compliant ready-to-eat food manufacturing' }
    ],
    technicalSpecs: {
      curcuminContent: '3.0% to 5.0%+ (HPLC standardized by batch)',
      finenessMesh: 'Min 98% passing through 80 - 100 mesh sieve',
      moisture: 'Max 8.5% - 9.0%',
      totalAsh: 'Max 7.0%',
      acidInsolubleAsh: 'Max 1.0%',
      foreignStarchesAddedColor: 'Strictly Absent (Nil Sudan dye, Nil lead chromate, Nil metanil yellow)',
      salmonella: 'Absent in 25g',
      yeastAndMould: '< 100 cfu/g (Steam sterilized)'
    },
    packagingOptions: [
      '20 kg / 25 kg Multi-layer Kraft Paper Bags with Food-Grade Inner Poly Barrier',
      '25 kg Food-Grade Polypropylene Woven Bags with Sealed Inner Liner',
      'Custom Retail Pouches (100g, 250g, 500g, 1kg) with OEM Branding & Barcodes'
    ],
    shippingInfo: {
      minimumOrder: '2 MT (LCL) / 16 MT (20ft FCL)',
      containerCapacity: '20ft FCL: approx 16 MT | 40ft FCL: approx 24 - 25 MT',
      gatewayPorts: 'Tuticorin VOC Port (TUT), Chennai Port (MAA)',
      hsCode: '0910.30.30'
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
  { name: 'APEDA', code: 'Agri Export Authority', desc: 'Agricultural and Processed Food Products Export Development' },
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
