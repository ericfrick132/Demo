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
    id: 'jeep-avenger',
    name: 'Jeep Avenger',
    model: 'Avenger',
    brand: 'Jeep',
    modelUrl: 'https://bunkerapp.b-cdn.net/JEEP/jeep%20avenger.glb',
    description: 'SUV compacto 100% eléctrico con capacidades off-road auténticas',
    features: [
      'Motor eléctrico de 156 CV',
      'Autonomía hasta 400 km',
      '4x4 Ready con Ground Clearance mejorado',
      'Pantalla Uconnect 10.25"'
    ],
    price: '$45.000.000',
    imageUrl: '/images/jeep-avenger-preview.jpg'
  },
  {
    id: 'jeep-commander-blackhawk',
    name: 'Jeep Commander Blackhawk',
    model: 'Commander Blackhawk',
    brand: 'Jeep',
    modelUrl: 'https://bunkerapp.b-cdn.net/JEEP/jeep%20commander%20blackhawk.glb',
    description: 'SUV de 7 plazas con edición especial Blackhawk y máxima tecnología',
    features: [
      'Motor Turbo 1.3L 185 CV',
      '7 plazas con configuración flexible',
      'Tracción 4x4 automática',
      'Edición especial Blackhawk'
    ],
    price: '$78.500.000',
    imageUrl: '/images/jeep-commander-blackhawk-preview.jpg'
  },
  {
    id: 'jeep-commander-limited',
    name: 'Jeep Commander Limited',
    model: 'Commander Limited',
    brand: 'Jeep',
    modelUrl: 'https://bunkerapp.b-cdn.net/JEEP/jeep%20commander%20limited.glb',
    description: 'SUV premium de 7 plazas con máximo lujo y tecnología avanzada',
    features: [
      'Motor Turbo 1.3L 185 CV',
      'Interior premium con cuero',
      'Sistema de infoentretenimiento avanzado',
      'Asistencias a la conducción nivel 2'
    ],
    price: '$75.000.000',
    imageUrl: '/images/jeep-commander-limited-preview.jpg'
  },
  {
    id: 'jeep-overland',
    name: 'Jeep Overland',
    model: 'Overland',
    brand: 'Jeep',
    modelUrl: 'https://bunkerapp.b-cdn.net/JEEP/jeep%20overland.glb',
    description: 'SUV preparado para aventuras extremas con capacidades off-road superiores',
    features: [
      'Sistema 4x4 Trail Rated',
      'Protecciones inferiores reforzadas',
      'Suspensión elevada',
      'Neumáticos all-terrain'
    ],
    price: '$82.000.000',
    imageUrl: '/images/jeep-overland-preview.jpg'
  },
  // RAM Vehicles
  {
    id: 'ram-1500-laramie',
    name: 'RAM 1500 Laramie',
    model: '1500 Laramie',
    brand: 'RAM',
    modelUrl: 'https://bunkerapp.b-cdn.net/RAM/RAM%201500%20Laramie.glb',
    description: 'Pickup full-size premium con motor V8 HEMI y máximo lujo',
    features: [
      'Motor HEMI V8 5.7L 395 CV',
      'Interior Laramie premium',
      'Pantalla Uconnect 12"',
      'Carga útil hasta 1,000 kg'
    ],
    price: '$95.000.000',
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
    price: '$68.500.000',
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
    price: '$72.000.000',
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
    price: '$75.500.000',
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
    price: '$77.000.000',
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
    price: '$70.000.000',
    imageUrl: '/images/ram-blackhorn-preview.jpg'
  }
];

export const getVehicleById = (id: string): Vehicle | undefined => {
  return vehicles.find(vehicle => vehicle.id === id);
};

export const getVehiclesByBrand = (brand: string): Vehicle[] => {
  return vehicles.filter(vehicle => vehicle.brand.toLowerCase() === brand.toLowerCase());
};