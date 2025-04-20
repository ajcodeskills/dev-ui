/** @type {import('tailwindcss').Config} */

import preset from './src/theme/preset';

module.exports = {
  presets: [preset],
  content: ['./src/**/*.{ts,tsx}', './.storybook/preview.jsx'],
  darkMode: 'class',
};
