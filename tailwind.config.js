/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#010102',
        surface: {
          1: '#08090d',
          2: '#121318',
          3: '#1a1b22',
          4: '#23252a',
        },
        hairline: {
          DEFAULT: '#23252a',
          strong: '#32353d',
          tertiary: '#1c1d22',
        },
        primary: {
          DEFAULT: '#5e6ad2',
          hover: '#828fff',
          focus: '#5e69d1',
        },
        brand: {
          secure: '#7a7fad',
        },
        semantic: {
          success: '#27a644',
          overlay: 'rgba(0, 0, 0, 0.8)',
        },
        ink: {
          DEFAULT: '#f7f8f8',
          muted: '#d0d6e0',
          subtle: '#8a8f98',
          tertiary: '#62666d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', '-apple-system', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['SF Pro Display', 'Inter', '-apple-system', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Menlo', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        'xs': '4px',
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        'xxl': '24px',
      },
      letterSpacing: {
        'display-xl': '-3px',
        'display-lg': '-1.8px',
        'display-md': '-1.0px',
        'headline': '-0.6px',
        'card-title': '-0.4px',
        'subhead': '-0.2px',
        'body-lg': '-0.1px',
        'body': '-0.05px',
        'eyebrow': '0.4px',
      },
      boxShadow: {
        'surface-lift': '0 1px 2px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
        'primary-focus': '0 0 0 2px rgba(94, 105, 209, 0.5)',
      }
    },
  },
  plugins: [],
}

