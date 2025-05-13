
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom premium colors
				babypink: {
					50: '#FFF0F2',
					100: '#FFDEE2',
					200: '#FFBDC5',
					300: '#FF97A6',
					400: '#FF7A8F',
					500: '#FF5C78',
					600: '#E74162',
					700: '#C02C4E',
					800: '#9A1F3F',
					900: '#7B1836',
				},
				babyblue: {
					50: '#EDF6FF',
					100: '#D3E4FD',
					200: '#A7C9FB',
					300: '#7DAEF8',
					400: '#5C98F6',
					500: '#3382F4',
					600: '#1E62DC',
					700: '#1147B8',
					800: '#0A3494',
					900: '#05287A',
				},
				cream: {
					50: '#FFFEFA',
					100: '#FFF8ED',
					200: '#FFF1DB',
					300: '#FFE8C2',
					400: '#FFDFA9',
					500: '#FFD690',
					600: '#E6B761',
					700: '#BF8C32',
					800: '#8C6014',
					900: '#6A4700',
				},
				gold: {
					50: '#FFFBEA',
					100: '#FFF6D5',
					200: '#FFEAAA',
					300: '#FFDA80',
					400: '#FFC855',
					500: '#FFB02A',
					600: '#DB8D00',
					700: '#B36D00',
					800: '#8C5400',
					900: '#663C00',
				},
				lavender: {
					50: '#F6F3FF',
					100: '#EDE9FE',
					200: '#DDD6FE',
					300: '#C4B5FD',
					400: '#A78BFA',
					500: '#8B5CF6',
					600: '#7C3AED',
					700: '#6D28D9',
					800: '#5B21B6',
					900: '#4C1D95',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Nunito', 'sans-serif'],
				display: ['Cormorant Garamond', 'Playfair Display', 'serif'],
				script: ['Dancing Script', 'cursive'],
				elegant: ['Cormorant Garamond', 'serif'],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'slide-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'pulse-soft': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'50%': { transform: 'translateY(-10px) rotate(1deg)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% center' },
					'100%': { backgroundPosition: '200% center' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-out': 'fade-out 0.6s ease-out',
				'slide-in': 'slide-in 0.8s ease-out',
				'pulse-soft': 'pulse-soft 3s infinite ease-in-out',
				'float': 'float 6s infinite ease-in-out',
				'shimmer': 'shimmer 2s infinite linear'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-elegant': 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)',
				'gradient-soft-pink': 'linear-gradient(180deg, rgb(254,100,121) 0%, rgb(251,221,186) 100%)',
				'gradient-shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
			},
			boxShadow: {
				'elegant': '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
				'elegant-lg': '0 20px 40px -5px rgba(0, 0, 0, 0.05)',
				'inner-elegant': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.03)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
