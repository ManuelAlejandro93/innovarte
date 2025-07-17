/** @type {import('tailwindcss').Config} */

import * as appColors from './src/UI';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        app: {
          // Orange shades
          'orange-50': appColors.orange_50,
          'orange-70': appColors.orange_70,
          'orange-75': appColors.orange_75,
          'orange-80': appColors.orange_80,
          'orange-90': appColors.orange_90,
          'orange-95': appColors.orange_95,
          'orange-97': appColors.orange_97,
          'orange-99': appColors.orange_99,

          // White shades
          'white-90': appColors.white_90,
          'white-95': appColors.white_95,
          'white-97': appColors.white_97,
          'white-99': appColors.white_99,

          // Grey shades
          'grey-10': appColors.grey_10,
          'grey-15': appColors.grey_15,
          'grey-20': appColors.grey_20,
          'grey-30': appColors.grey_30,
          'grey-35': appColors.grey_35,
          'grey-40': appColors.grey_40,
          'grey-60': appColors.grey_60,
          'grey-70': appColors.grey_70
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))'
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
        }
      }
    }
  },
  plugins: [require('tailwindcss-animate'), require('tailwindcss-animated')]
};
