/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#10B981',
          700: '#059669'
        },
        accent: {
          500: '#ef4444'
        }
      },
      boxShadow: {
        glow: '0 0 40px rgba(59, 130, 246, 0.18)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(59,130,246,0.25), transparent 35%), radial-gradient(circle at bottom right, rgba(255,255,255,0.08), transparent 22%)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Courier New']
      },
    },
  },
  plugins: [],
};
