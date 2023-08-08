import {
  HomeContainer,
  Aside,
  AsideHeader,
  Main,
  AsideContent,
  ActionsButtons,
} from "./styles";
import logoImage from "../../assets/logo.svg";
import { Input } from "../../components/Input";
import { Gear, MagnifyingGlass, PlusCircle, SignOut } from "phosphor-react";
import { ChatsList } from "./components/ChatsList";
import { Chat } from "./components/Chat";
// import { useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";
import { AutocompleteInput } from "../../components/AutocompleteInput";
import * as Dialog from "@radix-ui/react-dialog";
import { NewChatModal } from "../../components/NewChatModal";
// import { useChats } from "../../hooks/useChats";

function Home() {
  // const { chatId } = useParams();
  const { logout } = useAuth();
  // const { chats } = useChats("I6iKY52tzcgvVcFCYVhl2TBw2pL2");
  function handleLogout() {
    logout();
  }
  return (
    <HomeContainer>
      <Aside>
        <AsideHeader>
          <div>
            <img src={logoImage} alt="" />
            <ActionsButtons>
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <Button type="button">
                    <PlusCircle size={24} />
                  </Button>
                </Dialog.Trigger>
                <NewChatModal />
              </Dialog.Root>
              <Button type="button" onClick={handleLogout}>
                <SignOut size={24} />
              </Button>
            </ActionsButtons>
          </div>
          <Input
            placeholder="Procure uma conversa"
            icon={<MagnifyingGlass size={16} weight="bold" />}
          />
        </AsideHeader>
        <AsideContent>
          <ChatsList />
        </AsideContent>
      </Aside>
      <Main>
        <Chat />
        {/* <AutocompleteInput /> */}
      </Main>
    </HomeContainer>
  );
}

export { Home };
