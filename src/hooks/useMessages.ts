import {
  QueryDocumentSnapshot,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "../services/firebase";

type IMessagesData = {
  chatId: string;
  content: string;
  sender: string;
};

type IMessages = IMessagesData & {
  id: string;
};

const converter = {
  toFirestore: (data: IMessagesData) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as IMessagesData,
};

function useMessages(chatId: string) {
  const [messages, setMessages] = useState<IMessages[]>([]);

  useEffect(() => {
    // console.log("fetch messages");
    const chatRef = doc(database, "chats", chatId);
    // console.log(chatRef.path);
    const q = query(
      collection(database, "messages"),
      where("chatId", "==", chatRef),
      orderBy("sentAt"),
    ).withConverter(converter);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesData: IMessages[] = [];
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
