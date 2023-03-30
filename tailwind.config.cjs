/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{tsx,ts}',
    './index.html',
    './README.me'
  ],
  theme: {
    extend: {
      colors:{
        
        'green-300' : '#00B37E',
        'green-500' :  '#00875F',
        'green-700' :  '#015F43',

        'red-300' : '#F75A68',
        'red-500' : '#AB222E',
        'red-700' : '#7A1921',

        'gray-900' : '#121214',
        'gray-800' : '#202024',
        'gray-700' : '#29292E',
        'gray-600' : '#323238',
        'gray-500' : '#7C7C8A',
        'gray-300' : '#C4C4CC',
        'gray-100' : '#E1E1E6',
      },
      fontFamily:{
        'Roboto' : ['Roboto' , 'sans-serif']
      }
    },
  },
  plugins: [],
}
