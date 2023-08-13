import {
  QueryDocumentSnapshot,
  Timestamp,
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { database } from "../../services/firebase";
import { promise } from "zod";

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

  const messagePromise = addDoc(messageRef, {
    sentBy,
    content,
    sentAt: serverTimestamp(),
  });
  const docRef = doc(database, "chat", chatId);
  const updateRecentMessagePromise = updateDoc(docRef, {
    "recentMessage": {
      content,
      sentBy,
      sentAt: serverTimestamp(),
    }
  });
  await Promise.all([messagePromise, updateRecentMessagePromise]);

}

export { sendMessage };
