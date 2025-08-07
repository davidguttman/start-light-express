import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  root: '.',
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
    // Configure HMR to work with proxy setup
    hmr: {
      clientPort: 5173,
      port: 5173
    },
    // Express will proxy to this Vite dev server
    // No proxy config needed here - Express handles the routing
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