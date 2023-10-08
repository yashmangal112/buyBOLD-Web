import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
    extend: {
        fontFamily: {
            montserrat: ['"Montserrat"', ..._fontFamily.sans],
            inter: ['"Inter"', ..._fontFamily.sans],
            poppins: ['"Poppins"', ..._fontFamily.sans]
        }
    },
};
export const plugins = [];