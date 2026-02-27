/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: ["class", "class"],
  theme: {
  	extend: {
  		animation: {
  			spotlight: 'spotlight 2s ease .75s 1 forwards',
  			meteor: 'meteor 5s linear infinite',
  			aurora: 'aurora 12s ease-in-out infinite',
  			'border-rotate': 'border-rotate 4s linear infinite',
  			'glow-pulse': 'glow-pulse 2.5s ease-in-out infinite',
  			shimmer: 'shimmer 2.5s linear infinite',
  			'float': 'float 6s ease-in-out infinite',
  			'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
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
  			},
  			aurora: {
  				'0%, 100%': {
  					backgroundPosition: '0% 50%'
  				},
  				'50%': {
  					backgroundPosition: '100% 50%'
  				}
  			},
  			'border-rotate': {
  				'0%': { '--border-angle': '0deg' },
  				'100%': { '--border-angle': '360deg' }
  			},
  			'glow-pulse': {
  				'0%, 100%': {
  					textShadow: '0 0 10px rgba(255,107,0,0.5), 0 0 20px rgba(255,107,0,0.3), 0 0 40px rgba(255,107,0,0.1)'
  				},
  				'50%': {
  					textShadow: '0 0 20px rgba(255,107,0,0.8), 0 0 40px rgba(255,107,0,0.5), 0 0 60px rgba(255,107,0,0.3)'
  				}
  			},
  			shimmer: {
  				'0%': { backgroundPosition: '-200% 0' },
  				'100%': { backgroundPosition: '200% 0' }
  			},
  			float: {
  				'0%, 100%': { transform: 'translateY(0px)' },
  				'50%': { transform: 'translateY(-10px)' }
  			},
  			'pulse-glow': {
  				'0%, 100%': { boxShadow: '0 0 15px rgba(255,107,0,0.15)' },
  				'50%': { boxShadow: '0 0 30px rgba(255,107,0,0.3), 0 0 60px rgba(255,107,0,0.1)' }
  			},
  		},
  		transitionTimingFunction: {
  			'crisp': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  		},
  	}
  },
  plugins: [],
};
