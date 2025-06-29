/** @type { import('@storybook/react').Preview } */
import '../src/theme/main.css';
import '../src/theme/dark.css';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },
    themes: {
      default: 'light',
      clearable: false,
      list: [
        { name: 'light', class: '' },
        { name: 'dark', class: 'dark' },
      ],
    },
  },
  decorators: [
    (Story, { viewMode }) => {
      return (
        <div
          className={
            viewMode === 'docs' ? 'bg-primary p-4' : 'h-screen bg-primary p-4'
          }>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
