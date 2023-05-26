/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        h11ydarkblue: '#012F42',
        h11ylightblue: '#176B8F',
        h11ypaleyellow: '#8F8917',
        h11yred: "#8F081E",
        h11ywhite: "#F4E5C4",
        h11ybrown: "#89462C",
        h11ypeach: "#D99578",
        h11yblack: "#0A1013",
      }
    },
  },
  plugins: [],
  content: ['./src/**/*.{html,js,svelte,ts}'],
}
