import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
import { User } from "./utils/types/UserType";

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      const responce = await fetch("http://localhost:3030/api/user", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (responce.status === 200) {
        const userData: User = await responce.json();
        setUser(userData);
      }

      console.log(2);
    })();
  }, []);

  return (
    <div className="App">
      <Nav name={user?.name || ""} setName={setUser} />

      <main className="form-signin">
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
