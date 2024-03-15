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
        primary: '#EFBC49',
        onPrimary: '#000000',
        surface: '#FFFFFF',
        onSurface: '#000000',
        surfaceAlt: '#FAE6B8',
        onSurfaceAlt: '#87600A',
        background: '#fafafa',
        onBackground: '#000000',
      },
  },
  },
  plugins: [],
};
export default config;
