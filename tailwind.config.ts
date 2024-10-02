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
      },
      cursor: {
        default: "url('/cursor/default.svg'), default",
        pointer: "url('/cursor/pointer.svg'), pointer",
        text: "url('/cursor/text.svg'), text",
      }
    },
  },
  plugins: [],
};
export default config;
