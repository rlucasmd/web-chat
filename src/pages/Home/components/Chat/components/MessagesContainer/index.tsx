import { IUser } from "../../../../../../contexts/AuthContext";
// import { useAuth } from "../../../../../../hooks/useAuth";
import { useMessages } from "../../../../../../hooks/useMessages";
import { Message } from "../Message";
import { ScrollableContainer } from "../ScrollableContainer";

type IMessagesContainer = {
  chatId: string;
  user: IUser;
};

function MessagesContainer({ chatId, user }: IMessagesContainer) {
  const [messages] = useMessages(chatId);

  return (
    <ScrollableContainer chatId={chatId}>
      {messages.map((message) => (
        <Message
          sender={message.sentBy}
          key={message.id}
          send={user?.uid === message.sentBy.id}
          sentAt={message.sentAt}
        >
          {message.content}
        </Message>
      ))}
    </ScrollableContainer>
  );
}

export { MessagesContainer };
