import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  let location = useLocation();
  const from = location.state?.from?.pathName || "/";

  if (user) {
    navigate(from, { replace: true });
  }
  const handleLogIn = (event) => {
    event.preventDefault();
    if (email !== password) {
      setError("Please enter valid email and password");
    }
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl pb-5">
        <h1 className="text-3xl font-bold text-center">LOG IN HERE</h1>
        <form onSubmit={handleLogIn}>
          <div className="form-control w-full max-w-xs m-7">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email"
              className="input input-bordered w-full max-w-xs"
              requird
            />
          </div>
          <div className="form-control w-full max-w-xs m-7">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
              className="input input-bordered w-full max-w-xs"
              requird
            />
          </div>
          <input
            className="btn btn-accent w-full text-white max-w-xs"
            type="submit"
            value="LOG IN"
          />
        </form>
        <p className="text-red-600">{error}</p>
        <p className="m-5">
          <Link to="/dashboard/signin">
            <button className="btn btn-success px-5 text-white">
              Create a new Account
            </button>
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
