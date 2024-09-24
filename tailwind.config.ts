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
        da_red: "#8B032C",
        da_gold: "#FFFFFF", // misnmamed after changing from gold titles to white titles
        da_dark: "#18204E",
        da_lighter: "#8a63d2",
        da_lightest: "#d1a7f5",
        da_lightest_hover: "#e5bafc",
      },

      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      letterSpacing: {
        tighter: "-0.02em",
      },
    },
  },
  plugins: [],
};
export default config;
