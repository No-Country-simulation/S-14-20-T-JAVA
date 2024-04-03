/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        //primarios
        'backgroud':'F5F5F5',
        'primary':'#851291',
        'text':'#080808',
        //secundarios
        'secondary':'#65006F',
        'white':'#FFFFFF',
        'text-disabled':'#717171',
        // gradientes
        //TODO! ARMAR UNA CLASE PARA USAR SOLO UN CODIGO PARA GRADIENTE, por el momento agrego "codigo-v-start" - "codigo-v-end"
        'degraded-v-start':'#851291',
        'degraded-v-end':'#65006F',
        'degraded-h-start':'#851291',
        'degraded-h-end':'#65006F',
        //colores de alerta
        'error':'#BD2734',
        'error-light':'#D6525D',
        'alert':'#DCBD4C',
        'check':'#79B465'

      }
    },
  },
  plugins: [],
}

