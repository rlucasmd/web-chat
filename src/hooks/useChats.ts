import {
  QueryConstraint,
  QueryDocumentSnapshot,
  QueryFieldFilterConstraint,
  Timestamp,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { database } from "../services/firebase";
import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";

type IChatData = {
  createdAt: Timestamp;
  createdBy: string;
  members: Map<string, boolean>;
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
  // memberss: ;
  type: number;
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
      where(`members.${user.uid}`, "==", true),
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
  const chatRef = collection(database, "chat");

  async function findChatByUsers(users: Map<string, boolean>){
    
    // console.log(users);
    const ref: QueryConstraint[] = [];
    users.forEach((value, key) => {
      ref.push(where(`members.${key}`, "==", true));
    });
    ref.push(where("type", "==", 1));
    const q = query(chatRef, ...ref);
    const docSnapshot = await getDocs(q);
    console.log(docSnapshot.docs);
    docSnapshot.forEach(doc => {
      console.log(doc.id, doc.data());
    });

    return docSnapshot.docs.length > 0;
  }

  async function createAChat(data: Partial<IChat>){
    if(data.type === 1){
      const response = await findChatByUsers(data.members!);
      // console.log(response);
      if(response)
        throw new Error("Não foi possível criar a conversa!")
    }
    // console.log(data);
      
    const docRef = await addDoc(chatRef, {
      ...data,
      createdAt: serverTimestamp(),
      modifiedAt: serverTimestamp(),
      members: Object.fromEntries(data.members!),
    });
    const docSnap = await getDoc(docRef);
    return ({ id: docSnap.id, ...docSnap.data });
  }

  return { chats, createAChat };
}

export { useChats };
