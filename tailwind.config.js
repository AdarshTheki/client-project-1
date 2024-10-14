/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#29759f',
                'primary-light': '#61c6ff',
                'black-dark': '#212529',
                'gray-dark': '#232d30',
                'gray-light': '#474749',
            },
        },
    },
    plugins: [],
};
