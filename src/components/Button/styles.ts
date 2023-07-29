import { styled } from "../../styles";

const ButtonContainer = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: 50,
  color: "$background",
  border: "none",
  borderRadius: 6,

  padding: "14px 0px",
  gap: 8,

  cursor: "pointer",

  fontSize: 16,
  fontWeight: 500,

  "&:hover": {
    filter: "brightness(0.8)",
  },

  "&:disabled": {
    filter: "brightness(0.7)",
    cursor: "not-allowed",
  },

  transition: "0.3s",

  variants: {
    variant: {
      google: {
        background: "#EA4335",
      },
      primary: {
        background: "$purple",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export { ButtonContainer };
