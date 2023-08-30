import { ComponentProps, ElementRef, ReactNode, forwardRef } from "react";
import { InputContainer, InputContent } from "./styles";

type InputProps = ComponentProps<typeof InputContent> & {
  icon?: undefined | ReactNode;
  error?: boolean;
};

const Input = forwardRef<ElementRef<typeof InputContent>, InputProps>(
  ({ icon, error, ...props }, ref) => {
    return (
      <InputContainer variant={error ? "error" : "default"}>
        {icon && icon}
        <InputContent ref={ref} {...props} />
      </InputContainer>
    );
  },
);

export { Input };
