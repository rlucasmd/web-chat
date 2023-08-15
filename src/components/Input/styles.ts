import { styled } from "../../styles";

const InputContainer = styled("div", {
  display: "flex",
  gap: 8,
  padding: "8px 16px",
  border: "1px solid $gray-light",
  borderRadius: 8,
  height: 50,
  alignItems: "center",
  color: "$black",
  background: "$details",

  svg: {
    color: "$gray-medium",
  },
  "&:has(input:focus)": {
    borderColor: "$gray-dark",
    svg: {
      color: "$gray-dark",
    },
  },

  variants: {
    variant: {
      default: {
        borderColor: "$gray-light",
      },
      error: {
        borderColor: "$danger",
      }
    }
  },

  defaultVariants: {
    variant: "default",
  },
  filter: "drop-shadow(2px 4px 2px rgba(0, 0, 0, 0.25))",
});
const InputContent = styled("input", {
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

export { InputContainer, InputContent };
