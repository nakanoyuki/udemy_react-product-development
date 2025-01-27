import { createContext, useState } from "react";

interface User {
  id: string;
  userName: string;
}

interface SessionContextType {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

const SessionProvider = (props: any) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  return (
    <SessionContext.Provider value={{ currentUser, setCurrentUser }}>
      {props.children}
    </SessionContext.Provider>
  );
};

export { SessionContext, SessionProvider };
