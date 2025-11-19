
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',     
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    flowbite.content(),
  ],
  plugins: [
    // ...
    flowbite.plugin(),
    require('tailwind-scrollbar'),
    require('@tailwindcss/line-clamp'),
  ],
};
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     './index.html',
//     './src/**/*.{js,ts,jsx,tsx}',
//     'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('flowbite/plugin'),
  
//   ],
// };


// const flowbite = require("flowbite-react/tailwind");
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// module.exports = {
//   content: [
//     // ...
//     flowbite.content(),
//   ],
//   plugins: [
//     // ...
//     flowbite.plugin(),
//   ],
// };

//////////////////////////////Chatgpt////////////////////////////////////////////


// const withMT = require("@material-tailwind/react/utils/withMT"); // Facultatif si vous utilisez Material Tailwind avec Flowbite

// module.exports = withMT({
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // Vos fichiers React
//     "./node_modules/flowbite-react/**/*.js", // Les composants Flowbite React
//     "./node_modules/flowbite/**/*.js", // Les utilitaires de Flowbite
//   ],
//   theme: {
//     extend: {
//       colors: {
//         // Exemple d'extension des couleurs personnalisées
//         primary: {
//           light: "#4caf50",
//           DEFAULT: "#388e3c",
//           dark: "#1b5e20",
//         },
//       },
//       fontFamily: {
//         // Ajout de polices personnalisées si nécessaire
//         sans: ["Inter", "sans-serif"],
//       },
//     },
//   },
//   plugins: [
//     require("flowbite/plugin"), // Intégration des plugins Flowbite
//   ],
// });








 
