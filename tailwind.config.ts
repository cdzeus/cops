import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      "8xl": [
        "120px",
        {
          lineHeight: "120px",
          letterSpacing: "-6px",
          fontWeight: "500",
        }
      ],
      "7xl": [
        "72px",
        {
          lineHeight: "80px",
          letterSpacing: "-4.5px",
          fontWeight: "600",
        }
      ],
      "6xl": [
        "55px",
        {
          lineHeight: "60px",
          letterSpacing: "-2.5px",
          fontWeight: "500",
        }
      ], 
      "5xl": [
        "48px",
        {
          lineHeight: "54px",
          letterSpacing: "-1.6px",
          fontWeight: "500",
        }
      ],
      "4xl": [
        "36px",
        {
          lineHeight: "44px",
          letterSpacing: "-1.2px",
          fontWeight: "500",
        }
      ],
      "3xl": [
        "28px",
        {
          lineHeight: "34px",
          letterSpacing: "-0.8px",
          fontWeight: "500",
        }
      ],
      "2xl": [
        "24px",
        {
          lineHeight: "30px",
          letterSpacing: "-1px",
          fontWeight: "400",
        }
      ],
      "xl": [
        "24px",
        {
          lineHeight: "30px",
          letterSpacing: "-1px",
          fontWeight: "400",
        }
      ],
      "lg": [
        "21px",
        {
          lineHeight: "30px",
          letterSpacing: "-0.8px",
          fontWeight: "400",
        }
      ],
      "base": [
        "17px",
        {
          lineHeight: "25px",
          letterSpacing: "-0.69px",
          fontWeight: "400", 
        }
      ],
      "sm": [
        "15px",
        {
          lineHeight: "23px",
          letterSpacing: "-0.6px",
          fontWeight: "400",
        }
      ],
      "caption1": [
        "20px",
        {
          lineHeight: "24px",
          letterSpacing: "-0.6px",
          fontWeight: "400",
        }
      ],
      "caption2": [
        "18px",
        {
          lineHeight: "20px",
          letterSpacing: "-0.3px",
          fontWeight: "400",
        }
      ],
      "caption3": [
        "16px",
        {
          lineHeight: "18px",
          letterSpacing: "-0.5px",
          fontWeight: "400",
        }
      ],
      "caption4": [
        "13px",
        {
          lineHeight: "15px",
          letterSpacing: "-0.2px",
          fontWeight: "400",
        }
      ],
    },
    colors: {
      white: "#ffffff",
      primary: {
        200: "#efeffc",
        300: "#cfd0f6",
        400: "#7f81e8",
        DEFAULT: "#5F62E2",
        600: "#5658CB",
      },
      secondary: {
        200: "#eaf8f4",
        300: "#bfe9de",
        400: "#56c4a7",
        DEFAULT: "#2AB691",
        600: "#26a482",
      },
      cops: {
        blue: "#03045e",
        border: "#0077b6",
        hover: "#00b4d8",
      },
      gray: {
        300: "#fafafa",
        400: "#f2f2f2",
        500: "#e5e5e5",
        600: "#b2b2b2",
        700: "#808080",
        800: "#333333",
        DEFAULT: "#1D1D1D",
      },
      alert: {
        danger: "#f5526a",
        success: "#72cdae",
        warning: "#f8cf5d",
      },
      hover: {
        danger: "#EE3622D7",
        success: "#e7eff2",
        warning: "#eddb91",
      }
    },
    borderRadius: {
      DEFAULT: "10px",
      full : "9999px"
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        inter: ['Inter', ]
      }
    }
  },
  plugins: [],
}
export default config
