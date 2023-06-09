/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.tsx",
        "./src/components/**/**/*.tsx",],
    theme: {
        extend: {
            backgroundImage: {
                'background-desktop': "url('/img/background-desktop.png')",
                'background-mobile': "url('/img/background-mobile.png')",
                'background-tablet': "url('/img/background-tablet.png')",
                'background': "url('/img/background.png')",
                'background-characters': "url('/img/background-characters.jpg')",
                'background-characters-mobile': "url('/img/background-characters-mobile.png')",
            },
            height: {
                '150': '58rem',
                '140': '45rem',
                '128': '32rem',
                '112': '28rem',

            },

            width: {
                '150': '58rem',
                '140': '45rem',
                '128': '32rem',
                '112': '28rem',

            },

            colors: {
                paleta: {
                    marrom: '#371B0F',
                },
            },
        },
    },
    plugins: [],
}
