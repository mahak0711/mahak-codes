/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: ["class", "class"],
  theme: {
  	extend: {
  		animation: {
  			spotlight: 'spotlight 2s ease .75s 1 forwards',
  			meteor: 'meteor 5s linear infinite'
  		},
  		keyframes: {
  			spotlight: {
  				'0%': {
  					opacity: '0',
  					transform: 'translate(-72%, -62%) scale(0.5)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translate(-50%,-40%) scale(1)'
  				}
  			},
  			meteor: {
  				'0%': {
  					transform: 'rotate(215deg) translateX(0)',
  					opacity: '1'
  				},
  				'70%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'rotate(215deg) translateX(-500px)',
  					opacity: '0'
  				}
  			}
  		}
  	}
  },
  plugins: [],
};