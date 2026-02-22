/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#f9f506",
                "background-light": "#fcfcf8",
                "background-dark": "#1c1c0d",
                "accent-dark": "#1c1c0d",
                "accent-cream": "#fffdf0",
            },
            fontFamily: {
                "display": ["Plus Jakarta Sans", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "1rem",
                "lg": "2rem",
                "xl": "3rem",
                "full": "9999px"
            },
            boxShadow: {
                "chunky": "8px 8px 0px 0px #1c1c0d",
                "chunky-sm": "4px 4px 0px 0px #1c1c0d",
            }
        },
    },
    plugins: [],
}
