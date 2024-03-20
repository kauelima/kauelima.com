import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-primary',
    'bg-projectBlue',
    'bg-projectGreen',
    'bg-projectPink',
    'bg-projectPurple',
    'bg-projectOrange',
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
        projectBlue: '#B6E3F4',
        projectGreen: '#C0EADE',
        projectPink: '#FFD5DC',
        projectPurple: '#D1D4F9',
        projectOrange: '#FFDFBF',
        onProject: '#000000',
      },
  },
  },
  plugins: [],
};
export default config;
