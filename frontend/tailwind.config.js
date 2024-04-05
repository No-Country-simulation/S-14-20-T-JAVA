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

      },

    },
    keyframes: {
      'bounce-twice-and-fade': {
        '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
        '50%': { transform: 'none', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        '75%': { opacity: 1 },
        '100%': { opacity: 0 }
      }
    },
    animation: {
      'bounce-twice-and-fade': 'bounce-twice-and-fade 3.5s linear'
    },
    clipPath: {
      'custom-shape': 'inset(0 0 0 0 round 0% 20% 0% 0%)',
    },
    utilities: {
      'custom-shape': {
        clipPath: 'inset(0 0 0 0 round 0% 20% 0% 0%)',
      },
    }
    
  },
  plugins: [],
}

