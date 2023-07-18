import { styled } from "../../../../styles";

const MessageInputContainer = styled("div", {
  display: "flex",
  width: "100%",
  padding: 32,
  background: "$background",
  borderTop: "1px solid $gray-medium",
});

const MessageInputWrapper = styled("div", {
  border: "1px solid $gray-medium",
  borderRadius: 8,
  display: "flex",
  width: "100%",
  padding: 8,

  ">button": {
    border: "none",
    borderLeft: "1px solid $gray-medium",
    background: "transparent",
    width: 28,
    height: 28,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Input = styled("input", {
  width: "100%",
  border: "none",
  "&:focus": {
    outline: "none",
  },
});

export { MessageInputContainer, MessageInputWrapper, Input };
