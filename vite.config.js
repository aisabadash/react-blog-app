import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  const evn = loadEnv(mode, process.cwd());
  
  return {
    plugins: [react()],
    base: mode === 'production' ? env.VITE_BASE_PATH : '/',
  };
})
