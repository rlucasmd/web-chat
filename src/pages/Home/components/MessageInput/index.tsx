import { PaperPlaneTilt } from "phosphor-react";
import { Input, MessageInputContainer, MessageInputWrapper } from "./styles";
import { sendMessage } from "../../../../utils/firestore/message";

function MessageInput() {
  async function handleSendNewMessage() {
    const data = {
      chatId: "S3IFf42RrhGVDLWHttOJ",
      content: "Menssagem de teste",
      sentBy: {
        id: "I6iKY52tzcgvVcFCYVhl2TBw2pL2",
        photoURL: "https://www.github.com/ranieri3232.png",
        displayName: "ranieri lucas",
      },
    };
    await sendMessage(data.content, data.sentBy, data.chatId);
  }
  return (
    <MessageInputContainer>
      <MessageInputWrapper>
        <Input placeholder="Digite aqui sua mensagem!" />
        <button onClick={handleSendNewMessage}>
          <PaperPlaneTilt size={32} weight="fill" />
        </button>
      </MessageInputWrapper>
    </MessageInputContainer>
  );
}

export { MessageInput };
