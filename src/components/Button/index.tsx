import { ComponentProps, ReactNode } from "react";
import { ButtonContainer } from "./styles";

type ButtonProps = ComponentProps<typeof ButtonContainer>;

function Button({ children, ...props }: ButtonProps) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
}
export { Button };
