import { ComponentProps } from "react";
import { AvatarContainer, AvatarFallback, AvatarImage } from "./styles";
import { User } from "phosphor-react";

export type AvatarProps = ComponentProps<typeof AvatarImage> & {
  size?: "large" | "medium";
};

function Avatar({ size, ...props }: AvatarProps) {
  return (
    <AvatarContainer size={size}>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={300}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  );
}

Avatar.displayName = "Avatar";

export { Avatar };
