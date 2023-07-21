import { PaperPlaneTilt } from "phosphor-react";
import { Input, MessageInputContainer, MessageInputWrapper } from "./styles";

function MessageInput() {
  return (
    <MessageInputContainer>
      <MessageInputWrapper>
        <Input placeholder="Digite aqui sua mensagem!" />
        <button>
          <PaperPlaneTilt size={32} weight="fill" />
        </button>
      </MessageInputWrapper>
    </MessageInputContainer>
  );
}

export { MessageInput };
