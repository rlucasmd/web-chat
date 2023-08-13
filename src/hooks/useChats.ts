import {
  QueryDocumentSnapshot,
  Timestamp,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { database } from "../services/firebase";
import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";

type IChatData = {
  createdAt: Timestamp;
  createdBy: string;
  members: string[];
  modifiedAt: Timestamp;
  recentMessage: {
    content: string;
    sentBy: {
      displayName: string;
      id: string;
      photoURL: string;
    };
    sentAt: Timestamp;
  };
  type: number;
  user: string[];
  name: string;
  photoURL: string;
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
      collection(database, "chat"),
      where("members", "array-contains", user.uid),
    ).withConverter(converter);

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

  return { chats };
}

export { useChats };
