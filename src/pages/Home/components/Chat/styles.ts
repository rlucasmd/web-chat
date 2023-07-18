import { styled } from "../../../../styles";

const ChatContainer = styled("div", {
  display: "flex",
  maxHeight: "100%",
  flex: 1,
  flexDirection: "column",
  background: "$background",
});

const ChatMessagesWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: 32,
  gap: 16,
  flex: 1,
  overflow: "auto",
  maxHeight: "100%",
  background: "$details",
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

export { ChatContainer, ChatMessagesWrapper, ChatHeader };
