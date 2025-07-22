// tailwind.config.mjs

/** @type {import('tailwindcss').Config} */
const config = {
  // FIX: 将策略改为 'class'
  // 这意味着当 html 标签有 'dark' 类时，Tailwind 会应用深色主题的样式。
  darkMode: 'class', 
  
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        neon: ['var(--font-neon)'],
      },
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
          foreground: 'rgb(var(--primary-foreground) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
};

export default config;
