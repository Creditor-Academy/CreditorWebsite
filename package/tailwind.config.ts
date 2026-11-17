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
        /* Brand blues */
        "blue-primary": "var(--blue-primary)",
        "blue-hover": "var(--blue-hover)",

        /* Deep royal navy */
        "navy-heading": "var(--navy-heading)",
        "navy-mem-1": "var(--navy-mem-1)",
        "navy-mem-2": "var(--navy-mem-2)",
        "navy-mem-3": "var(--navy-mem-3)",
        "cyan-glow": "var(--cyan-glow)",

        /* Surfaces */
        "bg-white": "var(--bg-white)",
        "bg-light": "var(--bg-light)",
        "border-token": "var(--border)",

        /* Text */
        "heading-dark": "var(--heading-dark)",
        "text-body": "var(--text-body)",
        "text-muted": "var(--text-muted)",
        "text-on-dark": "var(--text-on-dark)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Manrope", "sans-serif"],
      },
      maxWidth: {
        container: "1120px",
      },
    },
  },
  plugins: [],
};

export default config;
