/** @type { import('@storybook/react-vite').StorybookConfig } */
import svgr from 'vite-plugin-svgr';
const config = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials', 'storybook-addon-themes'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(config) {
    config.plugins = [
      svgr({
        include: '**/*.svg',
      }),
      ...config.plugins,
    ];
    
    return config;
  },
};
export default config;
