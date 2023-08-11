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
                'photograpy': '205px',
                'dramatic': '146px',
                'other': '70px',
            }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light","black"],
    },
}

