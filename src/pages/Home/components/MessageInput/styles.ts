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
  padding: 16,
  alignItems: "center",
  justifyContent: "center",
  gap: 24,

  ">button": {
    cursor: "pointer",
    border: "none",
    background: "transparent",
    flex: 1,
    color: "$purple",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Input = styled("textarea", {
  width: "100%",
  border: "none",
  fontFamily: "Roboto, sans-serif",
  fontSize: 16,
  fontWeight: 400,
  color: "$black",
  height: 48,
  resize: "none",

  borderRight: "1px solid $gray-medium",
  "&:focus": {
    outline: "none",
  },
  "&::placeholder": {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 400,
    color: "$gray-dark",
  },
});

export { MessageInputContainer, MessageInputWrapper, Input };
