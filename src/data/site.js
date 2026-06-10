import { media } from './media';

export const industries = [
  {
    no: '01',
    title: 'Manufacturing',
    body: 'Reliable non-ferrous feedstock for production lines that cannot afford supply gaps.',
  },
  {
    no: '02',
    title: 'Automotive',
    body: 'Aluminium and copper grades for components, castings and wiring across the vehicle supply chain.',
  },
  {
    no: '03',
    title: 'Electrical',
    body: 'High-conductivity copper and aluminium for conductors, windings and electrical assemblies.',
  },
  {
    no: '04',
    title: 'Infrastructure',
    body: 'Volume material supply for large-scale infrastructure and public works programmes.',
  },
  {
    no: '05',
    title: 'Construction',
    body: 'Extrusion-grade aluminium and structural non-ferrous metal for the built environment.',
  },
  {
    no: '06',
    title: 'Engineering',
    body: 'Specification-led inputs for precision engineering and fabricated assemblies.',
  },
  {
    no: '07',
    title: 'Exporters',
    body: 'Consolidated, documented consignments prepared for international shipment.',
  },
  {
    no: '08',
    title: 'Fabrication',
    body: 'Consistent grades for fabricators who need predictable material behaviour.',
  },
];

/** Hub is always index 0 (Bhiwandi). lat/lng used by the trade map. */
export const regions = [
  {
    name: 'Domestic, India',
    role: 'Core supply network',
    mapLabel: 'Bhiwandi',
    lat: 19.2813,
    lng: 73.0483,
    hub: true,
    body: 'Anchored by our Bhiwandi facility, we supply manufacturers, foundries and fabricators across India with dependable, scheduled deliveries.',
    points: ['Bhiwandi warehousing hub', 'Pan-India distribution', 'Scheduled recurring supply'],
  },
  {
    name: 'Middle East & Gulf',
    role: 'Export & import corridor',
    mapLabel: 'Dubai',
    lat: 25.2048,
    lng: 55.2708,
    body: 'An active trade corridor for non-ferrous metals and scrap, supported by clean documentation and reliable container logistics.',
    points: ['Container exports', 'Sourcing partnerships', 'Compliant documentation'],
  },
  {
    name: 'Southeast & East Asia',
    role: 'Trading partners',
    mapLabel: 'Singapore',
    lat: 1.3521,
    lng: 103.8198,
    body: 'Established trading relationships across key Asian markets for both inbound material and outbound consignments.',
    points: ['Two-way trade flows', 'Grade-matched supply', 'Port coordination'],
  },
  {
    name: 'Global Markets',
    role: 'International reach',
    mapLabel: 'USA, Europe & London',
    lat: 51.5074,
    lng: -0.1278,
    body: 'We trade with buyers and suppliers internationally, moving material across borders with predictable logistics and full compliance.',
    points: ['Cross-border trade', 'Export documentation', 'Logistics oversight'],
  },
];

export const globalStats = [
  { value: 25, suffix: '+', label: 'Markets served' },
  { value: 4, suffix: '', label: 'Trade corridors' },
  { value: 1, suffix: '', label: 'Strategic hub, Bhiwandi' },
];

export const sustainabilityImpact = [
  { value: 95, suffix: '%', label: 'Energy saved recycling aluminium vs. primary production' },
  { value: 100, suffix: '%', label: 'Of recovered copper retains its properties' },
  { value: 0, prefix: '', suffix: '', label: 'Compromise on responsible handling', display: 'Zero' },
];

export const sustainabilityPillars = [
  {
    title: 'Circular economy',
    body: 'Every tonne we recover and return to manufacturing is a tonne that does not need to be mined. Recycling is not an add-on to our business. It is the business.',
  },
  {
    title: 'Resource recovery',
    body: 'Non-ferrous metals can be recycled repeatedly with no loss of properties. We sort, process and re-supply that material so its value is never lost.',
  },
  {
    title: 'Waste reduction',
    body: 'Careful segregation keeps valuable metal out of landfill and reduces the waste burden of the industries we serve.',
  },
  {
    title: 'Compliance',
    body: 'We handle, document and trade material in line with prevailing environmental and trade regulations across the markets we operate in.',
  },
];

export const infrastructure = [
  {
    no: '01',
    title: 'Warehousing',
    body: 'A dedicated Bhiwandi facility provides the covered storage depth to hold buffer stock and fulfil large, recurring orders.',
    image: media.infrastructure.warehousing,
  },
  {
    no: '02',
    title: 'Sorting & Segregation',
    body: 'Incoming material is sorted by grade and alloy, with contaminants removed so buyers receive clean, classified lots.',
    image: media.infrastructure.sorting,
  },
  {
    no: '03',
    title: 'Processing',
    body: 'Recovered metal is processed and prepared for re-melting and re-use, furnace-ready material that meets expectations.',
    image: media.infrastructure.processing,
  },
  {
    no: '04',
    title: 'Quality Control',
    body: 'Calibrated weighing, grade verification and documentation before dispatch ensure every consignment matches the order.',
    image: media.infrastructure.quality,
  },
  {
    no: '05',
    title: 'Transportation',
    body: 'Coordinated truck and container logistics move material from the warehouse to destinations across India and overseas.',
    image: media.infrastructure.transport,
  },
];

export const processSteps = [
  { no: '01', title: 'Source', body: 'Material secured from a vetted supplier network and recovered streams.' },
  { no: '02', title: 'Sort & Grade', body: 'Sorted by alloy and grade; contaminants removed for clean lots.' },
  { no: '03', title: 'Inspect & Weigh', body: 'Calibrated weighing and grade verification against the order.' },
  { no: '04', title: 'Process', body: 'Prepared and processed into furnace-ready, re-usable material.' },
  { no: '05', title: 'Dispatch', body: 'Documented, loaded and shipped to destination on schedule.' },
];
