
// tailwind.config.js
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                dynamo: ['Dynamo', 'sans-serif'],
                material: ['"Material Symbols Outlined"'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
};
