import { styled } from "../../../../styles";
import { Link } from "react-router-dom";

const ChatsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  background: "$details",
  flex: "1 1 auto",
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

const Chat = styled(Link, {
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
