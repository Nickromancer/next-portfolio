import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Color pallet from Color Hunt: https://colorhunt.co/palette/131842e68369ecceaefbf6e2  */
        black: "#131842",
        orange: "#E68369",
        beige: "#ECCEAE",
        white: "#FBF6E2",
      },
      transitionProperty: {
        height: "height",
      },
      dropShadow: {
        profile: "16px 16px 2px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
