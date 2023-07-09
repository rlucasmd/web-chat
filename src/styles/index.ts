import { createStitches } from "@stitches/react";

export const { config, styled, keyframes, css, globalCss, theme, createTheme } =
  createStitches({
    theme: {
      colors: {
        white: "#FFFFFF",
        black: "#29292E",
        shadow: "#050206",
        purple: "#835AFD",
        danger: "#E73F5D",
        "gray-dark": "#737380",
        "gray-medium": "#A8A8B3",
        "gray-light": "#DBDCDD",
        background: "#F8F8F8",
        details: "#FEFEFE",
        "pink-dark": "#E559F9",
        "pink-light": "#D67EE2",
      },
    },
  });
