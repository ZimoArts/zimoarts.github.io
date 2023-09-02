/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            width:{
                'sculpture': '102px',
                'photograpy': '190px',
                'dramatic': '170px',
                'other': '220px',
            }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light","black"],
    },
}

