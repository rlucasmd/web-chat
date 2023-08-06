import { styled } from "../../../../styles";

const UserBadgeContainer = styled("div", {
  display: "flex",
  position: "relative",

  overflow: "hidden",
  borderRadius: 9999,
  border: "1px solid $gray-medium",
  width: "fit-content",
  alignItems: "center",
  gap: 16,
  background: "$details",

  filter: "drop-shadow(2px 4px 2px rgba(0, 0, 0, 0.25))",

  img: {
    width: 48,
    height: 48,
    borderRadius: "50%",
  },

  button: {
    height: 48,
    width: 48,
  },
});

export { UserBadgeContainer };
