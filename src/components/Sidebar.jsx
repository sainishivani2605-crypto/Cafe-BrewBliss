import cupimg from "../assets/cup2.avif";
import "../style/Sidebar.css";
import logo1 from "../assets/logo.png";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import app from "../AdminApp";
import {
    FaHome,
    FaClipboardList,
    FaUtensils,
    FaStar,
    FaUsers,
    FaSignOutAlt
} from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Sidebar() {
    const navigate = useNavigate();
    const handleLogout = () => {
  const confirmLogout = window.confirm(
    "Are you sure you want to logout?"
  );

  if (confirmLogout) {
    navigate("/");
  }
};

    return (
        <div className="sidebar">
            
            <h2>Brew Bliss Cafe</h2>
            <img src={logo1} alt="" className="cupimg" />

            <ul>
                <li><FaHome />
                <Link to="/dashboard">Dashboard</Link> </li>

                <li><FaClipboardList />
                <Link to="/orders" >Orders</Link></li>

                <li><FaUtensils /><Link
                to="/menu"> Menu</Link></li>

                <li><FaStar />
                <Link to="/review">Reviews</Link></li>

                <li><FaUsers /> <Link to="/staff"> Staff</Link></li>

                 <li><FaClipboardList />
                <Link to="/analytics" >Analytics</Link></li>
                    
                <li id="logout" onClick={handleLogout}><FaSignOutAlt /><Link>Logout</Link></li>
            </ul>
        </div>
    );
}
export default Sidebar;