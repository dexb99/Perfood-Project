const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        darkseagreen: "#99cda9",
        honeydew: { "300": "#f1fdf3", "200": "#e5f4e7", "100": "#d1e9d2" },
      },
      fontFamily: {
        inter: "Inter",
        itim: "Itim",
        sriracha: "Sriracha",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      mini: "15px",
      "13xl": "32px",
      xs: "12px",
      smi: "13px",
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
  corePlugins: {
    preflight: false
  }
};