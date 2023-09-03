/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            width:{
                'sculpture': '80px',
                'photograpy': '105px',
                'dramatic': '135px',
                'interview': '300px',
                'other': '190px',
            }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light","black"],
    },
}

