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
        white: '#FCFCFC',
        purple: '#7F3DFF',
        lightGrey: '#F1F1FA',
        grey: '#676767',
        black25: '#252525',
        yellow: '#F5CB58',
        yellow2:'#F3E9B5',
        lightPink:'#FFD8C7',
        orange:'#E95322',
        orange2:'#FFDECF',
        almostWhite:"#F8F8F8",
        almostBlack:'#391713',


        silk:'#fefae0',
        darkGreen:'#283618',
        mossGreen:'#606c38',
        earthYellow:'#DDA15E',
        tigerEye:'#bc6c25',
        sunset:'#eece9f'
      },
    },
  },
  plugins: [],
};
export default config;
