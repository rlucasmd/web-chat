import { styled } from "../../../../styles";

const ChatContainer = styled("div", {
  display: "flex",
  flex: 1,
  background: "$details",
});

const ChatHeader = styled("header", {
  display: "flex",
  width: "100%",
  height: "fit-content",
  padding: "24px 32px",
  background: "$background",
  // filter: "drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25))",
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
  ">img": {
    width: 64,
    height: 64,
    borderRadius: 999,
  },
});

export { ChatContainer, ChatHeader };
