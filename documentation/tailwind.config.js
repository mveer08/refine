const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
    important: "#__docusaurus",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ["Montserrat", ...defaultTheme.fontFamily.serif],
            },
            boxShadow: {
                tile: "6px 8px 16px 0 rgba(42, 42, 66, 0.4)",
                integrationTile: "3px 4px 8px 0 rgba(42, 42, 66, 0.25)",
                tagTile: "3px -2px 8px 0 rgba(42, 42, 66, 0.25)",
                startTiles: "4px 8px 12px 0 rgba(0, 0, 0, 0.2)",
            },
            screens: {
                "2xl": "1280px",
                short: { raw: "(max-height: 650px) and (min-width: 1024px)" },
            },
        },
    },
    plugins: [
        require("@tailwindcss/line-clamp"),
        plugin(function ({ addVariant }) {
            addVariant("is-firefox", "@supports (-moz-appearance:none)");
        }),
    ],
    corePlugins: {
        preflight: false,
    },
};
