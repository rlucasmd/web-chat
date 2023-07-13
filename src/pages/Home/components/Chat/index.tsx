import { Avatar } from "../../../../components/Avatar";
import { Message } from "../Message";
import { ChatContainer, ChatHeader, ChatMessagesWrapper } from "./styles";

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
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatibus, beatae debitis aut porro mollitia quam delectus quisquam cupiditate ipsum inventore dicta nemo maiores repudiandae id? Odit velit assumenda ex?",
  },
];

function Chat() {
  return (
    <ChatContainer>
      <ChatHeader>
        <Avatar src={chatProps.chatImage} alt="" />
        <div>
          <strong>Manuelito Gomes</strong>
          <span>Online</span>
        </div>
      </ChatHeader>
      <ChatMessagesWrapper>
        <Message chatId={123} sender={messages[0].sender}>
          {messages[0].content}
        </Message>
      </ChatMessagesWrapper>
    </ChatContainer>
  );
}

export { Chat };
