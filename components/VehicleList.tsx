import React, { useState } from 'react';
import { vehicles, Vehicle } from '../src/data/vehicles';
import VehicleCard from './VehicleCard';

interface VehicleListProps {
  onSelectVehicle: (vehicle: Vehicle) => void;
}

const VehicleList: React.FC<VehicleListProps> = ({ onSelectVehicle }) => {
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  
  const brands = ['all', ...Array.from(new Set(vehicles.map(v => v.brand)))];
  
  const filteredVehicles = selectedBrand === 'all' 
    ? vehicles 
    : vehicles.filter(v => v.brand === selectedBrand);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-center mb-4">
            Expo Prado - SEVEL
          </h1>
          <p className="text-center text-gray-600 mb-4">
            Selecciona un vehículo para verlo en Realidad Aumentada
          </p>
          
          {/* Filtro de marcas */}
          <div className="flex flex-wrap gap-2 justify-center">
            {brands.map(brand => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedBrand === brand
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {brand === 'all' ? 'Todos' : brand}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lista de vehículos */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map(vehicle => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onSelect={onSelectVehicle}
            />
          ))}
        </div>
        
        {filteredVehicles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🚗</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No hay vehículos disponibles
            </h3>
            <p className="text-gray-500">
              Selecciona una marca diferente o intenta más tarde
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-200 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            Usa tu dispositivo móvil para la mejor experiencia de Realidad Aumentada
          </p>
          <div className="flex justify-center items-center mt-2 text-xs text-gray-500 space-x-4">
            <span>📱 iOS Safari</span>
            <span>•</span>
            <span>🤖 Android Chrome</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleList;