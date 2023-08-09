import {
  HomeContainer,
  Aside,
  AsideHeader,
  Main,
  AsideContent,
  ActionsButtons,
  NoMessagesSelected,
} from "./styles";

import logoImage from "../../assets/logo.svg";

import { MagnifyingGlass, PlusCircle, SignOut } from "phosphor-react";

import { ChatsList } from "./components/ChatsList";
import { Chat } from "./components/Chat";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import { NewChatModal } from "../../components/NewChatModal";

import * as Dialog from "@radix-ui/react-dialog";

import NoMessagesImage from "../../assets/no-messages.svg";

function Home() {
  const { chatId } = useParams();
  const { logout } = useAuth();
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
        {chatId ? (
          <Chat chatId={chatId} />
        ) : (
          <NoMessagesSelected>
            <img src={NoMessagesImage} alt="" />
            <strong>Sem mensagens por aqui...</strong>
            <p>Clique em uma conversa</p>
          </NoMessagesSelected>
        )}
      </Main>
    </HomeContainer>
  );
}

export { Home };
