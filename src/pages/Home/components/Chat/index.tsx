/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Avatar } from "../../../../components/Avatar";
import { MessageInput } from "../MessageInput";
import { ChatContainer, ChatHeader } from "./styles";
import { useChats } from "../../../../hooks/useChats";
import { LoadingSpinner } from "../../../../components/LoadingSpinner";
import { MessagesContainer } from "./components/MessagesContainer";
import { useAuth } from "../../../../hooks/useAuth";

interface IChatProps {
  chatId?: string | undefined;
}

function Chat({ chatId }: IChatProps) {
  const { chats } = useChats();
  const { user } = useAuth();

  const chatData = chats.find((chat) => chat.id === chatId);

  return (
    <ChatContainer>
      {chatData ? (
        <>
          <ChatHeader>
            <Avatar alt="" src={chatData.photoURL} />
            <div>
              <strong>{chatData.name}</strong>
              <span>Online</span>
            </div>
          </ChatHeader>
          <MessagesContainer chatId={chatData.id} user={user!} />
          <MessageInput />
        </>
      ) : (
        <LoadingSpinner color="purple" />
      )}
    </ChatContainer>
  );
}

export { Chat };
