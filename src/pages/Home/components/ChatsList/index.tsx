import { Chat, ChatsContainer, Content } from "./styles";

const chats = [
  {
    id: "contato1",
    name: "Ranieri Lucas",
    lastMessage: "lorem ipsum dolor avne gut",
    avatarUrl: "https://github.com/ranieri3232.png",
  },
  {
    id: "contato2",
    name: "Manoel Gomes",
    lastMessage: "lorem ipsum dolor avne gut",
    avatarUrl: "https://github.com/ranieri3232.png",
  },
];

function ChatsList() {
  return (
    <ChatsContainer>
      {chats.map((chat) => (
        <Chat key={chat.id}>
          <img src={chat.avatarUrl} alt="" />
          <Content>
            <strong>{chat.name}</strong>
            <span>{chat.lastMessage}</span>
          </Content>
        </Chat>
      ))}
    </ChatsContainer>
  );
}

export { ChatsList };
