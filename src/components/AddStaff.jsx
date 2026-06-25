import { Link } from "react-router-dom";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import '../style/mediaqueries.css';
import cupimg from "../assets/cup2.avif";
import Sidebar from "./Sidebar";
 import { useNavigate } from "react-router-dom";

function AddStaff(){
    return(
    <div className="AddStaff-container">
        <Sidebar />
    </div>
    );
}
export default Addstaff;