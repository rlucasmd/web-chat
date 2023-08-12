import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButton,
  FormFooter,
  ModalContainer,
  ModalForm,
  ModalTitle,
  Overlay,
  UsersListContainer,
} from "./styles";
import { X } from "phosphor-react";
import { useEffect, useState } from "react";
import {
  QueryDocumentSnapshot,
  collection,
  documentId,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { database } from "../../services/firebase";
import { AutocompleteInput } from "../AutocompleteInput";
import { LoadingSpinner } from "../LoadingSpinner";
import { Input } from "../Input";
import { UserBadge } from "./components/UserBadge";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../Button";

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
  const { user } = useAuth();
  const [userList, setUserList] = useState<IUser[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);

  function handleSelectAUser(user: IUser) {
    const findUser = selectedUsers.find(
      (selectedUser) => selectedUser.id === user.id,
    );
    if (findUser) return;
    setSelectedUsers((state) => [...state, user]);
  }
  function handleRemoveASelectedUser(id: string) {
    setSelectedUsers((state) => state.filter((user) => user.id !== id));
  }

  async function fetchData() {
    // console.log("fetch data");
    setLoading(true);
    const userRef = query(
      collection(database, "user"),
      where(documentId(), "!=", user?.uid),
    ).withConverter(converter);
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
  const isCreatingAGroup = selectedUsers.length > 1;
  return (
    <Dialog.Portal>
      <Overlay />
      <ModalContainer>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <ModalTitle>
          {isCreatingAGroup ? "Novo grupo" : "Nova Conversa"}
        </ModalTitle>
        <ModalForm>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <AutocompleteInput
              data={userList}
              onSelectAUser={handleSelectAUser}
            />
          )}

          {selectedUsers.length > 1 ? <h3>Pessoas</h3> : ""}
          <UsersListContainer>
            {selectedUsers.map((user) => (
              <UserBadge
                key={user.id}
                displayName={user.displayName}
                photoURL={user.photoURL}
                onRequestClose={() => handleRemoveASelectedUser(user.id)}
              />
            ))}
          </UsersListContainer>
          {isCreatingAGroup && (
            <Input placeholder="Digite um nome para o grupo" />
          )}
          <FormFooter>
            <Button>
              {isCreatingAGroup ? "Criar grupo" : "Criar conversa"}
            </Button>
          </FormFooter>
        </ModalForm>
      </ModalContainer>
    </Dialog.Portal>
  );
}

export { NewChatModal };
