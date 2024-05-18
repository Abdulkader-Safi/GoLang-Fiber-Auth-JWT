import { User } from "../utils/types/UserType";

interface IPorp {
  user: User | null;
}

// eslint-disable-next-line no-empty-pattern
const Home = ({ user }: IPorp) => {
  return (
    <div>
      {user ? (
        <div>
          <div>id: {user.id}</div>
          <div>name: {user.name}</div>
          <div>email: {user.email}</div>
        </div>
      ) : (
        <div>You are not logged in</div>
      )}
    </div>
  );
};

export default Home;
