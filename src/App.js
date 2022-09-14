import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Shared/Header";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Dashboard/Login";
// import LandingPage from "./Components/Dashboard/LandingPage";
import AllNews from "./Components/Dashboard/AllNews";
import Signup from "./Components/Dashboard/Signup";
import LandingPage from "./Components/Dashboard/LandingPage/LandingPage";
import RequireAuth from "./Components/Dashboard/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Login />}></Route>
          <Route path="signin" element={<Signup />}></Route>
          <Route path="landingpage" element={<LandingPage />}></Route>
          <Route
            path="news"
            element={
              <RequireAuth>
                <AllNews />
              </RequireAuth>
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
