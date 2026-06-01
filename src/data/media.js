/** Public asset paths — photography in /public/img/img-dump */
const d = '/img/img-dump';
const j = (file) => `${d}/${file}.jpg`;

export const media = {
  hero: {
    video: '/img/hero/hero_metal.mp4',
    poster: j(14),
    images: {
      mainbg1: j(23),
      mainbg2: j(24),
      mainbg3: j(25),
      mainbg4: j(12),
      header: j(23),
    },
  },
  about: {
    hero: j(23),
    preview: j(25),
    leadership: j(6),
  },
  sustainability: {
    hero: j(9),
    recovery: j(8),
  },
  infrastructure: {
    hero: j(13),
    warehousing: j(24),
    sorting: j(25),
    processing: j(7),
    quality: j(23),
    transport: j(12),
  },
  materials: {
    aluminium: j(15),
    copper: j(16),
    brass: j(17),
    industrialMetals: j(18),
    nonFerrousAlloys: j(20),
    recyclableMetals: j(21),
    grades: {
      aluminiumLitho: j(15),
      aluminiumTalk: j(6),
      aluminiumAcPunching: j(7),
      aluminiumCable: j(8),
      aluminium6063: j(9),
      copperPipe: j(16),
      copperWire: j(17),
      brassHoney: j(18),
      brassMixed: j(5),
      zincIngots: j(20),
      tinIngots: j(19),
      lead: j(18),
      cableRecovery: j(21),
      processScrap: j(7),
    },
  },
  brand: {
    logo: '/img/brand/snj-logo.png',
  },
  audio: '/img/products/snj-audio.mp3',
};
