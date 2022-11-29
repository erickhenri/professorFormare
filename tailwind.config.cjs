/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': 'suzanoDisplay',
        'unicase': 'suzanoUnicase',
        'zooja': 'Zooja',
        
      },
      backgroundImage: {
        'formareGradientLeft': "linear-gradient(to left, transparent, #00B74F), url(./alunos-formare.png)",
        'formareGradientBottom': "linear-gradient(to bottom, transparent, #00B74F), url(./alunos-formare.png)",

      },
      colors: {
        slate: {
          200: "#f9f9f9"
        },
        blue: {
          '600': "#0072D8",
        },
        green: {
          '600': "#00B74F",
        }
      }
    },
  },
  plugins: [],
}
