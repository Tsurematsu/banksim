import { defineConfig } from 'vite'
// import { exec } from 'child_process';
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,       // Escucha en 0.0.0.0 (todas las IPs disponibles)
    port: 5173,       // Puedes cambiar el puerto si lo deseas
  },
  plugins: [
    react(),
    tailwindcss(),
    // {
    //   name: 'run-node-script-on-reload',
    //   handleHotUpdate() {exec('node ./mapImage.js', () => {});}
    // },
  ],
})
