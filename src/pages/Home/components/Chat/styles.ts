import { styled } from "../../../../styles";

const ChatContainer = styled("div", {
  display: "flex",
  height: "100vh",
  width: "100%",
  flex: 1,
  flexDirection: "column",
  background: "$background",
  alignItems: "center",
  justifyContent: "center",
});
const ChatHeader = styled("header", {
  display: "flex",
  width: "100%",
  height: "fit-content",
  padding: "24px 32px",
  background: "$background",
  borderBottom: "1px solid $gray-light",

  gap: 24,

  ">div": {
    display: "flex",
    flexDirection: "column",
    gap: 8,

    strong: {
      fontSize: 24,
      fontWeight: 700,
      color: "$black",
    },
    span: {
      fontSize: 16,
      fontWeight: 400,
      color: "$gray-medium",
    },
  },
});

export { ChatContainer, ChatHeader };
