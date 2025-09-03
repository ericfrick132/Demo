import React, { useState } from 'react';
import GoogleModelViewer from './components/GoogleModelViewer';
import VehicleList from './components/VehicleList';
import { Vehicle } from './src/data/vehicles';

function App() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const handleVehicleSelect = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const handleBackToList = () => {
    setSelectedVehicle(null);
  };

  if (!selectedVehicle) {
    return <VehicleList onSelectVehicle={handleVehicleSelect} />;
  }

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col">
      {/* Header con botón de regreso */}
      <div className="flex items-center justify-between py-4 px-4 bg-white shadow-sm flex-shrink-0">
        <button
          onClick={handleBackToList}
          className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-200"
        >
          <span className="text-xl mr-2">←</span>
          <span className="font-medium">Volver al catálogo</span>
        </button>
        <h1 className="text-xl font-bold text-center flex-1">
          {selectedVehicle.name}
        </h1>
        <div className="w-32"></div> {/* Spacer para centrar el título */}
      </div>

      {/* Información del vehículo */}
      <div className="bg-white px-4 py-3 border-b border-gray-200 flex-shrink-0">
        <div className="text-sm text-gray-600 mb-1">{selectedVehicle.description}</div>
        {selectedVehicle.price && (
          <div className="text-lg font-bold text-blue-600">{selectedVehicle.price}</div>
        )}
      </div>

      {/* Visor 3D */}
      <div className="flex-1 w-full">
        <GoogleModelViewer 
          modelUrl={selectedVehicle.modelUrl}
          className="w-full h-full"
          skyboxImage="https://modelviewer.dev/assets/spruit_sunrise_4k_LDR.jpg"
          skyboxHeight="1.5m"
        />
      </div>

      {/* Información adicional en la parte inferior */}
      <div className="bg-white px-4 py-3 border-t border-gray-200 flex-shrink-0">
        <div className="text-sm font-medium text-gray-800 mb-2">Características principales:</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
          {selectedVehicle.features.slice(0, 4).map((feature, index) => (
            <div key={index} className="flex items-center text-xs text-gray-600">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;