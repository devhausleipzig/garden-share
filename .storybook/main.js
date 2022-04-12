module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chakra-ui/storybook-addon",
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/react",
  typescript: { reactDocgen: false },
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
