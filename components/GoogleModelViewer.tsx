import React, { useEffect, useRef, useState } from 'react';

interface GoogleModelViewerProps {
  modelUrl: string;
  className?: string;
  poster?: string;
  animationName?: string;
  skyboxImage?: string;
  skyboxHeight?: string;
}

const GoogleModelViewer: React.FC<GoogleModelViewerProps> = ({
  modelUrl,
  className = '',
  poster,
  animationName,
  skyboxImage,
  skyboxHeight = '1.5m',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const modelViewerRef = useRef<ModelViewerElement | null>(null);
  const [canUseAR, setCanUseAR] = useState(false);
  const [showARNotification, setShowARNotification] = useState(false);

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

      if (containerRef.current) {
        containerRef.current.innerHTML = '';

        const modelViewer = document.createElement('model-viewer') as ModelViewerElement;

        // Configurar URL del modelo
        if (!modelUrl) {
          console.error('modelUrl es requerido');
          return;
        }
        modelViewer.src = modelUrl.startsWith('http') ? modelUrl : `/${modelUrl}`;

        // Configurar AR
        modelViewer.setAttribute('ar', '');
        modelViewer.setAttribute('ar-modes', 'webxr scene-viewer quick-look');

        // Configurar controles
        modelViewer.setAttribute('camera-controls', '');
        modelViewer.setAttribute('touch-action', 'pan-y');
        modelViewer.setAttribute('tone-mapping', 'neutral');
        modelViewer.setAttribute('shadow-intensity', '2');
        modelViewer.setAttribute('rotation-per-second', '1deg');

        if (poster) {
          modelViewer.setAttribute('poster', poster);
        }

        // Configurar skybox ground-projected
        if (skyboxImage) {
          modelViewer.setAttribute('skybox-image', skyboxImage);
          modelViewer.setAttribute('skybox-height', skyboxHeight);
          modelViewer.setAttribute('disable-pan', '');
        }

        // Configurar cámara
        modelViewer.setAttribute('camera-orbit', '45deg 70deg 2.5m');
        modelViewer.setAttribute('camera-target', '0m 0.5m 0m');
        modelViewer.setAttribute('field-of-view', '30deg');
        modelViewer.setAttribute('min-camera-orbit', 'auto 10deg auto');
        modelViewer.setAttribute('max-camera-orbit', 'auto 90deg auto');

        // Estilos
        modelViewer.style.width = '100%';
        modelViewer.style.height = '100%';
        modelViewer.style.minHeight = '600px';
        modelViewer.style.display = 'block';
        modelViewer.style.backgroundColor = '#ffffff';

        modelViewerRef.current = modelViewer;

        // Event listeners
        modelViewer.addEventListener('load', () => {
          console.log('Modelo cargado exitosamente');

          // Verificar disponibilidad de AR después de un pequeño delay
          setTimeout(() => {
            if (modelViewer.canActivateAR) {
              setCanUseAR(true);
            } else {
              setCanUseAR(false);
            }
          }, 500);

          // Configurar animaciones si están disponibles
          if (animationName) {
            setTimeout(() => {
              const animations = modelViewer.availableAnimations || [];
              if (animations.includes(animationName)) {
                modelViewer.animationName = animationName;
              }
            }, 1000);
          }
        });

        modelViewer.addEventListener('error', (e: Event) => {
          console.error('Error cargando modelo:', e);
        });

        containerRef.current.appendChild(modelViewer);
      }
    };

    loadModelViewer();
  }, [modelUrl, poster, animationName]);

  const activateAR = async () => {
    if (modelViewerRef.current && modelViewerRef.current.canActivateAR) {
      try {
        await modelViewerRef.current.activateAR();
        console.log('AR activado exitosamente');
      } catch (error) {
        console.error('Error activando AR:', error);
        setShowARNotification(true);
        setTimeout(() => setShowARNotification(false), 3000);
      }
    } else {
      setShowARNotification(true);
      setTimeout(() => setShowARNotification(false), 3000);
    }
  };

  return (
    <div className={`w-full h-full relative ${className}`} style={{ minHeight: '600px' }}>
      <div ref={containerRef} className="absolute inset-0" />

      {/* Botón AR */}
      {canUseAR && (
        <div className="absolute bottom-4 right-4 z-50">
          <button
            onClick={activateAR}
            className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition-all duration-300 flex items-center justify-center text-lg"
            aria-label="Ver en Realidad Aumentada"
            title="Ver en AR"
          >
            📱
          </button>
        </div>
      )}

      {/* Notificación AR */}
      {showARNotification && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500/90 text-white px-6 py-4 rounded-lg shadow-xl z-60">
          <div className="text-center">
            <div className="text-lg font-bold mb-2">📱 AR No Disponible</div>
            <div className="text-sm">
              La Realidad Aumentada no está disponible en este dispositivo o navegador.
              <br />
              Prueba desde un dispositivo móvil compatible.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleModelViewer;