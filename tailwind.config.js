/** @type {import('tailwindcss').Config} */

import * as appColors from './src/UI/Colors';

import * as blues from './src/Innovarte_Brand/oficial_blues';

import * as yellows from './src/Innovarte_Brand/oficial_yellows';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Be Vietnam Pro', 'system-ui', '-apple-system', 'sans-serif']
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        app: {
          // Blue shades
          'blue-50': blues.blue_50,
          'blue-70': blues.blue_70,
          'blue-75': blues.blue_75,
          'blue-80': blues.blue_80,
          'blue-90': blues.blue_90,
          'blue-95': blues.blue_95,
          'blue-97': blues.blue_97,
          'blue-99': blues.blue_99,

          // Yellow shades
          'yellow-50': yellows.yellow_50,
          'yellow-70': yellows.yellow_70,
          'yellow-75': yellows.yellow_75,
          'yellow-80': yellows.yellow_80,
          'yellow-90': yellows.yellow_90,
          'yellow-95': yellows.yellow_95,
          'yellow-97': yellows.yellow_97,
          'yellow-99': yellows.yellow_99,

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
