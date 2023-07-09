import { styled } from "../../styles";

const LoginContainer = styled("div", {
  display: "flex",
  flex: 1,
  minHeight: "100vh",
});

const Aside = styled("aside", {
  display: "flex",
  flex: 5,
  background: "$purple",
  justifyContent: "center",
  alignItems: "center",

  div: {
    maxWidth: 440,
    h1: {
      fontFamily: "Poppins",
      marginTop: 8,
      color: "$white",
      fontWeight: 700,
      fontSize: 36,
    },
    p: {
      marginTop: 16,
      color: "$details",
      fontWeight: 400,
      fontSize: 24,
    },
  },
});

const Main = styled("main", {
  display: "flex",
  flex: 6,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  "> img": {
    maxWidth: 220,
    marginBottom: 56,
  },
});

const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 16,
  width: "100%",
  maxWidth: 320,
});

const Separator = styled("span", {
  fontSize: 14,
  color: "$gray-medium",
  fontWeight: 400,
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: 8,

  "&::before": {
    content: "",
    borderTop: "1px solid $gray-medium",
    display: "flex",
    flex: 1,
    height: 0,
  },
  "&::after": {
    content: "",
    borderTop: "1px solid $gray-medium",
    display: "flex",
    flex: 1,
    height: 0,
  },
});

const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: 16,

  ">div": {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
});

export { LoginContainer, Aside, Main, Content, Separator, Form };
