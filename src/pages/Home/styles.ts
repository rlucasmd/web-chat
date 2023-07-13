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
  overflowX: "auto",

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
  flex: 1,
});

const Main = styled("main", {
  display: "flex",
  flex: 1,
});

export { HomeContainer, Aside, AsideHeader, AsideContent, Main };
