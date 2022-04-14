import { cookieStorageManager } from "@chakra-ui/react";

const theme = require("../utils/theme");
export const parameters = {
  // chakra: {
  //   theme,
  //   // colorModeManager: cookieStorageManager(),
  // },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
