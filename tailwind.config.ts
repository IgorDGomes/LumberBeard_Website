import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "brown-600": "#3E2723",
        "brown-300": "#4B382A",
        "cream-600": "#B97D5E",
        "cream-300": "#E5D5C5",
        "cream-100": "#FFF4E6",
        "dark": "#252524",
        "text-bg": "#898989"
      },
    },
  },
  plugins: [],
};
export default config;
