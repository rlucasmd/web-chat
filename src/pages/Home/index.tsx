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
import { Gear, MagnifyingGlass, SignOut } from "phosphor-react";
import { ChatsList } from "./components/ChatsList";
import { Chat } from "./components/Chat";
import { useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";

function Home() {
  const { chatId } = useParams();
  const { logout } = useAuth();
  function handleLogout() {
    logout();
  }
  // console.log(chatId);
  return (
    <HomeContainer>
      <Aside>
        <AsideHeader>
          <div>
            <img src={logoImage} alt="" />
            <ActionsButtons>
              <Button type="button">
                <Gear size={24} />
              </Button>
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
      </Main>
    </HomeContainer>
  );
}

export { Home };
