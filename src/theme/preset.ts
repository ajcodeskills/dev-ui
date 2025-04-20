/** @type {import('tailwindcss').Config} */

// colors used for all color properties
const colors = {
  transparent: 'transparent',
  white: {
    DEFAULT: 'rgb(var(--white))',
  },
  black: {
    DEFAULT: 'rgb(var(--black))',
  },
  grey: {
    DEFAULT: 'rgb(var(--grey))',
    dark: 'rgb(var(--dark-grey))',
  },
  green: {
    DEFAULT: 'rgb(var(--green))',
    forest: 'rgb(var(--forest-green))',
    lime: 'rgb(var(--lime-green))',
    spring: 'rgb(var(--spring-green))',
  },
  yellow: {
    DEFAULT: 'rgb(var(--yellow))',
  },
  red: {
    DEFAULT: 'rgb(var(--red))',
    light: 'rgb(var(--red-light))',
  },
  blue: {
    DEFAULT: 'rgb(var(--blue))',
    light: 'rgb(var(--light-blue))',
    navy: 'rgb(var(--navy-blue))',
    sky: 'rgb(var(--sky-blue))',
    slate: 'rgb(var(--slate-blue))',
    steel: 'rgb(var(--steel-blue))',
  },
  orange: {
    DEFAULT: 'rgb(var(--orange))',
  },
  purple: {
    DEFAULT: 'rgb(var(--purple))',
  },
  amber: {
    DEFAULT: 'rgb(var(--amber))',
    light: 'rgb(var(--amber-light))',
  },
  brown: {
    DEFAULT: 'rgb(var(--brown))',
  },
  copper: {
    DEFAULT: 'rgb(var(--copper))',
  },
  gold: {
    DEFAULT: 'rgb(var(--gold))',
  },
  orchid: {
    DEFAULT: 'rgb(var(--orchid))',
  },
  periwinkle: {
    DEFAULT: 'rgb(var(--periwinkle))',
  },
  salmon: {
    DEFAULT: 'rgb(var(--salmon))',
    pink: 'rgb(var(--salmon-pink))',
  },

  brand: {
    primary: {
      DEFAULT: 'rgb(var(--primary-brand))',
      hover: 'rgb(var(--primary-brand-hover))',
      text: {
        DEFAULT: 'rgb(var(--primary-brand-text))',
        hover: 'rgb(var(--primary-brand-text-hover))',
      },
      medium: {
        DEFAULT: 'rgb(var(--primary-brand-medium))',
        hover: 'rgb(var(--primary-brand-medium-hover))',
      },
      light: {
        DEFAULT: 'rgb(var(--primary-brand-light))',
        hover: 'rgb(var(--primary-brand-light-hover))',
      },
    },
    secondary: {
      DEFAULT: 'rgb(var(--secondary-brand))',
      hover: 'rgb(var(--secondary-brand-hover))',
      light: {
        DEFAULT: 'rgb(var(--secondary-brand-light))',
        hover: 'rgb(var(--secondary-brand-light-hover))',
      },
    },
  },
  inherit: 'inherit',
  tooltip: 'rgb(var(--tooltip-bg))',
};

// typography colors used for text, fill, stroke, placeholder, and ring colors
const TypographyColors = {
  primary: {
    DEFAULT: 'rgb(var(--primary-text))',
    hover: 'rgb(var(--primary-text-hover))',
  },
  secondary: {
    DEFAULT: 'rgb(var(--secondary-text))',
    hover: 'rgb(var(--secondary-text-hover))',
  },
  tertiary: {
    DEFAULT: 'rgb(var(--tertiary-text))',
    hover: 'rgb(var(--tertiary-text-hover))',
  },
  error: {
    DEFAULT: 'rgb(var(--error-text))',
    hover: 'rgb(var(--error-text-hover))',
  },
  success: {
    DEFAULT: 'rgb(var(--success-text))',
    hover: 'rgb(var(--success-text-hover))',
  },
  warning: {
    DEFAULT: 'rgb(var(--warning-text))',
    hover: 'rgb(var(--warning-text-hover))',
  },
  ...colors,
};

