import { styled } from "../../styles";

const HomeContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  flex: 1,
  height: "100vh",
  width: "100%",
});

const Aside = styled("aside", {
  display: "flex",
  width: "100%",
  maxWidth: 400,
  flexFlow: "column",
  height: "100%",

  borderRight: "1px solid $gray-light",
});

const AsideHeader = styled("div", {
  display: "flex",
  flexDirection: "column",
  flex: "0 1 auto",
  gap: 16,
  padding: 24,
  background: "$background",

  borderBottom: "1px solid $gray-light",

  ">div": {
    display: "flex",
    justifyContent: "space-between",
    img: {
      maxWidth: 170,
    },
  },
});

const ActionsButtons = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 8,
  button: {
    backgroundColor: "$background",
    color: "$black",
    height: "fit-content",
    padding: 8,
  },
});
const AsideContent = styled("div", {
  display: "flex",
  width: "100%",
  maxHeight: "100%",
  overflow: "auto",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

const Main = styled("main", {
  display: "flex",
  flexDirection: "column",
  maxHeight: "100vh",
  width: "100%",
});
export {
  HomeContainer,
  Aside,
  AsideHeader,
  ActionsButtons,
  AsideContent,
  Main,
};
