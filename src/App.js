import { useAuth } from "@frontegg/react";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import "./App.css";

function App() {
  const { user, isAuthenticated } = useAuth();

  console.log("*** authed user ****", user);

  const mainStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const linkStyles = {
    margin: "2rem",
  };

  const imageStyles = {
    borderRadius: "50%",
  };
  return (
    <div>
      {isAuthenticated ? (
        <div style={mainStyles}>
          <p>Successfully authenticated</p>
          <img
            style={imageStyles}
            src={user.profilePictureUrl}
            alt={user.name}
          />
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Email Verified: {user.email_verified ? "Yes" : "No"}</p>
          <p>
            Phone Number:{" "}
            {user.phoneNumber ? user.phoneNumber : "Not available"}
          </p>
          <p>Sign in provider: {user.provider}</p>
          <p>Is user verified: {user.verified ? "Yes" : "No"}</p>
          <Link style={linkStyles} to="/account/logout">
            Logout
          </Link>
        </div>
      ) : (
        <div style={mainStyles}>
          <p>hello, you're not authenticated</p>
          <Link style={linkStyles} to="/account/sign-up">
            Signup
          </Link>
          <Link style={linkStyles} to="/account/login">
            Login
          </Link>
        </div>
      )}
    </div>
  );
}

export default App;
