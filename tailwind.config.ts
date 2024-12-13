import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        primary: "#b3c1e5",
        primaryDark: "#07122e"
      }
    },

  },
  darkMode: "selector",
  plugins: [typography, forms]
} satisfies Config;
