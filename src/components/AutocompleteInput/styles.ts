import { styled } from "../../styles";

const Autosuggestions = styled("div", {
  display: "block",
  background: "$details",
  // flexDirection: "column",
  width: "100%",
  filter: "drop-shadow(rgba(0, 0, 0, 0.25) 2px 4px 2px)",
});

const FormControl = styled("div", {
  overflow: "hidden",
  display: "flex",
  gap: 8,
  padding: "8px 16px",
  border: "1px solid $gray-light",
  borderRadius: 2,
  height: 50,
  alignItems: "center",
  color: "$black",
  background: "$details",
  position: "relative",

  button: {
    borderRadius: 0,
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    background: "transparent",
  },

  svg: {
    color: "$gray-medium",
  },
  "&:has(input:focus)": {
    borderColor: "$gray-dark",
    svg: {
      color: "$gray-dark",
    },
    button: {
      "&:hover": {
        background: "$gray-light",
      },
    },
  },
  variants: {
    show: {
      false: {
        filter: "drop-shadow(2px 4px 2px rgba(0, 0, 0, 0.25))",
      },
    },
  },
});

const Input = styled("input", {
  all: "unset",
  fontFamily: "Roboto",
  fontWeight: 400,
  width: "100%",
  "&::placeholder": {
    color: "$gray-medium",
  },
  "&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus": {
    border: "none",
    "-webkit-text-fill-color": "$black",
    "-webkit-box-shadow": "none",
    transition: "background-color 5000s ease-in-out 0s",
  },
});

const Suggestions = styled("ul", {
  maxHeight: 200,
  overflow: "auto",

  "&::-webkit-scrollbar": {
    width: 4,
  },

  "&::-webkit-scrollbar-track": {
    background: "$details",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "$gray-medium",
  },
  variants: {
    show: {
      true: {
        display: "block",
      },
      false: {
        display: "none",
      },
    },
  },
});

const Item = styled("li", {
  padding: "8px 8px",
  cursor: "pointer",
  display: "flex",
  gap: 8,
  alignItems: "center",

  img: {
    width: 48,
    height: 48,
    borderRadius: 999,
  },

  "&:hover": {
    background: "$gray-light",
  },
  "& + li": {
    borderTop: "1px solid $gray-medium",
  },
});

export { Autosuggestions, FormControl, Input, Suggestions, Item };
