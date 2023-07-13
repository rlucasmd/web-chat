import { styled } from "../../../../styles";

const ChatsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 8,
  ">strong": {
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: 24,
    color: "$black",
  },
  ">span": {
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 16,
    color: "$gray-dark",
  },
});

const Chat = styled("a", {
  background: "$background",
  cursor: "pointer",
  textDecoration: "none",
  padding: 24,
  display: "flex",
  gap: 16,
  borderBottom: "1px solid $gray-light",

  "&:hover": {
    filter: "brightness(0.9)",
  },
});

export { ChatsContainer, Chat, Content };
