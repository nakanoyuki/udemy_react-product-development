import { createContext, useState } from "react";

const SessionContext = createContext();

const SessionProvider = (props: any) => {
  const [currentUser, setCurrentUser] = useState();

  return (
    <SessionContext.Provider value={{ currentUser, setCurrentUser }}>
      {props.children}
    </SessionContext.Provider>
  );
};

export { SessionContext, SessionProvider };
