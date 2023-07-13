import { ReactNode } from "react";
import { Avatar } from "../../../../components/Avatar";
import { Content, MessageContainer, Time } from "./styles";

interface MessageProps {
  sender: {
    id: number;
    avatarUrl: string;
    name: string;
  };
  chatId: number;
  children: string | ReactNode;
  send?: boolean;
}

function Message({ sender, children, send }: MessageProps) {
  return (
    <MessageContainer send={send}>
      <Avatar src={sender.avatarUrl} alt="" />
      <Content>
        {!send && <p className="title">{sender.name}</p>}
        <p>{children}</p>
        <Time>10:00</Time>
      </Content>
    </MessageContainer>
  );
}
export { Message };
