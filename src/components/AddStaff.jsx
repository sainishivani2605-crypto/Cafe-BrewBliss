import { Link } from "react-router-dom";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import '../style/mediaqueries.css';
import cupimg from "../assets/cup2.avif";
import Sidebar from "./Sidebar";
 import { useNavigate } from "react-router-dom";
 import "../style/AddStaff.css";
import { useState } from "react";
import axios from "axios";
function AddStaff(){

    const [name, setName] = useState("");
const [role, setRole] = useState("Chef");
const [experience, setExperience] = useState("");
const [shift, setShift] = useState("Morning");
const [status, setStatus] = useState("Active");
const [joiningDate, setJoiningDate] = useState("");
const [phone, setPhone] = useState("");
const navigate = useNavigate();

const handleSave = async (e) => {

    e.preventDefault();

    try {

        const token = localStorage.getItem("token");

        await axios.post(
            "http://localhost:5000/api/staff",
            {
                name,
                role,
                experience,
                shift,
                status,
                joiningDate,
                phone
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        alert("Staff added successfully!");

        navigate("/staff");

    } catch (err) {

        console.log(err);

        alert(err.response?.data?.message || "Failed to add staff");

    }

};
    return(
    <div className="AddStaff-container">
        <Sidebar />

        <div className="Addstaff">

            <h1>Add Staff</h1>
            <div className="addstaffform">
            <form>
                <label>Name of employee</label>
     <input
    type="text"
    value={name}
    placeholder="Enter the name"
    onChange={(e) => setName(e.target.value)}

/>
        <select
    value={role}
    onChange={(e) => setRole(e.target.value)}
>
    <option>Chef</option>
    <option>Manager</option>
    <option>Waiter</option>
    <option>Cashier</option>
    <option>Barista</option>
</select>
<label>Experience</label>
   <input
    type="Number"
    value={experience}
    onChange={(e) => setExperience(e.target.value)}
/>
<label>Shift</label>
<select
    value={shift}
    onChange={(e) => setShift(e.target.value)}
>
    <option>Morning</option>
    <option>Evening</option>
</select>
<label>Status</label>
<select
    value={status}
    onChange={(e) => setStatus(e.target.value)}
>
    <option>Active</option>
    <option>On Leave</option>
</select>
<label>Joining date</label>
   <input
    type="date"
    value={joiningDate}
    onChange={(e) => setJoiningDate(e.target.value)}
/>
<label>Phone number</label>
   <input
    type="text"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
/>
<div className="savebtn">
<button type="button" onClick={handleSave}>
    Save
</button>
<button>cancel</button>
</div>
            </form>
            </div>
        </div>
    </div>
    );
}
export default AddStaff;