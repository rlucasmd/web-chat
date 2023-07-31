import {
  QueryDocumentSnapshot,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { database } from "../services/firebase";
import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";

type IChatData = {
  name: string;
  participants: string[];
  lastMessage: string;
};

type IChat = IChatData & {
  id: string;
};

const converter = {
  toFirestore: (data: IChatData) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as IChatData,
};

function useChats() {
  const [chats, setChats] = useState<IChat[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    const q = query(
      collection(database, "chats"),
      where("participants", "array-contains", user.uid),
    ).withConverter(converter);
    console.log("ola");

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const chatsData: IChat[] = [];
      querySnapshot.forEach((doc) => {
        chatsData.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setChats(chatsData);
    });

    return () => {
      unsubscribe();
    };
  }, [user]);

  useEffect(() => {
    console.log(chats);
  }, [chats]);

  return { chats };
}

export { useChats };
