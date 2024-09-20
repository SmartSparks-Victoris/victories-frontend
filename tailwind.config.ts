import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        mainColor: 'var(--mainColor)',
        errorColor: 'var(--errorColor)',
        mainColorAlpha: 'var(--mainColorAlpha)',
        textColor: 'var(--textColor)',
        backgroundColor: 'var(--backgroundColor)',
        borderColor: 'var(--borderColor)',
        placeHolderColor: 'var(--placeHolderColor)',
        listOptionHoverColor: 'var(--listOptionHoverColor)',
        textWhite: 'var(--textWhite)',
        backgroundOpacity: 'var(--backgroundOpacity)',
        openStroke: 'var(--openStroke)',
        openColor: 'var(--openColor)',
        completedStroke: 'var(--completedStroke)',
        completedColor: 'var(--completedColor)',
        inProgressStroke: 'var(--inProgressStroke)',
        inProgressColor: 'var(--inProgressColor)',
        urgentStroke: 'var(--urgentStroke)',
      },
      boxShadow: {
        custom: '0 4px 8px 2px rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        poppins: ['Poppins', 'serif'],
        roboto: ['Roboto', 'serif'],
      },
      container: {
        center: true, // Optional: centers the container
        padding: {
          DEFAULT: '16px', // This applies 16px padding horizontally by default
          sm: '16px', // Small screens and above
          md: '16px', // Medium screens and above
          lg: '16px', // Large screens and above
          xl: '16px', // Extra large screens and above
        },
      },

      // spacing: {
      //   guestNav: '80px',
      // },
      // height: {
      //   guestNav: '80px',
      // },
    },
  },
  plugins: [require('@xpd/tailwind-3dtransforms')],
};
export default config;

