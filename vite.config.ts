import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Demo/',
  server: {
    port: 3001,
    host: '0.0.0.0'  // 👈 Agrega esta línea
  },
  assetsInclude: ['**/*.glb']
});