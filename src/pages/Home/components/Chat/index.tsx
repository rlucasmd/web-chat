import { useParams } from "react-router-dom";
import { Avatar } from "../../../../components/Avatar";
import { useMessages } from "../../../../hooks/useMessages";
import { Message } from "../Message";
import { MessageInput } from "../MessageInput";
import { ChatContainer, ChatHeader, ChatMessagesWrapper } from "./styles";
import { useChats } from "../../../../hooks/useChats";
import { LoadingSpinner } from "../../../../components/LoadingSpinner";
const chatProps = {
  chatImage: "https://github.com/ranieri3232.png",
};

const messages = [
  {
    sender: {
      id: 1,
      name: "Ranieri Lucas",
      avatarUrl: "https://github.com/ranieri3232.png",
    },
    chatId: 123,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatibus, beatae debitis aut porro mollitia quam delectus quisquam cupiditate ipsum inventore dicta nemo maiores repudiandae id? Odit velit assumenda ex?",
  },
  {
    sender: {
      id: 2,
      name: "Manuelito Gomes",
      avatarUrl: "https://github.com/rlucasmd.png",
    },
    chatId: 123,
    content: "Lorem ip",
  },
];

interface IChatProps {
  chatId?: string | undefined;
}

function Chat({ chatId }: IChatProps) {
  const { chats } = useChats();
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
          <ChatMessagesWrapper>
            <Message chatId={123} sender={messages[0].sender}>
              {messages[0].content}
            </Message>
            <Message chatId={123} sender={messages[0].sender}>
              {messages[0].content}
            </Message>
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
