export type ProductCategory = 'karet' | 'teflon';

export type MachineType = 'offset' | 'giling' | 'open';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  hardness: string; // JIS
  material: string;
  materialDetails: string[];
  usage: string;
  machineTypes: MachineType[];
  description?: string;
}

export const products: Product[] = [
  {
    id: 'roll-karet-tinta',
    name: 'Roll Karet Tinta',
    category: 'karet',
    hardness: '30 JIS',
    material: 'NBR (Nitrile Butadiene Rubber)',
    materialDetails: ['JSR220S', 'KUMHO'],
    usage: 'Distribusi Tinta',
    machineTypes: ['offset'],
    description: 'Roll karet presisi tinggi untuk distribusi tinta merata pada mesin percetakan offset'
  },
  {
    id: 'roll-karet-air-pvc',
    name: 'Roll Karet Air PVC',
    category: 'karet',
    hardness: '25 JIS',
    material: 'NBR PVC',
    materialDetails: ['KNV0072 M'],
    usage: 'Pembasah/Air',
    machineTypes: ['offset'],
    description: 'Roll khusus untuk sistem pembasah dengan ketahanan kimia superior'
  },
  {
    id: 'dasaran-60',
    name: 'Dasaran',
    category: 'karet',
    hardness: '60 JIS',
    material: 'Natural Rubber (NR)',
    materialDetails: ['Natural Rubber Berkualitas Tinggi'],
    usage: 'Fondasi Roll',
    machineTypes: ['offset', 'giling'],
    description: 'Lapisan dasar yang memberikan fondasi kuat untuk roll karet'
  },
  {
    id: 'roll-karet-tinta-pvc',
    name: 'Roll Karet Tinta PVC',
    category: 'karet',
    hardness: '30 JIS',
    material: 'NBR PVC',
    materialDetails: ['KNV0072 M'],
    usage: 'Tinta Presisi',
    machineTypes: ['offset'],
    description: 'Roll tinta dengan formulasi khusus untuk hasil cetakan presisi tinggi'
  },
  {
    id: 'dasaran-pvc',
    name: 'Dasaran PVC',
    category: 'karet',
    hardness: '60 JIS',
    material: 'NBR PVC',
    materialDetails: ['NBR PVC Compound'],
    usage: 'Fondasi Tahan Kimia',
    machineTypes: ['offset', 'giling'],
    description: 'Dasaran dengan ketahanan kimia ekstra untuk kondisi kerja berat'
  },
  {
    id: 'roll-karet-nr-60',
    name: 'Roll Karet NR 60',
    category: 'karet',
    hardness: '60 JIS',
    material: 'Natural Rubber (NR)',
    materialDetails: ['Premium Natural Rubber'],
    usage: 'Heavy Duty',
    machineTypes: ['giling', 'open'],
    description: 'Roll karet natural untuk aplikasi heavy duty dengan durabilitas tinggi'
  },
  {
    id: 'roll-karet-nr-75',
    name: 'Roll Karet NR 75',
    category: 'karet',
    hardness: '75 JIS',
    material: 'Natural Rubber (NR)',
    materialDetails: ['Premium Natural Rubber'],
    usage: 'Heavy Duty Extra Hard',
    machineTypes: ['giling', 'open'],
    description: 'Roll karet natural ekstra keras untuk beban kerja maksimum'
  },
  {
    id: 'dasaran-50',
    name: 'Dasaran Cushioning',
    category: 'karet',
    hardness: '50 JIS',
    material: 'Natural Rubber (NR)',
    materialDetails: ['Soft Natural Rubber'],
    usage: 'Cushioning',
    machineTypes: ['offset', 'giling', 'open'],
    description: 'Dasaran dengan kekerasan sedang untuk efek cushioning optimal'
  },
];

export const materialInfo = {
  NBR: {
    name: 'NBR (Nitrile Butadiene Rubber)',
    variants: ['JSR220S', 'JSRN230SL', 'KUMHO'],
    benefits: [
      'Tahan terhadap minyak dan pelarut',
      'Ketahanan abrasi superior',
      'Fleksibilitas tinggi dalam berbagai suhu',
      'Material import berkualitas premium'
    ]
  },
  NBR_PVC: {
    name: 'NBR PVC',
    variants: ['KNV0072 M'],
    benefits: [
      'Ketahanan kimia excellent',
      'Tahan terhadap air dan solvent',
      'Dimensi stabil dalam jangka panjang',
      'Cocok untuk aplikasi presisi tinggi'
    ]
  },
  NR: {
    name: 'Natural Rubber (NR)',
    variants: ['Premium Grade'],
    benefits: [
      'Elastisitas alami superior',
      'Ketahanan terhadap sobek dan aus',
      'Rebound yang excellent',
      'Durabilitas jangka panjang'
    ]
  }
};
