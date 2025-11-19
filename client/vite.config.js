// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vite.dev/config/
// export default defineConfig({
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:3000',
//         secure: false
//       },
//     },
//   },
//   plugins: [react()],
 
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  server: {
    // 1. Do NOT expose Vite dev server to the network.
    // Prevents remote exploitation of Vite fs bypass vulnerabilities.
    host: '127.0.0.1',

    // 2. Enforce fs sandboxing (several Vite advisories were about bypassing this).
    fs: {
      strict: true,
      // Allow only your project root (adjust if you have a monorepo)
      allow: ['.']
    },

    // 3. Restrict CORS to prevent other websites from reading your dev-server responses.
    cors: {
      origin: 'http://127.0.0.1:5173'
    },

    // 4. Your proxy config remains unchanged
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false
      }
    }
  },

  plugins: [react()]
})

