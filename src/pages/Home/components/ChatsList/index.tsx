import { Avatar } from "../../../../components/Avatar";
import { useChats } from "../../../../hooks/useChats";
import { Chat, ChatsContainer, Content } from "./styles";
import figmaImage from "../../../../assets/figma.png";

// const chatss = [
//   {
//     id: "contato1",
//     name: "Ranieri Lucas",
//     lastMessage: "lorem ipsum dolor avne gut",
//     avatarUrl: "https://github.com/ranieri3232.png",
//   },
//   {
//     id: "contato2",
//     name: "Manoel Gomes",
//     lastMessage: "lorem ipsum dolor avne gut",
//     avatarUrl: "https://github.com/ranieri3232.png",
//   },
//   {
//     id: "contato3",
//     name: "Manoel Gomes",
//     lastMessage: "lorem ipsum dolor avne gut",
//     avatarUrl: "https://github.com/ranieri3232.png",
//   },
//   {
//     id: "contato4",
//     name: "Manoel Gomes",
//     lastMessage: "lorem ipsum dolor avne gut",
//     avatarUrl: "https://github.com/ranieri3232.png",
//   },
//   {
//     id: "contato5",
//     name: "Manoel Gomes",
//     lastMessage: "lorem ipsum dolor avne gut",
//     avatarUrl: "https://github.com/ranieri3232.png",
//   },
//   {
//     id: "contato6",
//     name: "Manoel Gomes",
//     lastMessage: "lorem ipsum dolor avne gut",
//     avatarUrl: "https://github.com/ranieri3232.png",
//   },
//   {
//     id: "contato7",
//     name: "Manoel Gomes",
//     lastMessage: "lorem ipsum dolor avne gut",
//     avatarUrl: "https://github.com/ranieri3232.png",
//   },
// ];

function ChatsList() {
  const { chats } = useChats();

  return (
    <ChatsContainer>
      {chats.map((chat) => (
        <Chat key={chat.id} to={`/home/${chat.id}`}>
          <Avatar src={figmaImage} alt="" />
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
