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
    if (!chatId) return;
    setMessages([]);
    const messagesRef = collection(database, "message", chatId, "messages");
    const q = query(messagesRef, orderBy("sentAt")).withConverter(converter);
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesData: IMessage[] = [];
      snapshot.docChanges().forEach((change) => {
        // console.log(change.doc.data(), change.type);
        if (change.type === "added") {
          messagesData.push({ id: change.doc.id, ...change.doc.data() });
        }
        if (change.type === "removed") {
          setMessages((state) => state.filter((el) => el.id !== change.doc.id));
        }
        if (change.type === "modified") {
          // const updatedState = ;
          // console.log(updatedState, messages);
          setMessages((state) =>
            state.map((message) => {
              if (message.id === change.doc.id)
                return { id: change.doc.id, ...change.doc.data() };
              return message;
            }),
          );
        }
      });
      if (messagesData.length > 0)
        setMessages((state) => [...state, ...messagesData]);
    });

    return () => {
      unsubscribe();
    };
  }, [chatId]);

  return [messages];
}

export { useMessages };
