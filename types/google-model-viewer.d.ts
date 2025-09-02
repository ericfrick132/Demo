import * as React from 'react';

declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        src?: string;
        alt?: string;
        poster?: string;
        'camera-controls'?: boolean | string;
        'auto-rotate'?: boolean | string;
        'auto-rotate-delay'?: number | string;
        'rotation-per-second'?: string;
        'shadow-intensity'?: number | string;
        'shadow-softness'?: number | string;
        'environment-image'?: string;
        'skybox-image'?: string;
        'exposure'?: number | string;
        'tone-mapping'?: string;
        'touch-action'?: string;
        loading?: 'auto' | 'lazy' | 'eager';
        reveal?: 'auto' | 'manual';
        'field-of-view'?: string;
        'min-camera-orbit'?: string;
        'max-camera-orbit'?: string;
        'camera-orbit'?: string;
        'camera-target'?: string;
        'interaction-prompt'?: 'auto' | 'none' | 'when-focused';
        ar?: boolean | string;
        'ar-modes'?: string;
        'ar-scale'?: 'auto' | 'fixed';
        autoplay?: boolean | string;
        'animation-name'?: string;
        'animation-crossfade-duration'?: string;
      },
      HTMLElement
    >;
  }
}

interface ModelViewerElement extends HTMLElement {
  animationName: string;
  availableAnimations: string[];
  currentTime: number;
  timeScale: number;
  canActivateAR: boolean;
  activateAR(): Promise<void>;
  play(): void;
  pause(): void;
}

declare global {
  interface HTMLElementTagNameMap {
    'model-viewer': ModelViewerElement;
  }
}