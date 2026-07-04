
// export default App;
import axios from "axios";
import "./AdminApp.css";
import cup from "./assets/cup2.avif";
import backGround from "./assets/backgroung.jpg";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Reply from "./components/Reply";
import AdminDashboard from "./components/AdminDashboard";
import Orders from "./components/Order";
import ManageMenu from "./components/ManageMenu";
import Analytics from "./components/Analytics";
import AddMenu from "./components/AddMenu";
import Review from "./components/Review"; 
import Register from "./components/Register";
import Staff from "./components/Staff";
import Addorder from "./components/Addorder";


import Home from "../my-app/src/components/Home";
import Menu from "../my-app/src/components/Menu";
import About from "../my-app/src/components/About";
import Contact from "../my-app/src/components/Contact";

import logoImg from "../my-app/src/logo.jpeg"; 


import { Outlet, Link } from "react-router-dom";
import MyOrders from "../my-app/src/components/MyOrders";

const CustomerLayout = () => {
  const navigate = useNavigate();
  return (
    <div>
    
      <nav className="navbar">
        <div className="logo">
          <img src={logoImg} alt="logo" className="navbar-logo" />
         
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <button onClick={() => navigate("/register")} className='buttn'>Register</button>
          <button onClick={() => navigate("/admin")} className='buttn'>Login</button>
        </ul>
      </nav>
    
      <Outlet />
    </div>
  );
};


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

 const handleLogin = async () => {
    try {
        const response = await axios.post(
            "http://localhost:5000/api/users/login",
            {
                email,
                password
            }
        );
        console.log(response.data);

        localStorage.setItem("token", response.data.token);

        alert("Login Successful");

        if (response.data.user.role === "admin") {
            navigate("/dashboard");
        } else {
            navigate("/menu");
        }

    } catch (err) {
        console.log("Full Error:", err);
        console.log("Response:", err.response);
        console.log("Data:", err.response?.data);
        console.log("Status:", err.response?.status);

        alert(err.response?.data?.message || "Login Failed");
    }
};

  return (
    <div className="container">
      <div className="left">
        <img src={backGround} alt="background" />
      </div>

      <div className="right">
        <div className="login-box">
          <img className="cupimage" src={cup} alt="cup" />

          <div className="txt">
            <h1>Welcome Back</h1>
            <h3>Login to continue</h3>
          </div>

          <br />

          <input
            type="email"
            placeholder="✉️ Enter the email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <br />

          <input
            type="password"
            placeholder="Enter the password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <br />

          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
    
      <Route element={<CustomerLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/myorders" element={<MyOrders />} />
      </Route>

   
      <Route path="/admin" element={<Login />} />
      <Route path="/register" element={<Register />} /> 
      <Route path="/dashboard" element={<AdminDashboard />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/managemenu" element={<ManageMenu />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/add-menu" element={<AddMenu />} />
      <Route path="/review" element={<Review />} />
      <Route path="/reply" element={<Reply />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/addorder" element={<Addorder />} />
     
<Route path="/addorder/:id" element={<Addorder />} />
<Route path="/editorder/:id" element={<Addorder />} />
    </Routes>
  );
}

export default App;
