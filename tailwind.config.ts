import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        50: '#cda9f2',
        100: '#b27aea',
        200: '#9a52e2',
        300: '#8b39df',
        400: '#842bde',
        500: '#7E23D9',
        600: '#6519b0',
        700: '#58129b',
        800: '#4c0f84',
      },
      secondary: {
        50: '#DDDDDD',
        100: '#CCCCCC',
        150: '#BBBBBB',
        200: '#AAAAAA',
        250: '#999999',
        300: '#888888',
        350: '#777777',
        400: '#555555',
        450: '#444444',
        500: '#333333',
        550: '#222222',
        600: '#202020',
        650: '#1a1a1a',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
