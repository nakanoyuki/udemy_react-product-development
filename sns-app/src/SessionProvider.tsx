import { createContext, ReactNode, useEffect, useState } from "react";
import { authRepository } from "./repositories/auth";

interface Props {
  children: ReactNode; // 子要素を受け取るプロパティ
}
interface User {
  id: string;
  userName: string;
}

interface SessionContextType {
  currentUser: User | undefined;
  setCurrentUser: (user: User | undefined) => void;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

const SessionProvider = (props: Props) => {
  const [currentUser, setCurrentUser] = useState<User | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setSession();
  });
  const setSession = async () => {
    const currentUser = await authRepository.getCurrentUser();
    setCurrentUser(currentUser);
    setIsLoading(false);
  };
  if (isLoading) return <div>LOADING...</div>;

  return (
    <SessionContext.Provider value={{ currentUser, setCurrentUser }}>
      {props.children}
    </SessionContext.Provider>
  );
};

export { SessionContext, SessionProvider };
