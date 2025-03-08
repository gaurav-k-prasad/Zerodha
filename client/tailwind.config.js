/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
			colors: {
				blue: "#387ed1",
				darkgray: "#424242",
				lightgray: "#666"
			},
		},
	},
	plugins: [],
};

