import {
  QueryDocumentSnapshot,
  Timestamp,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "../services/firebase";

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

function useMessages(chatId?: string) {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    // console.log("fetch messages");
    // const chatRef = doc(database, "chats", chatId);
    if (!chatId) return;
    const messagesRef = collection(database, "message", chatId, "messages");
    // console.log(chatRef.path);
    const q = query(messagesRef, orderBy("sentAt")).withConverter(converter);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesData: IMessage[] = [];
      // console.log(querySnapshot.size);
      querySnapshot.forEach((doc) => {
        if (doc) messagesData.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messagesData);
    });

    return () => {
      unsubscribe();
    };
  }, [chatId]);

  return [messages];
}

export { useMessages };
