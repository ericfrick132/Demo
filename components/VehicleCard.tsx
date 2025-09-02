import React from 'react';
import { Vehicle } from '../src/data/vehicles';

interface VehicleCardProps {
  vehicle: Vehicle;
  onSelect: (vehicle: Vehicle) => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onSelect }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
      onClick={() => onSelect(vehicle)}
    >
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-30">🚗</div>
        </div>
        <div className="absolute top-3 left-3 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {vehicle.brand}
        </div>
        <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
          Ver en AR 📱
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-1">{vehicle.name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{vehicle.description}</p>
        
        {vehicle.price && (
          <div className="text-xl font-bold text-blue-600 mb-3">{vehicle.price}</div>
        )}
        
        <div className="space-y-1">
          {vehicle.features.slice(0, 2).map((feature, index) => (
            <div key={index} className="flex items-center text-xs text-gray-600">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
              {feature}
            </div>
          ))}
          {vehicle.features.length > 2 && (
            <div className="text-xs text-blue-500 font-medium">
              +{vehicle.features.length - 2} características más
            </div>
          )}
        </div>
        
        <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
          Ver en Realidad Aumentada
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;