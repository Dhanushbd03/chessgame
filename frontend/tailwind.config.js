/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"Dark-classic-blue": "#0A1828",
				turquoise: "#178582",
				gold: "#BFA181",
			},
		},
	},
	plugins: [],
};
