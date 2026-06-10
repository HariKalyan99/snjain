import { media } from './media';

const g = media.materials.grades;
const m = media.materials;

export const materials = [
  {
    slug: 'aluminium-scrap',
    name: 'Aluminium Scrap',
    image: m.aluminium,
    tagline: 'Light, abundant, infinitely recyclable.',
    description:
      'A broad range of recovered aluminium grades sorted for re-melting and extrusion. Aluminium recycles using a fraction of the energy of primary production, making it a cornerstone of responsible manufacturing.',
    grades: [
      { name: 'Aluminium Litho Scrap', image: g.aluminiumLitho },
      { name: 'Aluminium Talk Scrap', image: g.aluminiumTalk },
      { name: 'Aluminium AC Punching Scrap', image: g.aluminiumAcPunching },
      { name: 'Aluminium Cable Wire Scrap', image: g.aluminiumCable },
      { name: '6063 Aluminium Extrusion Scrap', image: g.aluminium6063 },
      { name: 'Aluminium Foil Wrap', image: g.aluminiumFoil },
    ],
    specs: ['Sorted by alloy & form', 'Low contamination', 'Furnace & extrusion ready'],
    applications: ['Extrusion', 'Die casting', 'Automotive components', 'Construction sections'],
  },
  {
    slug: 'copper-scrap',
    name: 'Copper Scrap',
    image: m.copper,
    tagline: 'High-conductivity metal, recovered with care.',
    description:
      'Recovered copper graded for electrical and metallurgical re-use. Copper retains its properties through repeated recycling, making clean, well-sorted copper scrap one of the most valued non-ferrous materials.',
    grades: [
      { name: 'Red Copper Pipe Scrap', image: g.copperPipe },
      { name: 'Copper Wire & Tube', image: g.copperWire },
    ],
    specs: ['Graded by purity', 'Clean, sorted lots', 'Suited to re-melting & drawing'],
    applications: ['Electrical conductors', 'Tubing & plumbing', 'Alloy production', 'Electronics'],
  },
  {
    slug: 'brass-scrap',
    name: 'Brass Scrap',
    image: m.brass,
    tagline: 'Versatile copper-zinc alloys for casting and machining.',
    description:
      'Brass scrap recovered from fittings, fixtures and machined components. Sorted to consistent grades for foundries and brass mills that demand reliable input chemistry.',
    grades: [
      { name: 'Honey Brass / Taint Tabour', image: g.brassHoney },
      { name: 'Mixed Brass', image: g.brassMixed },
    ],
    specs: ['Consistent Cu-Zn ratios', 'Sorted by source', 'Foundry ready'],
    applications: ['Sanitary fittings', 'Valves & fixtures', 'Decorative castings', 'Machined parts'],
  },
  {
    slug: 'industrial-metals',
    name: 'Industrial Metals',
    image: m.industrialMetals,
    tagline: 'Primary and secondary ingots for industry.',
    description:
      'Refined non-ferrous ingots and industrial metals supplied to foundries, galvanisers and manufacturers requiring dependable, specification-grade input.',
    grades: [
      { name: 'Zinc Ingots', image: g.zincIngots },
      { name: 'Tin Ingots', image: g.tinIngots },
      { name: 'Lead', image: g.lead },
    ],
    specs: ['Refined ingot form', 'Specification grade', 'Consistent chemistry'],
    applications: ['Galvanising', 'Die casting', 'Soldering & alloying', 'Battery & sheet'],
  },
  {
    slug: 'non-ferrous-alloys',
    name: 'Non-Ferrous Alloys',
    image: m.nonFerrousAlloys,
    tagline: 'Alloying additions and specialist inputs.',
    description:
      'Specialist non-ferrous alloys and metallurgical additions sourced to manufacturing requirement, supporting precise control over melt chemistry.',
    grades: [
      { name: 'Silicon Metal', image: m.nonFerrousAlloys },
      { name: 'Specialist Alloys', image: m.nonFerrousAlloys },
    ],
    specs: ['Sourced to spec', 'Controlled chemistry', 'Programme supply'],
    applications: ['Aluminium alloying', 'Foundry additions', 'Metallurgical processing'],
  },
  {
    slug: 'recyclable-materials',
    name: 'Recyclable Materials',
    image: m.recyclableMetals,
    tagline: 'Recovered streams returned to circulation.',
    description:
      'Mixed and process recyclable non-ferrous streams collected, segregated and prepared for recovery, the raw input that keeps the circular metals economy moving.',
    grades: [
      { name: 'Cable & Wire Recovery', image: g.cableRecovery },
      { name: 'Process Scrap', image: g.processScrap },
    ],
    specs: ['Segregated streams', 'Contaminant removal', 'Recovery prepared'],
    applications: ['Secondary smelting', 'Material recovery', 'Circular supply'],
  },
];
