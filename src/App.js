import { Link } from "react-router-dom";
import "./App.css";
import ViewBookmarks from "./components/ViewBookmarks";
import { useState, useEffect } from "react";
import EditBookmarks from "./components/EditBookmark";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = (e) => {
    e.preventfault();

    if (username === "mishan" && password === "mishan123") {
      setAuthenticated(true);
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="container">
      {authenticated ? (
        <>
          <ViewBookmarks />
          <EditBookmarks />
        </>
      ) : (
        <div className="login">
          <from onSubmit={handleLogin}>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit">Login</button>
          </from>
        </div>
      )}
    </div>
  );
}

export default App;
