import { ChatContainer, ChatHeader } from "./styles";

const chatProps = {
  chatImage: "https://github.com/ranieri3232.png",
};

function Chat() {
  return (
    <ChatContainer>
      <ChatHeader>
        <img src={chatProps.chatImage} alt="" />
        <div>
          <strong>Manuelito Gomes</strong>
          <span>Online</span>
        </div>
      </ChatHeader>
    </ChatContainer>
  );
}

export { Chat };
