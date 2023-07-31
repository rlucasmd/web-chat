import { styled } from "../../styles";

const AvatarContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: 64,
  width: 64,
  height: 64,
  borderRadius: 999,
  position: "relative",
  overflow: "hidden",
  filter: "drop-shadow(2px 4px 2px rgba(0, 0, 0, 0.25))",

  img: {
    display: "inline",
    height: "100%",
    width: "auto",
  },
});

export { AvatarContainer };
