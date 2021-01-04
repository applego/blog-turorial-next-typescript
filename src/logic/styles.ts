import { base, dark } from "@theme-ui/presets";
import { merge } from "theme-ui";

export const theme = merge(base, {
  colors: {
    ...base.colors,
    modes: {
      dark: dark.colors,
    },
  },
});

// console.log(theme.colors.primary);
// console.log(theme);
