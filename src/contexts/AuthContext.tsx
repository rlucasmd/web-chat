import { GoogleAuthProvider, User, signInWithPopup } from "firebase/auth";
import { ReactNode, createContext, useEffect, useState } from "react";
import { auth, database } from "../services/firebase";
import {
  QueryDocumentSnapshot,
  Timestamp,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

interface IUserData {
  name: string | null;
  avatarUrl?: string;
  bio: string;
  createdAt: Timestamp;
}

interface IUser extends IUserData {
  uid: string;
}

interface IAuthContextProvider {
  children: ReactNode;
}

interface IAuthContext {
  login: () => void;
  logout: () => void;
  user: IUser | undefined;
  signInWithGoogle: () => Promise<void>;
}

const AuthContext = createContext({} as IAuthContext);
const converter = {
  toFirestore: (data: IUserData) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as IUserData,
};

function AuthContextProvider({ children }: IAuthContextProvider) {
  const [user, setUser] = useState<IUser | undefined>();
  function login() {
    console.log("login");
  }
  function logout() {
    setUser(undefined);
    auth.signOut();
    console.log("User Logout");
  }

  async function fetchUserData(user: User) {
    try {
      console.log("fetching data");
      const docRef = doc(database, "users", user.uid).withConverter(converter);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName ?? "Duck Dodgers",
          bio: "Lorem ipsum",
          createdAt: serverTimestamp(),
        });
      }
      const response = await getDoc(docRef);
      const data = response.data();
      if (data) setUser({ ...data, uid: user.uid });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((state) => {
      if (!state) return;
      fetchUserData(state);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  async function signInWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account " });
      const response = await signInWithPopup(auth, provider);
    } catch (err) {
      console.log(err);
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
