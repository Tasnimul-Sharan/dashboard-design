import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        {/* <h2 className="text-3xl font-bold text-blue-700">
          Welcome to the Dashboard
        </h2> */}
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-sky-800 text-white">
          <li>
            <Link to="/dashboard">Log In</Link>
          </li>

          <li>
            <Link to="/dashboard/landingpage">Landing Page</Link>
          </li>
          <li>
            <Link to="/dashboard/news">All News</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
