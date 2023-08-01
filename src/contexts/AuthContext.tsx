import { GoogleAuthProvider, User, signInWithPopup } from "firebase/auth";
import { ReactNode, createContext, useEffect, useState } from "react";
import { auth, database } from "../services/firebase";
import { QueryDocumentSnapshot, doc, getDoc, setDoc } from "firebase/firestore";

type IUserData = {
  displayName: string;
  photoURL: string;
  email: string;
  groups: string[];
};

type IUser = IUserData & {
  uid: string;
};

interface IAuthContextProvider {
  children: ReactNode;
}

interface IAuthContext {
  login: () => void;
  logout: () => void;
  user: IUser | null;
  signInWithGoogle: () => Promise<void>;
}

const AuthContext = createContext({} as IAuthContext);
const converter = {
  toFirestore: (data: IUserData) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as IUserData,
};

function AuthContextProvider({ children }: IAuthContextProvider) {
  const [user, setUser] = useState<IUser | null>(null);
  function login() {
    console.log("login");
  }
  function logout() {
    setUser(null);
    auth.signOut();
  }

  async function fetchOrSaveUserData(user: User) {
    try {
      // console.log("fetching data");
      const docRef = doc(database, "users", user.uid).withConverter(converter);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          displayName: user.displayName!,
          email: user.email!,
          photoURL: user.photoURL!,
          groups: [],
        });
      }
      const response = await getDoc(docRef);
      const data = response.data();
      if (data) setUser({ ...data, uid: user.uid });
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((state) => {
      if (!state) return;
      fetchOrSaveUserData(state);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  async function signInWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account " });
      await signInWithPopup(auth, provider);
      // console.warn(response);
    } catch (err) {
      console.error(err);
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
