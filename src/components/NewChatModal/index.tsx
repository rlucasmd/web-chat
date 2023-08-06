import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButton,
  ModalContainer,
  ModalForm,
  ModalTitle,
  Overlay,
} from "./styles";
import { X } from "phosphor-react";
import { useEffect, useState } from "react";
import { QueryDocumentSnapshot, collection, getDocs } from "firebase/firestore";
import { database } from "../../services/firebase";
import { AutocompleteInput } from "../AutocompleteInput";
import { LoadingSpinner } from "../LoadingSpinner";
import { Input } from "../Input";
import { UserBadge } from "./components/UserBadge";

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
  const [userList, setUserList] = useState<IUser[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);

  function handleSelectAUser(user: IUser) {
    console.log(user);
  }

  async function fetchData() {
    console.log("fetch data");
    setLoading(true);
    const userRef = collection(database, "user").withConverter(converter);
    const docsRef = await getDocs(userRef);

    const users: IUser[] = [];

    docsRef.forEach((doc) => {
      users.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    setUserList(users);
    setLoading(false);
  }

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
        <ModalForm>
          <Input placeholder="Digite um nome" />
          {loading ? (
            <LoadingSpinner />
          ) : (
            <AutocompleteInput
              data={userList}
              onSelectAUser={handleSelectAUser}
            />
          )}
          <h3>Pessoas</h3>
          <UserBadge />
        </ModalForm>
      </ModalContainer>
    </Dialog.Portal>
  );
}

export { NewChatModal };
