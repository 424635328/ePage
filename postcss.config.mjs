// postcss.config.mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // 它会自动查找并使用 tailwind.config.mjs
    autoprefixer: {},
  },
};
export default config;