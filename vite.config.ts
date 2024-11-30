import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  logLevel: 'warn',
  build: {
    rollupOptions: {
        output: {
            manualChunks: {
                phaser: ['phaser']
            }
        }
    },
    minify: 'terser',
    terserOptions: {
        compress: {
            passes: 2
        },
        mangle: true,
        format: {
            comments: false
        }
    }
}
})
