import { ImgHTMLAttributes } from "react";
import { AvatarContainer } from "./styles";

type AvatarProps = ImgHTMLAttributes<HTMLImageElement>;

function Avatar({ ...rest }: AvatarProps) {
  return (
    <AvatarContainer>
      <img {...rest} />
    </AvatarContainer>
  );
}

export { Avatar };
