import illustrationImage from "../../assets/illustration.svg";
import logoImage from "../../assets/logo.svg";
import {
  LoginContainer,
  Aside,
  Main,
  Content,
  Separator,
  Form,
} from "./styles";
import googleLogo from "../../assets/google-logo.svg";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { SignIn } from "phosphor-react";
function Login() {
  return (
    <LoginContainer>
      <Aside>
        <div>
          <img src={illustrationImage} alt="" />
          <h1>Toda equipe precisa de{"\n"} uma boa comunicação</h1>
          <p>
            Comunique-se com seus colegas de{"\n"} trabalho de forma simples!
          </p>
        </div>
      </Aside>
      <Main>
        <img src={logoImage} alt="" />

        <Content>
          <Button variant="google">
            <img src={googleLogo} alt="" />
            Entre com sua conta Google
          </Button>
          <Separator>ou entre com uma senha</Separator>
          <Form>
            <div>
              <label htmlFor="username">Usuário</label>
              <Input placeholder="Digite o nome de usuário" id="username" />
            </div>
            <div>
              <label htmlFor="password">Senha</label>
              <Input
                placeholder="Digite a sua senha"
                id="password"
                type="password"
              />
            </div>
            <Button type="button">
              <SignIn size={24} weight="bold" />
              Acessar
            </Button>
          </Form>
        </Content>
      </Main>
    </LoginContainer>
  );
}

export { Login };
