import { ReactNode } from "react";
import { Avatar } from "../../../../components/Avatar";
import { Content, MessageContainer, Time } from "./styles";
import { Timestamp } from "firebase/firestore";

interface MessageProps {
  sender: {
    id: string;
    photoURL: string;
    displayName: string;
  };
  children: string | ReactNode;
  send?: boolean;
  sentAt: Timestamp;
}

function Message({ sender, children, send, sentAt }: MessageProps) {
  function formatDate(date: Timestamp){
    // const newDate = new Date(date);
    // console.log(date);
    if(date) return `${date.toDate().getHours()}:${date.toDate().getMinutes()}`;
    // return `${date.toDate().getHours()}:${date.toDate().getMinutes()}`;
    return "10:00"
  }
  return (
    <MessageContainer send={send}>
      <Avatar src={sender.photoURL} alt="" />
      <Content>
        {!send && <p className="title">{sender.displayName}</p>}
        <p>{children}</p>
        <Time>{formatDate(sentAt)}</Time>
      </Content>
    </MessageContainer>
  );
}
export { Message };
