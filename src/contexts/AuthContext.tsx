import { ReactNode, createContext, useState } from "react";

interface IUser {
  name: string;
  avatar_url: string;
}

interface IAuthContextProvider {
  children: ReactNode;
}

interface IAuthContext {
  login: () => Promise<IUser>;
  logout: () => void;
  user: IUser | undefined;
}

const AuthContext = createContext({} as IAuthContext);

function AuthContextProvider({ children }: IAuthContextProvider) {
  const [user, setUser] = useState<IUser | undefined>();
  async function login() {
    return new Promise<IUser>((resolve) => {
      const userData = {
        name: "Ranieri Lucas",
        avatar_url: "https://github.com/ranieri3232.png",
      };
      setTimeout(() => {
        setUser(userData);
        resolve(userData);
      }, 2000);
    });
  }
  function logout() {
    setUser(undefined);
    console.log("User Logout");
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider, AuthContext };
