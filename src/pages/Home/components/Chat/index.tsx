import { Avatar } from "../../../../components/Avatar";
import { useMessages } from "../../../../hooks/useMessages";
import { Message } from "../Message";
import { MessageInput } from "../MessageInput";
import { ChatContainer, ChatHeader, ChatMessagesWrapper } from "./styles";
import { useChats } from "../../../../hooks/useChats";
import { LoadingSpinner } from "../../../../components/LoadingSpinner";
import { useAuth } from "../../../../hooks/useAuth";
import React, { useEffect, useRef } from "react";
// const chatProps = {
//   chatImage: "https://github.com/ranieri3232.png",
// };

// const messages = [
//   {
//     sender: {
//       id: 1,
//       name: "Ranieri Lucas",
//       avatarUrl: "https://github.com/ranieri3232.png",
//     },
//     chatId: 123,
//     content:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatibus, beatae debitis aut porro mollitia quam delectus quisquam cupiditate ipsum inventore dicta nemo maiores repudiandae id? Odit velit assumenda ex?",
//   },
//   {
//     sender: {
//       id: 2,
//       name: "Manuelito Gomes",
//       avatarUrl: "https://github.com/rlucasmd.png",
//     },
//     chatId: 123,
//     content: "Lorem ip",
//   },
// ];

interface IChatProps {
  chatId?: string | undefined;
}

function Chat({ chatId }: IChatProps) {
  const [messages] = useMessages(chatId);
  const { chats } = useChats();
  const { user } = useAuth();

  const chatMessagesWrapperRef = useRef<HTMLDivElement>(null);
  const chatData = chats.find((chat) => chat.id === chatId);

  useEffect(() => {
    if (chatMessagesWrapperRef) {
      chatMessagesWrapperRef.current?.addEventListener(
        "DOMNodeInserted",
        (event) => {
          const { currentTarget: target } = event;
          const { scrollHeight } = target as HTMLDivElement;
          console.log(chatMessagesWrapperRef.current);
          chatMessagesWrapperRef.current?.scroll({
            top: scrollHeight,
            behavior: "smooth",
          });
        },
      );
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
