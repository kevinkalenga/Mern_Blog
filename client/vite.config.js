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

/////////////////////////////////////////////////////////////////////
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  server: {
    host: 'localhost',             // ✅ Important pour Firebase OAuth
    fs: { strict: true, allow: ['.'] },
    cors: {
      origin: 'http://localhost:5173', // ✅ doit correspondre à Firebase Authorized domain
      credentials: true
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false
      }
    }
  },
  plugins: [react()]
})


//  import { defineConfig } from 'vite'
//  import react from '@vitejs/plugin-react-swc'

// export default defineConfig({
//   server: {
//     host: 'localhost',  // <-- changer ici
//     fs: {
//       strict: true,
//       allow: ['.']
//     },
//     cors: {
//       origin: 'http://localhost:5173'  // <-- changer ici
//     },
//     proxy: {
//       '/api': {
//         target: 'http://localhost:3000',
//         secure: false
//       }
//     }
//   },
//   plugins: [react()]
// })

