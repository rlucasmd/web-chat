import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { ReactNode, createContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";

interface IUser {
  name: string | null;
  avatar_url: string | null;
  uid: string;
}

interface IAuthContextProvider {
  children: ReactNode;
}

interface IAuthContext {
  login: () => Promise<IUser>;
  logout: () => void;
  user: IUser | undefined;
  signInWithGoogle: () => Promise<void>;
}

const AuthContext = createContext({} as IAuthContext);

function AuthContextProvider({ children }: IAuthContextProvider) {
  const [user, setUser] = useState<IUser | undefined>();
  async function login() {
    return new Promise<IUser>((resolve) => {
      // const userData = {
      //   name: "Ranieri Lucas",
      //   avatar_url: "https://github.com/ranieri3232.png",
      // };
      // setTimeout(() => {
      //   setUser(userData);
      //   resolve(userData);
      // }, 2000);
    });
  }
  function logout() {
    setUser(undefined);
    auth.signOut();
    console.log("User Logout");
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((state) => {
      if (!state) return;

      const { displayName, photoURL, uid } = state;
      setUser({ uid, name: displayName, avatar_url: photoURL });
      console.log({ displayName, photoURL, uid });
    });

    return () => {
      unsubscribe();
    };
  }, []);
  async function signInWithGoogle() {
    // eslint-disable-next-line no-useless-catch
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account " });
      const response = await signInWithPopup(auth, provider);
      console.log(response);
      console.log("signInWithGoogle");
    } catch (err) {
      throw err;
    }
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider, AuthContext };
