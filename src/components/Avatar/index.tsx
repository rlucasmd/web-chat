import { ComponentProps } from "react";
import { AvatarContainer, AvatarFallback, AvatarImage } from "./styles";
import { User } from "phosphor-react";

export type AvatarProps = ComponentProps<typeof AvatarImage>;

function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  );
}

Avatar.displayName = "Avatar";

export { Avatar };
