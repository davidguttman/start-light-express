import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  root: '.',
  define: {
    // Expose environment variables to the client
    __FORCE_AUTH_EMAIL__: JSON.stringify(process.env.FORCE_AUTH_EMAIL || null),
    __AUTHENTIC_SERVER__: JSON.stringify(process.env.AUTHENTIC_SERVER || '')
  },
  resolve: {
    alias: {
      '@client': '/client'
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'public/index.html'
    },
    // Don't empty dist since it contains index.html
    emptyOutDir: false
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  server: {
    port: 5173,
    host: 'localhost',
    hmr: false
  },
  // Enable pre-bundling for CommonJS modules
  optimizeDeps: {
    include: [
      'http-hash',
      'authentic-client', 
      'authentic-ui',
      'insert-css',
      'nanohtml',
      'nanomorph',
      'querystring',
      'cuid',
      'wildemitter'
    ]
  },
  // Configure how to handle different file types
  esbuild: {
    format: 'esm'
  }
})