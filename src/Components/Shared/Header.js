import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
// import auth from "../../firebase.init";
import pic from "../../images/best-free-dashboard-software-thumbnail.png";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const menuItems = (
    <>
      {/* {user && ( */}
      {/* <li>
        <Link className="text-2xl" to="/dashboard">
          Dashboard
        </Link>
      </li> */}
      {/* )} */}

      {user ? (
        <button onClick={logOut} className="btn btn-active btn-ghost">
          Log out
        </button>
      ) : (
        <li>
          <Link className="text-2xl" to="/dashboard">
            Dashboard
          </Link>
        </li>
      )}
      {/* <li className="">{user && <p>{user.displayName}</p>}</li> */}
    </>
  );

  return (
    <div class="navbar bg-sky-800 text-white">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <div className="flex justify-items-center mb-8">
          <Link to="/" class="btn btn-ghost normal-case text-xl">
            <img className="w-24" src={pic} alt="" />
          </Link>
        </div>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-vertical p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <label
          tabindex="1"
          for="dashboard-sidebar"
          class="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Header;
