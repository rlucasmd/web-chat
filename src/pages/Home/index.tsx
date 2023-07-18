import {
  HomeContainer,
  Aside,
  AsideHeader,
  Main,
  AsideContent,
} from "./styles";
import logoImage from "../../assets/logo.svg";
import { Input } from "../../components/Input";
import { MagnifyingGlass } from "phosphor-react";
import { ChatsList } from "./components/ChatsList";
import { Chat } from "./components/Chat";

function Home() {
  return (
    <HomeContainer>
      <Aside>
        <AsideHeader>
          <img src={logoImage} alt="" />
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
