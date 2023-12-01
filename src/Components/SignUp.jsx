import React, { useState } from "react";

function LoginForm() {
  const [showLogin, setShowLogin] = useState(true);

  const [loginUsername, setLoginUsername] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginUserData, setLoginUserData] = useState(null);

  const [signupUsername, setSignupUsername] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupUserData, setSignupUserData] = useState(null);

  const toggleForm = () => {
    setShowLogin((prevShowLogin) => !prevShowLogin);
  };

  const handleLogin = () => {
    const user = {
      username: loginUsername,
      email: loginEmail,
    };
    setLoginUserData(user);
  };

  const handleSignUp = () => {
    const user = {
      username: signupUsername,
      email: signupEmail,
    };
    setSignupUserData(user);
  };

  return (
    <div>
      <div className="container">
        <div
          className="form-container"
          style={showLogin ? { display: "block" } : { display: "none" }}
        >
          <h1>Login</h1>
          <form>
            <label htmlFor="loginUsername">Username</label>
            <input
              type="text"
              id="loginUsername"
              name="loginUsername"
              required
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
            />
            <label htmlFor="loginEmail">Email</label>
            <input
              type="email"
              id="loginEmail"
              name="loginEmail"
              required
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </form>
          <p>
            Don't have an account?{" "}
            <a href="#" onClick={toggleForm} id="signup-link">
              Sign up
            </a>
          </p>
        </div>

        <div
          className="form-container"
          style={!showLogin ? { display: "block" } : { display: "none" }}
        >
          <h1>Sign Up</h1>
          <form>
            <label htmlFor="signupUsername">Username</label>
            <input
              type="text"
              id="signupUsername"
              name="signupUsername"
              required
              value={signupUsername}
              onChange={(e) => setSignupUsername(e.target.value)}
            />
            <label htmlFor="signupEmail">Email</label>
            <input
              type="email"
              id="signupEmail"
              name="signupEmail"
              required
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
            />
            <button type="button" onClick={handleSignUp}>
              Sign Up
            </button>
          </form>
          <p>
            Already have an account?{" "}
            <a href="#" onClick={toggleForm} id="login-link">
              Login
            </a>
          </p>
        </div>
      </div>
      <div>
        {(showLogin ? loginUserData : signupUserData) && (
          <div>
            <h2>User Data</h2>
            <p>
              Username: {(showLogin ? loginUserData : signupUserData).username}
            </p>
            <p>Email: {(showLogin ? loginUserData : signupUserData).email}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
