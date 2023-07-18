import { styled } from "../../styles";

const HomeContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  flex: 1,
});

const Aside = styled("aside", {
  display: "flex",
  width: "100%",
  maxWidth: 400,
  flexFlow: "column",
  maxHeight: "100vh",

  borderRight: "1px solid $gray-light",
});

const AsideHeader = styled("div", {
  display: "flex",
  flexDirection: "column",
  flex: "0 1 auto",
  gap: 16,
  padding: 24,
  background: "$details",

  borderBottom: "1px solid $gray-light",

  ">img": {
    maxWidth: 170,
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
});
export { HomeContainer, Aside, AsideHeader, AsideContent, Main };
