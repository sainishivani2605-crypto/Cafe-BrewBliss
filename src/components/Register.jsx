import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../style/mediaqueries.css';
import cup from "../assets/cup2.avif";
import backGround from "../assets/backgroung.jpg";
import cafeshopimg from "../assets/cafeshop.jpg";
import "../style/Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    alert("Welcome to Cafe Brew Bliss ☕");
    navigate("/");
  };

  return (
    <div className="register-container">

     
      <div className="left-side">
        <div className="overlay"></div>
        <img src={cafeshopimg} alt="cafe" />
        <div className="left-text">
          <h1>Cafe Brew Bliss ☕</h1>
          <p>Where every sip feels like home</p>
        </div>
      </div>

      
      <div className="right-side">
        <div className="form-box">

          <img src={cup} className="cupimgs" alt="cup" />

          <h2>Create Account</h2>
          <p>Register to explore the café experience</p>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleRegister}>
            Register
          </button>

        </div>
      </div>
    </div>
  );
}

export default Register;