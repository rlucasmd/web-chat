import { styled } from "../../../../styles";

const MessageContainer = styled("div", {
  display: "flex",
  gap: 16,
  variants: {
    send: {
      true: {
        flexDirection: "row-reverse",
        div: {
          background: "$pink-dark",
        },
      },
    },
  },
});

const Content = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  padding: 8,
  borderRadius: 8,

  background: "$purple",

  p: {
    fontFamily: "Roboto",
    fontWeight: 400,
    color: "$details",
    fontSize: 16,
    lineHeight: 1.3,
    "&.title": {
      fontWeight: 700,
    },
  },
});

const Time = styled("span", {
  position: "absolute",
  bottom: 4,
  right: 6,

  fontFamily: "Roboto",
  fontWeight: 700,
  fontSize: 10,
  color: "$details",
});

export { MessageContainer, Content, Time };
