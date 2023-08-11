import * as Avatar from "@radix-ui/react-avatar";
import { styled } from "../../styles";

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: 999,
  display: "inline-block",
  width: 64,
  height: 64,
  minWidth: 64,
  minHeight: 64,
  overflow: "hidden",

  variants: {
    size: {
      large: {
        width: 64,
        height: 64,
        minWidth: 64,
        minHeight: 64,
      },
      medium: {
        width: 48,
        height: 48,
        minWidth: 48,
        minHeight: 48,
      },
    },
  },

  defaultVariants: {
    size: "large",
  },
});

export const AvatarImage = styled(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

export const AvatarFallback = styled(Avatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  backgroundColor: "$gray-medium",
  color: "$white",

  svg: {
    color: "$white",
    width: 24,
    height: 24,
  },
});
