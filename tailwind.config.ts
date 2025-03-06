import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: ["dark"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		extend: {
			
			// background: #8202DC;
			// background: radial - gradient(at center, #8202DC, #020103);
			backgroundImage: {
				'primary-gradient': 'linear-gradient(to right, rgba(113,48,214,1.0) 0%, rgba(177,136,240,1.0) 100%)',
				'hero-gradient':
					'radial-gradient(ellipse 55% 56% at center 95%, rgba(177,136,240,1.0), rgba(113, 48, 214, 0.9) 30%, rgba(24, 59, 241, 0.3) 60%, #070313 100%), radial-gradient(ellipse 85% 60% at center 95%, rgba(76, 29, 149, 0.7) 0%, rgba(71, 6, 209, 0.7) 30%, rgba(7, 3, 19, 1.0) 100%)',
				'hero-gradient-mobile': `
				  radial-gradient(113.28% 100% at 50% 100%, rgba(24, 59, 241, 0.3) 0%, #070313 68.79%), 
				  linear-gradient(180deg, #000 0%, #5B21B6 100%, #7C3AED 100%, #A78BFA 100%)
				`,
				'real-world-gradient': `
                  radial-gradient(113.28% 100% at 50% 0%, #000 0%, rgba(0, 0, 0, 0.00) 69.79%), 
                  linear-gradient(180deg, #000 0%, #5B21B6 100%, #7C3AED 100%, #A78BFA 100%)
                `,
				'industry-gradient': `
				  radial-gradient(113.28% 100% at 50% 0%, #000 0%, rgba(0, 0, 0, 0.00) 69.79%), 
				  linear-gradient(180deg, #000 20%, #4C1D95 100%)  
				`,

				'footer-gradient':
					'linear-gradient(-363deg, #4C1D95 -51.52%, #5B21B6 -5.15%, #010101 100%)',
				'footer-join-more-gradient':
					'linear-gradient(-363deg, #4C1D95 -51.52%, #5B21B6 -5.15%, #010101 100%)',
				'enterpricePlan-gradient-mobile': `linear-gradient(343deg, #4C1D95 -39.19%, #5B21B6 11.56%, #212121 92.34%)`,
				'enterpricePlan-gradient-desktop': `linear-gradient(98deg, #200B46 0%, #1A0939 100%)`,
			},
			borderColor: {
				border: "hsl(var(--border) / <alpha-value>)",
			},
			colors: {
				primary: "#7C3AED",
				black: "#1A1A1A",
				gray: {
					50: '#f1f5f9',
					100: '#f3f4f6',
					200: '#e2e8f0',
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b',
					600: '#475569',
					700: '#334155',
					800: '#1e293b',
					900: '#111827',
				},
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				// primary: {
				// 	DEFAULT: "hsl(var(--primary) / <alpha-value>)",
				// 	foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
				// },
				secondary: {
					DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
					foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)"
				},
				sidebar: {
					DEFAULT: "hsl(var(--sidebar-background))",
					foreground: "hsl(var(--sidebar-foreground))",
					primary: "hsl(var(--sidebar-primary))",
					"primary-foreground": "hsl(var(--sidebar-primary-foreground))",
					accent: "hsl(var(--sidebar-accent))",
					"accent-foreground": "hsl(var(--sidebar-accent-foreground))",
					border: "hsl(var(--sidebar-border))",
					ring: "hsl(var(--sidebar-ring))",
				},
			},
			borderRadius: {
				xl: "calc(var(--radius) + 4px)",
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			fontFamily: {
				geist: ['"Geist Sans"', ...fontFamily.sans],
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--bits-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--bits-accordion-content-height)" },
					to: { height: "0" },
				},
				"caret-blink": {
					"0%,70%,100%": { opacity: "1" },
					"20%,50%": { opacity: "0" },
				},
				"shine": {
					from: { backgroundPosition: '0 0' },
					to: { backgroundPosition: '-200% 0' },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"caret-blink": "caret-blink 1.25s ease-out infinite",
				"shine": "shine 2s linear infinite",
			},
		},
	},
	plugins: [tailwindcssAnimate],
};

export default config;
