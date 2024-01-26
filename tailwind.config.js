/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily:{
        "young":["Young Serif", "sans-serif"],
        "outfit":['Outfit Variable', "sans-serif"]
      },
    },
  },
  plugins: [],
}

