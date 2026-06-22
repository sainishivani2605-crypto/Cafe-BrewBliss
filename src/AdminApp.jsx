import "./AdminApp.css";
import cup from "./assets/cup2.avif";
import backGround from "./assets/backgroung.jpg";
import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Reply from "./components/Reply";
import AdminDashboard from "./components/AdminDashboard";
import Orders from "./components/Order";
import ManageMenu from "./components/ManageMenu";
import Analytics from "./components/Analytics";
import AddMenu from "./components/AddMenu";
import Review from "./components/Review"; 
import Staff from "./components/Staff";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin() {
    if (
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }

  return (
    <div className="container">
      <div className="left">
        <img src={backGround} alt="background" />
      </div>

      <div className="right">
        <div className="login-box">
          <img src={cup} alt="cup" />

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

          <button onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/menu" element={<ManageMenu />} />
         <Route path="/analytics" element={<Analytics />} />
         <Route path="/add-menu" element={<AddMenu />} />
         <Route path="/review" element = {<Review />} />
         <Route path="/reply" element = {<Reply />} />
         <Route path="/staff" element={<Staff />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
