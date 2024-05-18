import { useEffect, useState } from "react";
import { User } from "../utils/types/UserType";

interface IPorp {}

// eslint-disable-next-line no-empty-pattern
const Home = ({}: IPorp) => {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const responce = await fetch("http://localhost:3030/api/user", {
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (responce.status === 200) {
      const userData: User = await responce.json();
      setUser(userData);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <div>id: {user.id}</div>
          <div>name: {user.name}</div>
          <div>email: {user.email}</div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Home;
