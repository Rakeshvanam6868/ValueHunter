/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    extend: {
      animation: {
        shimmer: 'shimmer 2s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      colors: {
        // ✅ Your ValueHunter brand colors
        primary: {
          DEFAULT: '#359EFF', // light mode
          foreground: 'hsl(var(--primary-foreground))',
        },
        background: {
          DEFAULT: '#f5f7f8', // light
          dark: '#0f1923',
        },
        foreground: {
          DEFAULT: '#18181B', // light text
          dark: '#FAFAFA',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#18181B',
          dark: '#27272A',
          'foreground-dark': '#FAFAFA',
        },
        // Keep other semantic colors if needed
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        muted: {
          DEFAULT: '#71717A',
          dark: '#A1A1AA',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
    plugins: [require('tailwindcss-animate')],
};
