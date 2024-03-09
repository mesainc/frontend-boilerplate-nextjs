import type { Config } from 'tailwindcss'
import tailwindAnimete from 'tailwindcss-animate'
import tailwindScrollbar from 'tailwind-scrollbar'
import tailwindForms from '@tailwindcss/forms'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [tailwindAnimete, tailwindScrollbar, tailwindForms],
}
export default config
