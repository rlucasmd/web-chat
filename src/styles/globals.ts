import { globalCss } from ".";

export const GlobalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  body: {
    "-webkit-font-smoothing": "antialiased",
    background: "$background",
    color: "$black",
  },

  "body, input, textarea, button": {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 700,
  },
});
