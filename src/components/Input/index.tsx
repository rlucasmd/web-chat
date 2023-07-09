import { ComponentProps, ReactNode } from "react";
import { InputContainer, InputContent } from "./styles";

type InputProps = ComponentProps<typeof InputContent> & {
  icon?: undefined | ReactNode;
};

function Input({ icon, ...props }: InputProps) {
  return (
    <InputContainer>
      {icon && icon}
      <InputContent {...props} />
    </InputContainer>
  );
}

export { Input };
