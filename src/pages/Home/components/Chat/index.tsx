import { Avatar } from "../../../../components/Avatar";
import { useMessages } from "../../../../hooks/useMessages";
import { Message } from "../Message";
import { MessageInput } from "../MessageInput";
import { ChatContainer, ChatHeader, ChatMessagesWrapper } from "./styles";
import { useChats } from "../../../../hooks/useChats";
import { LoadingSpinner } from "../../../../components/LoadingSpinner";
import { useAuth } from "../../../../hooks/useAuth";
import React, { useEffect, useRef } from "react";

interface IChatProps {
  chatId?: string | undefined;
}

function Chat({ chatId }: IChatProps) {
  const [messages] = useMessages(chatId);
  const { chats } = useChats();
  const { user } = useAuth();

  const chatMessagesWrapperRef = useRef<HTMLDivElement>(null);
  const chatData = chats.find((chat) => chat.id === chatId);

  function canScroll(currentElement: HTMLDivElement) {
    const { scrollTop, scrollHeight, offsetHeight } = currentElement;

    console.log(scrollTop, scrollHeight, offsetHeight);
    currentElement.scroll({ top: scrollHeight, behavior: "smooth" });
  }

  useEffect(() => {
    if (chatMessagesWrapperRef) {
      const current = chatMessagesWrapperRef.current;
      if (!current) return;

      canScroll(current);
    }
  }, [messages]);

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
          <ChatMessagesWrapper ref={chatMessagesWrapperRef}>
            {messages.map((message) => (
              <Message
                sender={message.sentBy}
                key={message.id}
                send={user?.uid === message.sentBy.id}
              >
                {message.content}
              </Message>
            ))}
          </ChatMessagesWrapper>

          <MessageInput />
        </>
      ) : (
        <LoadingSpinner color="purple" />
      )}
    </ChatContainer>
  );
}

export { Chat };
