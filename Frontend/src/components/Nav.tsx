import { Link } from "react-router-dom";

interface IPorp {
  name: string | null;
  resetUser: () => void;
}

// eslint-disable-next-line no-empty-pattern
const Nav = ({ name, resetUser }: IPorp) => {
  const logout = async () => {
    await fetch("http://localhost:3030/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    resetUser();
  };

  let menu;

  if (name === "") {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item active">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item active">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    );
  } else {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item active">
          <Link to="/login" className="nav-link" onClick={logout}>
            Logout
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Home
        </Link>

        <div>{menu}</div>
      </div>
    </nav>
  );
};
export default Nav;
