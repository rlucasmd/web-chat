import { Avatar } from "../../../../components/Avatar";
import { useChats } from "../../../../hooks/useChats";
import { Chat, ChatsContainer, Content } from "./styles";

function ChatsList() {
  const { chats } = useChats();

  return (
    <ChatsContainer>
      {chats.map((chat) => (
        <Chat key={chat.id} to={`/home/${chat.id}`}>
          <Avatar alt="" />
          <Content>
            <strong>{chat.name}</strong>
            <span>{chat.recentMessage.content}</span>
          </Content>
        </Chat>
      ))}
    </ChatsContainer>
  );
}

export { ChatsList };
