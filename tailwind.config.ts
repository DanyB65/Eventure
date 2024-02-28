import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { // Add your custom colors under extend
        magentaSky: '#CF71AF', // Adding the custom magenta color
        oldGold: '#CFB53B',
        softTaupe: '#F3ECE7',
              dustyRose: '#D8A3A9',
              'dustyRose-darker': '#C09299', // Darker shade
              // Define other colors and their darker versions similarly
        darkTaupe: '#BFAFA6',
        almostBlack: '#1a1a1a', // A very dark gray, close to black
        cream: '#FFFDD0' 
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
