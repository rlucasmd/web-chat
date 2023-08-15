import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButton,
  ErrorMessage,
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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type IUserData = {
  displayName: string;
  email: string;
  photoURL: string;
};

type IUser = IUserData & {
  id: string;
};

const newChatSchema = z.object({
  name: z.string().max(60, "Nome do grupo muito comprido").optional(),
  members: z.array(
    z.object({
      displayName: z.string(),
      email: z.string(),
      photoURL: z.string(),
      id: z.string(),
    })
  ).min(1, "Deve se criar um conversa com pelo menos uma usuário")
  .max(255, "Não é permitido criar grupso com mais de 255 pessoas"),
}).refine(({ members, name}) => {
  if(members.length > 1 && name?.trim() === "") return false;

  return true;
}, {
  message: "Preencha o campo nome para o grupo",
  path: ["name"]
});

type NewChatData = z.infer<typeof newChatSchema>;

const converter = {
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as IUserData,
  toFirestore: (data: IUserData) => data,
};

function NewChatModal() {
  const { user } = useAuth();
  const [userList, setUserList] = useState<IUser[]>([]);
  // const [selectedUsers, setSelectedUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);

  const { handleSubmit, register, unregister, setValue, watch, formState: { errors } } = useForm<NewChatData>({
    resolver: zodResolver(newChatSchema),
    defaultValues: {
      name: "",
      members: []
    }
  });

  function handleCreateChatSubmit(data : NewChatData){
    console.log(data);
    // console.log(errors);
  }
  // console.log(errors);

  const members = watch("members");

  function handleSelectAUser(user: IUser) {
    const findUser = members.find(
      (selectedUser) => selectedUser.id === user.id,
    );
    if (findUser) return;
    setValue("members", [...members, user]);
    // setSelectedUsers((state) => [...state, user]);
  }
  function handleRemoveASelectedUser(id: string) {
    setValue("members", members.filter((user) => user.id !== id));
    // setSelectedUsers((state) => state.filter((user) => user.id !== id));
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

    register("members");

    return () => {
      unregister("members", { keepDefaultValue: true });
    }
  }, [register, unregister]);
  const isCreatingAGroup = members.length > 1;
  // console.log("render");
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
        <ModalForm onSubmit={handleSubmit(handleCreateChatSubmit)}>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div>
              <AutocompleteInput
                data={userList}
                onSelectAUser={handleSelectAUser}
                placeholder="Adicione pelo menos um usuário"
                error={!!errors.members}
              />
              {errors.members && <ErrorMessage>{errors.members.message}</ErrorMessage>}
            </div>
          )}

          {members.length > 1 ? <h3>Pessoas</h3> : ""}
          <UsersListContainer>
            {members.map((user) => (
              <UserBadge
                key={user.id}
                displayName={user.displayName}
                photoURL={user.photoURL}
                onRequestClose={() => handleRemoveASelectedUser(user.id)}
              />
            ))}
          </UsersListContainer>
          {isCreatingAGroup && (
            <div>
              <Input error={!!errors.name} placeholder="Digite um nome para o grupo" {...register("name")}/>
              { errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
            </div>
          )}
          <FormFooter>
            <Button >
              {isCreatingAGroup ? "Criar grupo" : "Criar conversa"}
            </Button>
          </FormFooter>
        </ModalForm>
      </ModalContainer>
    </Dialog.Portal>
  );
}

export { NewChatModal };
