import { globalCss } from ".";

export const GlobalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  body: {
    "-webkit-font-smoothing": "antialiased",
    backgroundColor: "$background",
    color: "$black",
  },

  "body, input, textarea, button": {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 700,
  },
});
