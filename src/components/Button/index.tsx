import { ComponentProps, ElementRef, forwardRef } from "react";
import { ButtonContainer } from "./styles";

type ButtonProps = ComponentProps<typeof ButtonContainer>;

const Button = forwardRef<ElementRef<typeof ButtonContainer>, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <ButtonContainer {...props} ref={ref}>
        {children}
      </ButtonContainer>
    );
  },
);

Button.displayName = "Button";
export { Button };
