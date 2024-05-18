import { SyntheticEvent, useState } from "react";
import { UserLogin } from "../utils/types/UserType";
import { Navigate } from "react-router-dom";

interface IPorp {
  resetUser: () => void;
}

// eslint-disable-next-line no-empty-pattern
const Login = ({ resetUser }: IPorp) => {
  const [redirect, setRedirect] = useState<boolean>(false);

  const [user, setUser] = useState<UserLogin>({
    email: "",
    password: "",
  });

  const submitLogin = async (e: SyntheticEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3030/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(user),
    });

    if (response.status === 200) {
      resetUser();
      setRedirect(true);
    } else {
      alert("Something went wrong, please try again later");
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <form onSubmit={submitLogin}>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

      <input
        type="email"
        className="form-control my-2 rounded"
        placeholder="Email Address"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        required
      />

      <input
        type="password"
        className="form-control my-2 rounded"
        placeholder="Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        required
      />

      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
    </form>
  );
};

export default Login;
