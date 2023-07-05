/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'gruvbox-bg-dark-hard': '#1d2021',
			},
			filter: ['hover', 'focus'],
		},
	},
	plugins: [],
}
