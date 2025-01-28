import { useContext } from "react";
import { SessionContext } from "../SessionProvider";

export function SideMenu() {
  const sessionContext = useContext(SessionContext);
  if (!sessionContext) {
    throw new Error("Signin must be used within a SessionProvider");
  }
  const { currentUser } = sessionContext;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-[200px] flex flex-col justify-center">
      <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
      <p>
        <strong>Name:</strong> {currentUser?.userName}
      </p>
      <p>
        <strong>Email:</strong> {currentUser?.email}
      </p>
    </div>
  );
}
