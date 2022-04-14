import { extendTheme, withDefaultProps } from "@chakra-ui/react";

const customTheme = extendTheme(
  withDefaultProps({
    defaultProps: {
      focusBorderColor: "#1287aa",
    },
    components: ["Input", "Select", "Textarea"],
  })
);

export default customTheme;
