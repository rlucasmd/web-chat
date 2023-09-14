import { styled } from "../../../../../../styles";

const ScrollableMessagesContainer = styled("div", {
  display: "flex",
  position: "relative",
  flexDirection: "column",
  flex: "1 1 auto",
  maxHeight: "100%",
  overflow: "hidden",
  height: "100%",
  width: "100%",
  background: "$details",
  button: {
    position: "absolute",
    bottom: 16,
    left: "50%",
    transform: "translate(-50%, 0)",
    zIndex: 999,
    width: "fit-content",
    padding: "1rem 2rem",
    borderRadius: 9999,

    // filter: "drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))",

    // "&:hover": {
    //   filter: "drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))",
    // },
  },
});

const ScrollContainerOuter = styled("div", {
  position: "relative",
  height: "100%",
  maxHeight: "100%",
  overflowY: "scroll",
});
const ScrollContainerInner = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  // height: "100%",
  gap: 16,
  padding: 32,

  variants: {
    hiddenMessages: {
      true: {
        opacity: 0,
      },
      false: {
        opacity: 1,
      },
    },
  },

  defaultVariants: {
    hiddenMessages: false,
  },
});

export {
  ScrollContainerInner,
  ScrollContainerOuter,
  ScrollableMessagesContainer,
};
