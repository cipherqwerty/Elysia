/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{jsx,tsx}'],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
            },
        },
        extend: {},
    },
    plugins: [],
};
