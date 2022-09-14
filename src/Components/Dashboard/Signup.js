import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [updateProfile, updating] = useUpdateProfile(auth);

  const [name, setName] = useState("");
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }

  //   if (loading || updating || sending) {
  //     return <Loading />;
  //   }

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (password.length < 6) {
      setError("password must be in six character or longer");
      return;
    }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl pb-5">
        <h1 className="text-3xl font-bold text-center">SIGN UP HERE</h1>
        <form onSubmit={handleSignUp}>
          <div className="form-control w-full max-w-xs m-7">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter Name"
              className="input input-bordered w-full max-w-xs"
              requird
            />
          </div>
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
            value="Sign Up"
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
