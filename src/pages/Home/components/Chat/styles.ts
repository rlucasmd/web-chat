import { styled } from "../../../../styles";

const ChatContainer = styled("div", {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  background: "$details",
});

const ChatHeader = styled("header", {
  display: "flex",
  width: "100%",
  height: "fit-content",
  padding: "24px 32px",
  background: "$details",
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

const ChatMessagesWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: 32,
  gap: 16,
});

export { ChatContainer, ChatHeader, ChatMessagesWrapper };
