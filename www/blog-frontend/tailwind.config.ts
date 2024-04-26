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
        skin: {
          bg: 'rgb(var(--color-bg))',
          content: 'rgb(var(--color-content))',

          // 菜单背景色
          'menu-bg': 'rgb(var(--color-menu-bg))',
          'menu-content': 'rgb(var(--color-menu-content))',
        }
      },
    }
  },
  plugins: [],
};
export default config;
