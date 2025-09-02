import React, { useEffect, useRef, useState } from 'react';

interface ARViewerProps {
  modelUrl: string;
  title?: string;
}

const ARViewer: React.FC<ARViewerProps> = ({ modelUrl, title = "Modelo 3D" }) => {
  const [loading, setLoading] = useState(true);
  const modelViewerRef = useRef<ModelViewerElement | null>(null);

  useEffect(() => {
    const loadModelViewer = async () => {
      if (!customElements.get('model-viewer')) {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
        document.head.appendChild(script);
        await new Promise<void>((resolve) => {
          script.onload = () => resolve();
        });
      }
      setLoading(false);
    };
    loadModelViewer();
  }, []);

  const activateAR = async () => {
    try {
      if (modelViewerRef.current && modelViewerRef.current.activateAR) {
        await modelViewerRef.current.activateAR();
      }
    } catch (e) {
      console.warn('No se pudo activar AR automáticamente:', e);
    }
  };

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-gray-700 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-700 font-medium">Cargando visor AR…</p>
        </div>
      </div>
    );
  }

  if (!modelUrl) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-red-500 font-medium">Error: modelUrl es requerido</p>
        </div>
      </div>
    );
  }

  const modelSrc = modelUrl.startsWith('http') ? modelUrl : `/${modelUrl}`;

  return (
    <div className="h-screen w-full bg-white">
      <div className="absolute top-0 left-0 right-0 p-3 text-center z-10">
        <div className="inline-block bg-white/90 px-3 py-1 rounded shadow">
          <span className="text-sm font-semibold text-gray-800">{title}</span>
        </div>
      </div>

      <model-viewer
        ref={modelViewerRef}
        src={modelSrc}
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        touch-action="pan-y"
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          background: '#ffffff'
        }}
        shadow-intensity="2"
        exposure="1"
      />

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <button
          onClick={activateAR}
          className="px-6 py-3 rounded-full bg-black text-white font-bold shadow-lg active:scale-95"
        >
          Abrir en AR
        </button>
        <span className="text-xs text-gray-600">
          Si no se abre automáticamente, toca el botón
        </span>
      </div>
    </div>
  );
};

export default ARViewer;