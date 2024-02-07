/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['**/*.html'],
    theme: {
        extend: {
            fontFamily: {
                syne: 'Syne',
                poppins: 'Poppins',
            },
            backgroundImage: {
                main: "url('/public/image/background.png')",
                grad: "url('/public/image/gradient.png')",
            },
            animation: {
                'infinite-scroll': 'infinite-scroll 120s linear infinite',
                'infinite-scroll-8s': 'infinite-scroll 8s linear infinite',
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
