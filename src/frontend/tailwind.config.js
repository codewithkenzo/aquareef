/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monopoly: ['var(--font-monopoly)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
        sans: ['var(--font-monopoly)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // shadcn/ui colors (keep for compatibility)
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'rgb(var(--color-persian-green))',
          foreground: 'rgb(var(--color-snow))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        
        // AQUAREEF BRAND COLORS - SINGLE SOURCE OF TRUTH
        // Main brand colors (used throughout the app)
        night: {
          DEFAULT: '#131515', // Main dark color
          50: '#f6f6f6',
          100: '#e7e7e7', 
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#131515', // Brand night color
        },
        jet: {
          DEFAULT: '#2b2c28', // Secondary dark color
          50: '#f6f6f5',
          100: '#e9e9e7',
          200: '#d4d4d0',
          300: '#b8b8b2',
          400: '#999990',
          500: '#7f7f76',
          600: '#696963',
          700: '#565652',
          800: '#484846',
          900: '#3e3e3c',
          950: '#2b2c28', // Brand jet color
        },
        persian_green: {
          DEFAULT: '#339989', // Primary brand color
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#339989', // Brand persian green
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        tiffany_blue: {
          DEFAULT: '#7de2d1', // Secondary brand color
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#7de2d1', // Brand tiffany blue
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        snow: {
          DEFAULT: '#fffafb', // Light background color
          50: '#fffafb', // Brand snow color
          100: '#fef7f7',
          200: '#fee2e2',
          300: '#fecaca',
          400: '#fca5a5',
          500: '#f87171',
          600: '#ef4444',
          700: '#dc2626',
          800: '#b91c1c',
          900: '#991b1b',
          950: '#7f1d1d',
        },
        
        // Additional utility colors for gradients and effects
        brand: {
          // Main brand colors (aliases for easier use)
          primary: '#339989',    // persian_green
          secondary: '#7de2d1',  // tiffany_blue
          dark: '#131515',       // night
          darker: '#2b2c28',     // jet
          light: '#fffafb',      // snow
          
          // Gradient combinations
          'primary-hover': '#2d8a7a',   // Darker persian green for hover
          'secondary-hover': '#6dd9c6', // Darker tiffany blue for hover
          
          // Opacity variants (for backgrounds and overlays)
          'primary-10': '#33998919',    // 10% opacity
          'primary-15': '#33998926',    // 15% opacity
          'primary-20': '#33998933',    // 20% opacity
          'primary-25': '#33998940',    // 25% opacity
          'primary-30': '#3399894d',    // 30% opacity
          'primary-40': '#33998966',    // 40% opacity
          'primary-80': '#339989cc',    // 80% opacity
          
          'secondary-10': '#7de2d119',  // 10% opacity
          'secondary-15': '#7de2d126',  // 15% opacity
          'secondary-20': '#7de2d133',  // 20% opacity
          'secondary-30': '#7de2d14d',  // 30% opacity
          'secondary-40': '#7de2d166',  // 40% opacity
          'secondary-80': '#7de2d1cc',  // 80% opacity
          
          'light-40': '#fffafb66',      // 40% opacity
          'light-60': '#fffafb99',      // 60% opacity
          'light-70': '#fffafbb3',      // 70% opacity
          'light-80': '#fffafbcc',      // 80% opacity
          'light-85': '#fffafbd9',      // 85% opacity
          'light-95': '#fffafbf2',      // 95% opacity
          
          'white-08': '#ffffff14',      // 8% opacity
          'white-10': '#ffffff1a',      // 10% opacity
          'white-15': '#ffffff26',      // 15% opacity
          'white-20': '#ffffff33',      // 20% opacity
          'white-30': '#ffffff4d',      // 30% opacity
          'white-40': '#ffffff66',      // 40% opacity
          'white-60': '#ffffff99',      // 60% opacity
          
          'black-10': '#0000001a',      // 10% opacity
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        
        // Brand gradient combinations
        'brand-primary': 'linear-gradient(135deg, #339989 0%, #7de2d1 100%)',
        'brand-primary-reverse': 'linear-gradient(135deg, #7de2d1 0%, #339989 100%)',
        'brand-primary-hover': 'linear-gradient(135deg, #2d8a7a 0%, #6dd9c6 100%)',
        'brand-complex': 'linear-gradient(135deg, #339989 0%, #7de2d1 50%, #339989 100%)',
        
        // Glass backgrounds
        'glass-primary': 'radial-gradient(circle at 25% 25%, rgba(51, 153, 137, 0.08) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(125, 226, 209, 0.06) 0%, transparent 50%)',
        'glass-hero': 'radial-gradient(circle at 25% 25%, rgba(125, 226, 209, 0.1) 0%, transparent 25%), radial-gradient(circle at 75% 75%, rgba(51, 153, 137, 0.1) 0%, transparent 25%), radial-gradient(circle at 50% 10%, rgba(125, 226, 209, 0.05) 0%, transparent 30%)',
        'glass-testimonials': 'radial-gradient(circle at 30% 20%, rgba(125, 226, 209, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(51, 153, 137, 0.1) 0%, transparent 50%)',
        'glass-pricing': 'radial-gradient(circle at 20% 30%, rgba(125, 226, 209, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(51, 153, 137, 0.1) 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
} 