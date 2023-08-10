import { PaperPlaneTilt } from "phosphor-react";
import { Input, MessageInputContainer, MessageInputWrapper } from "./styles";
import { sendMessage } from "../../../../utils/firestore/message";

import { useAuth } from "../../../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { useState } from "react";

function MessageInput() {
  const [messageContent, setMessageContent] = useState("");
  const { user } = useAuth();
  const { chatId } = useParams();
  async function handleSendNewMessage() {
    if (!chatId || !user) return;

    if (messageContent.trim() === "") return;

    const data = {
      chatId,
      content: messageContent,
      sentBy: {
        id: user.uid,
        photoURL: user.photoURL,
        displayName: user.displayName,
      },
    };
    await sendMessage(data.content, data.sentBy, data.chatId);
    setMessageContent("");
  }
  return (
    <MessageInputContainer>
      <MessageInputWrapper>
        <Input
          placeholder="Digite aqui sua mensagem!"
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
        />
        <button onClick={handleSendNewMessage}>
          <PaperPlaneTilt size={32} weight="fill" />
        </button>
      </MessageInputWrapper>
    </MessageInputContainer>
  );
}

export { MessageInput };