const theme = {
  fontFamily: {
    sans: ['"Inter"', 'sans-serif'],
  },
  textColor: TypographyColors,
  placeholderColor: TypographyColors,
  ringColor: TypographyColors,
  fill: TypographyColors,
  stroke: TypographyColors,
  backgroundColor: {
    primary: {
      DEFAULT: 'rgb(var(--primary-bg))',
      hover: 'rgb(var(--primary-bg-hover))',
    },
    secondary: {
      DEFAULT: 'rgb(var(--secondary-bg))',
      hover: 'rgb(var(--secondary-bg-hover))',
    },
    tertiary: {
      DEFAULT: 'rgb(var(--tertiary-bg))',
      hover: 'rgb(var(--tertiary-bg-hover))',
    },
    error: {
      DEFAULT: 'rgb(var(--error-bg))',
      hover: 'rgb(var(--error-bg-hover))',
      light: {
        DEFAULT: 'rgb(var(--error-bg-light))',
        hover: 'rgb(var(--error-bg-light-hover))',
      },
      dark: {
        DEFAULT: 'rgb(var(--error-bg-dark))',
        hover: 'rgb(var(--error-bg-dark-hover))',
      },
    },
    success: {
      DEFAULT: 'rgb(var(--success-bg))',
      hover: 'rgb(var(--success-bg-hover))',
      light: {
        DEFAULT: 'rgb(var(--success-bg-light))',
        hover: 'rgb(var(--success-bg-light-hover))',
      },
      dark: {
        DEFAULT: 'rgb(var(--success-bg-dark))',
        hover: 'rgb(var(--success-bg-dark-hover))',
      },
    },
    warning: {
      DEFAULT: 'rgb(var(--warning-bg))',
      hover: 'rgb(var(--warning-bg-hover))',
      light: {
        DEFAULT: 'rgb(var(--warning-bg-light))',
        hover: 'rgb(var(--warning-bg-light-hover))',
      },
      dark: {
        DEFAULT: 'rgb(var(--warning-bg-dark))',
        hover: 'rgb(var(--warning-bg-dark-hover))',
      },
    },
    overlay: {
      DEFAULT: 'rgb(var(--overlay))',
      light: 'rgb(var(--overlay-light))',
      dark: 'rgb(var(--overlay-dark))',
    },
    ...colors,
  },
  borderColor: {
    primary: {
      DEFAULT: 'rgb(var(--primary-border))',
      hover: 'rgb(var(--primary-border-hover))',
    },
    secondary: {
      DEFAULT: 'rgb(var(--secondary-border))',
      hover: 'rgb(var(--secondary-border-hover))',
    },
    tertiary: {
      DEFAULT: 'rgb(var(--tertiary-border))',
      hover: 'rgb(var(--tertiary-border-hover))',
    },
    error: {
      DEFAULT: 'rgb(var(--error-border))',
      hover: 'rgb(var(--error-border-hover))',
      light: {
        DEFAULT: 'rgb(var(--error-border-light))',
        hover: 'rgb(var(--error-border-light-hover))',
      },
    },
    success: {
      DEFAULT: 'rgb(var(--success-border))',
      hover: 'rgb(var(--success-border-hover))',
      light: {
        DEFAULT: 'rgb(var(--success-border-light))',
        hover: 'rgb(var(--success-border-light-hover))',
      },
    },
    warning: {
      DEFAULT: 'rgb(var(--warning-border))',
      hover: 'rgb(var(--warning-border-hover))',
      light: {
        DEFAULT: 'rgb(var(--warning-border-light))',
        hover: 'rgb(var(--warning-border-light-hover))',
      },
    },
    ...colors,
  },
  colors,
  boxShadow: {
    1: 'var(--shadow-1)',
    2: 'var(--shadow-2)',
    3: 'var(--shadow-3)',
    4: 'var(--shadow-4)',
    5: 'var(--shadow-5)',
    '2-light': 'var(--shadow-2-light)',
    '3-light': 'var(--shadow-3-light)',
    brand: 'var(--shadow-brand)',
  },
  extend: {
    zIndex: {
      '2': '2',
      '3': '3',
    },
    fontSize: {
      '2xs': '0.625rem',
      '3xs': '0.5rem',
    },
    keyframes: {
      shake: {
        '10%, 90%': {
          transform: 'translate3d(-1px, 0, 0)',
        },
        '20%, 80%': {
          transform: 'translate3d(2px, 0, 0)',
        },
        '30%, 50%, 70%': {
          transform: 'translate3d(-4px, 0, 0)',
        },
        '40%, 60%': {
          transform: 'translate3d(4px, 0, 0)',
        },
      },
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
    animation: {
      shake: 'shake 1s cubic-bezier(.36,.07,.19,.97) both',
    },
  },
};

const preset = {
  content: ['./node_modules/@wrkspot/spot-ui/**/*.js'],
  darkMode: 'class',
  theme,
};

export default preset;
