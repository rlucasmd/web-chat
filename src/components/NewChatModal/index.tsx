import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButton,
  ModalContainer,
  ModalContent,
  ModalTitle,
  Overlay,
} from "./styles";
import { X } from "phosphor-react";
import { useEffect, useState } from "react";
import { QueryDocumentSnapshot, collection, getDocs } from "firebase/firestore";
import { database } from "../../services/firebase";
import { AutocompleteInput } from "../AutocompleteInput";

type IUserData = {
  displayName: string;
  email: string;
  photoURL: string;
};

type IUser = IUserData & {
  id: string;
};

const converter = {
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as IUserData,
  toFirestore: (data: IUserData) => data,
};

function NewChatModal() {
  async function fetchData() {
    console.log("fetch data");
    const userRef = collection(database, "user").withConverter(converter);
    const docsRef = await getDocs(userRef);

    const users: IUser[] = [];

    docsRef.forEach((doc) => {
      users.push({
        id: doc.id,
        ...doc.data(),
      });
      // console.log(doc.data());
    });
    setUserList(users);
    // select;
    // userRef.
  }
  const [userList, setUserList] = useState<IUser[]>([]);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Dialog.Portal>
      <Overlay />
      <ModalContainer>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <ModalTitle>Novo grupo ou conversa</ModalTitle>
        <AutocompleteInput />
      </ModalContainer>
    </Dialog.Portal>
  );
}

export { NewChatModal };
