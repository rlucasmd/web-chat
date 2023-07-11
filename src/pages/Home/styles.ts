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
  flexDirection: "column",
  height: "100vh",

  borderRight: "1px solid $gray-light",
});

const AsideHeader = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: 16,
  padding: 24,

  borderBottom: "1px solid $gray-light",

  ">img": {
    maxWidth: 170,
  },
});
const AsideContent = styled("div", {
  display: "flex",
  width: "100%",
});

const Main = styled("main", {
  display: "flex",
  flex: 1,
});

export { HomeContainer, Aside, AsideHeader, AsideContent, Main };
