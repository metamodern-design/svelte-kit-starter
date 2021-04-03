module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.svelte',
    ],
    options: {
      whitelistPatterns: [/^s-/],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
