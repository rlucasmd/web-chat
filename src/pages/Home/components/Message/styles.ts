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
  padding: "8px 8px 16px 8px",
  borderRadius: 8,
  height: "fit-content",

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
  filter: "drop-shadow(2px 4px 2px rgba(0, 0, 0, 0.25))",
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
