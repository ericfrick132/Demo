export interface Vehicle {
  id: string;
  name: string;
  model: string;
  brand: string;
  modelUrl: string;
  posterUrl?: string;
  description: string;
  features: string[];
  price?: string;
  imageUrl: string;
}

export const vehicles: Vehicle[] = [
  // JEEP Vehicles
  {
    id: 'jeep-compass-blackhawk',
    name: 'Jeep Compass Black Hawk',
    model: 'Compass Black Hawk',
    brand: 'Jeep',
    modelUrl: 'https://bunkerapp.b-cdn.net/JEEP2/Compass%20Black%20Hawk2.glb',
    description: 'SUV compacto con edición especial Black Hawk y tecnología avanzada',
    features: [
      'Motor Turbo 1.3L MultiAir',
      'Tracción 4x4 Trailhawk',
      'Edición especial Black Hawk',
      'Sistema Uconnect con pantalla 8.4"'
    ],
    imageUrl: '/images/jeep-compass-blackhawk-preview.jpg'
  },
  // RAM Vehicles
  {
    id: 'ram-1500-laramie',
    name: 'RAM 1500 Laramie',
    model: '1500 Laramie',
    brand: 'RAM',
    modelUrl: 'https://bunkerapp.b-cdn.net/RAM/RAM%201500%20Laramie%20Fixed.glb',
    description: 'Pickup full-size premium con motor V8 HEMI y máximo lujo',
    features: [
      'Motor HEMI V8 5.7L 395 CV',
      'Interior Laramie premium',
      'Pantalla Uconnect 12"',
      'Carga útil hasta 1,000 kg'
    ],
    imageUrl: '/images/ram-1500-laramie-preview.jpg'
  },
  {
    id: 'ram-rampage-bighorn',
    name: 'RAM Rampage Bighorn',
    model: 'Rampage Bighorn',
    brand: 'RAM',
    modelUrl: 'https://bunkerapp.b-cdn.net/RAM/RAM%20Rampage%20BIGHORN.glb',
    description: 'Pickup compacta con estilo robusto y capacidades versátiles',
    features: [
      'Motor Turbo 2.0L 272 CV',
      'Tracción 4x4 automática',
      'Carga útil 650 kg',
      'Estilo Bighorn exclusivo'
    ],
    imageUrl: '/images/ram-rampage-bighorn-preview.jpg'
  },
  {
    id: 'ram-rampage-laramie',
    name: 'RAM Rampage Laramie',
    model: 'Rampage Laramie',
    brand: 'RAM',
    modelUrl: 'https://bunkerapp.b-cdn.net/RAM/RAM%20Rampage%20Laramie.glb',
    description: 'Pickup compacta de lujo con terminaciones premium y tecnología avanzada',
    features: [
      'Motor Turbo 2.0L 272 CV',
      'Interior premium Laramie',
      'Pantalla Uconnect 8.4"',
      'Asistencias a la conducción'
    ],
    imageUrl: '/images/ram-rampage-laramie-preview.jpg'
  },
  {
    id: 'ram-rampage-rt',
    name: 'RAM Rampage R/T',
    model: 'Rampage R/T',
    brand: 'RAM',
    modelUrl: 'https://bunkerapp.b-cdn.net/RAM/RAM%20Rampage%20RT.glb',
    description: 'Pickup deportiva con performance superior y diseño agresivo',
    features: [
      'Motor Turbo 2.0L 272 CV',
      'Suspensión deportiva',
      'Escapes deportivos',
      'Estética R/T exclusiva'
    ],
    imageUrl: '/images/ram-rampage-rt-preview.jpg'
  },
  {
    id: 'ram-rampage-rebel',
    name: 'RAM Rampage Rebel',
    model: 'Rampage Rebel',
    brand: 'RAM',
    modelUrl: 'https://bunkerapp.b-cdn.net/RAM/RAM%20Rampage%20Rebel.glb',
    description: 'Pickup off-road con capacidades todo terreno y diseño distintivo',
    features: [
      'Motor Turbo 2.0L 272 CV',
      'Suspensión off-road',
      'Neumáticos all-terrain',
      'Protecciones Rebel'
    ],
    imageUrl: '/images/ram-rampage-rebel-preview.jpg'
  },
  {
    id: 'ram-blackhorn',
    name: 'RAM Blackhorn',
    model: 'Blackhorn',
    brand: 'RAM',
    modelUrl: 'https://bunkerapp.b-cdn.net/RAM/RAM%20blackhorn.glb',
    description: 'Pickup con edición especial Blackhorn, combinando estilo y funcionalidad',
    features: [
      'Motor Turbo 2.0L 272 CV',
      'Acabados Blackhorn exclusivos',
      'Llantas negras especiales',
      'Detalles cromados negros'
    ],
    imageUrl: '/images/ram-blackhorn-preview.jpg'
  },
  // RENAULT Vehicles
  {
    id: 'renault-captur',
    name: 'Renault Captur',
    model: 'Captur',
    brand: 'RENAULT',
    modelUrl: 'https://bunkerapp.b-cdn.net/RENAULT/renault-captur.glb',
    description: 'SUV compacto con diseño distintivo y tecnología avanzada',
    features: [
      'Motor TCe 1.0L 100 CV',
      'Tracción delantera',
      'Pantalla EASY LINK 9.3"',
      'Techo personalizable'
    ],
    imageUrl: '/images/renault-captur-preview.jpg'
  }
];

export const getVehicleById = (id: string): Vehicle | undefined => {
  return vehicles.find(vehicle => vehicle.id === id);
};

export const getVehiclesByBrand = (brand: string): Vehicle[] => {
  return vehicles.filter(vehicle => vehicle.brand.toLowerCase() === brand.toLowerCase());
};

export const getVehiclesByUser = (username: string): Vehicle[] => {
  switch (username.toLowerCase()) {
    case 'sevel':
      return vehicles.filter(vehicle => 
        vehicle.brand === 'RAM' || vehicle.brand === 'Jeep'
      );
    case 'santarosa':
      return vehicles.filter(vehicle => 
        vehicle.brand === 'RENAULT'
      );
    default:
      return vehicles;
  }
};