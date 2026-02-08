module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        orange: {
          50: '#fff7ed',
          100: '#fed7aa',
          200: '#fdba74',
          300: '#fb923c',
          400: '#f97316',
          500: '#ff6b5b',
          600: '#ff6b5b',
          700: '#ea580c',
          800: '#c2410c',
          900: '#7c2d12',
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
      },
      backgroundImage: {
        'gradient-orange': 'linear-gradient(135deg, #ff6b5b 0%, #ffa500 100%)',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, 0.08)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
