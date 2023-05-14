/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                hgreen: "#94c12e",
                hblue: "#04bbf1",
                hdarkblue: "#1d4370",
                hbrightgray: "#beb9b4",
                hdgray: "#736e6e",
                htext: "#0A1828",
                htextalt: "#444445",
                hbg: "#F4F6F8",
            },
        },
    },
    plugins: [],
};
