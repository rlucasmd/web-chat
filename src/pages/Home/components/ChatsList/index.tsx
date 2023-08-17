import { Avatar } from "../../../../components/Avatar";
import { useChats } from "../../../../hooks/useChats";
import { Chat, ChatsContainer, Content } from "./styles";

function ChatsList() {
  const { chats } = useChats();

  return (
    <ChatsContainer>
      {chats.map((chat) => (
        <Chat key={chat.id} to={`/home/${chat.id}`}>
          <Avatar src={chat.photoURL} alt="" />
          <Content>
            <strong>{chat.name}</strong>
            {chat.recentMessage && <span>{chat.recentMessage.sentBy.displayName}: {chat.recentMessage.content}</span>}
          </Content>
        </Chat>
      ))}
    </ChatsContainer>
  );
}

export { ChatsList };
