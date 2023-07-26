import { styled, keyframes } from "../styles";

const rotation = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

const LoadingSpinner = styled("span", {
  width: 32,
  height: 32,
  borderRadius: "50%",
  display: "inline-block",
  borderTop: "3px solid $white",
  borderRight: "3px solid transparent",
  boxSizing: "border-box",
  animation: `${rotation} 1s linear infinite`,
});

export { LoadingSpinner };
