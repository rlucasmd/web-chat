import {
  QueryDocumentSnapshot,
  Timestamp,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { database } from "../../services/firebase";

type ISender = {
  id: string;
  displayName: string;
  photoURL: string;
};

type IMessageData = {
  content: string;
  sentAt: Timestamp;
  sentBy: ISender;
};
type IMessage = IMessageData & {
  id: string;
};

const converter = {
  toFirestore: (data: IMessageData) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as IMessageData,
};

async function sendMessage(content: string, sentBy: ISender, chatId: string) {
  const messageRef = collection(
    database,
    "message",
    chatId,
    "messages",
  ).withConverter(converter);
  //   if (!messageRef) return;

  await addDoc(messageRef, {
    sentBy,
    content,
    sentAt: serverTimestamp(),
  });
}

export { sendMessage };
