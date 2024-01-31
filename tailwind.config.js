/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['**/*.html'],
    theme: {
        extend: {
            fontFamily: {
                syne: 'Syne',
            },
            backgroundImage: {
                main: "url('/public/image/background.png')",
                grad: "url('/public/image/gradient.png')",
            },
            animation: {
                'infinite-scroll': 'infinite-scroll 25s linear infinite',
            },
            keyframes: {
                'infinite-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    plugins: [],
}
