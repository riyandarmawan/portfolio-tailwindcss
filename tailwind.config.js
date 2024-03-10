/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        container: {
            center: true,
            padding: "16px",
        },
        extend: {
            colors: {
                primary: "#0ea5e9",
                secondary: "#64748b",
            },
            screens: {
                "2xl": "1320px",
            },
        },
    },
    plugins: [],
};
