import Sidebar from "./Sidebar";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import '../style/mediaqueries.css';
import { Link, Navigate } from "react-router-dom";
import cupimg from "../assets/cup2.avif";
import "../style/Staff.css";
import { FaSearch,FaPlus} from "react-icons/fa";
 import { useNavigate } from "react-router-dom";
 import { useEffect, useState } from "react";
import axios from "axios";


import {
  MdGroups,      // Employees
  MdVerifiedUser,// Active Staff
  MdEventBusy,   // On Leave
  MdPersonAdd,   // New Joiners
} from "react-icons/md";
function Staff(){
  const [attendance, setAttendance] = useState([]);
  const [staff, setStaff] = useState([]);
   const navigate = useNavigate();

const handleAddStaff = () => {
    navigate("/addstaff");
};

  useEffect(() => {

    const fetchData = async () => {

        try {

            const token = localStorage.getItem("token");

            // Fetch Staff
            const staffResponse = await axios.get(
                "http://localhost:5000/api/staff",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setStaff(staffResponse.data);

            // Fetch Attendance
            const attendanceResponse = await axios.get(
                "http://localhost:5000/api/attendance",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setAttendance(attendanceResponse.data);

        } catch (err) {

            console.log(err);

        }

    };

    fetchData();

}, []);
useEffect(() => {

    const fetchAttendance = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                "http://localhost:5000/api/attendance",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setAttendance(response.data);

        } catch (err) {

            console.log(err);

        }

    };

    fetchAttendance();

}, []);

    return(
        <div className="Staff-container">
            <Sidebar />
            <div className="Staff">
                <div className="staff">
                    <h1 id="managestaff">Manage Staff</h1>
                    <img src={cupimg} />
                    <button onClick={handleAddStaff}>Add Staff</button>
         <button
    className="attendance-btn"
    onClick={() => navigate("/attendance")}
>
    <FaPlus />
    Mark Attendance
</button>
                 
                               
                </div>
                <div className="Staff-card">
                    <div className="staffcard">
                        <h2><MdGroups />Total Employee</h2>
<p>{staff.length}</p>                    </div>

                       <div className="staffcard">
                        <h2><MdVerifiedUser />Active Staff</h2>
<p>{staff.filter(s => s.status === "Active").length}</p>                    </div>

                       <div className="staffcard">
                        <h2><MdEventBusy /> On Leave</h2>
<p>{staff.filter(s => s.status === "On Leave").length}</p>                    </div>

                       <div className="staffcard">
                        <h2><MdPersonAdd /> New Joiner</h2>
<p>
{
staff.filter(s => {

const days =
(Math.abs(new Date() - new Date(s.joiningDate))) /
(1000 * 60 * 60 * 24);

return days <= 30;

}).length
}
</p>                    </div>
            </div>

            <div className="attendance-container">
  <h2>Staff Attendance</h2>

  <table>
    <thead>
      <tr>
      <th>Employee ID</th>
<th>Name</th>
<th>Role</th>
<th>Date</th>
<th>Check In</th>
<th>Check Out</th>
<th>Hours</th>
<th>Status</th>
<th>Action</th>
      </tr>
    </thead>

   <tbody>

{
attendance.map(record => (

<tr key={record._id}>

    <td>{record.staff._id.slice(-6).toUpperCase()}</td>

    <td>{record.staff.name}</td>

    <td>{record.staff.role}</td>

    <td>{new Date(record.date).toLocaleDateString()}</td>

    <td>{record.checkIn || "-"}</td>

    <td>{record.checkOut || "-"}</td>

    <td>
        {
            record.checkIn && record.checkOut
                ? (() => {

                    const [inHour, inMinute] = record.checkIn.split(":").map(Number);
                    const [outHour, outMinute] = record.checkOut.split(":").map(Number);

                    let inMinutes = inHour * 60 + inMinute;
                    let outMinutes = outHour * 60 + outMinute;

                    // If checkout is after midnight
                    if (outMinutes < inMinutes) {
                        outMinutes += 24 * 60;
                    }

                    const hours = ((outMinutes - inMinutes) / 60).toFixed(1);

                    return `${hours} hrs`;

                })()
                : "-"
        }
    </td>

    <td>
        <span
            style={{
                color:
                    record.status === "Present"
                        ? "green"
                        : record.status === "Absent"
                        ? "red"
                        : "orange",
                fontWeight: "bold"
            }}
        >
            {record.status}
        </span>
    </td>

<td>
<div className="Editbuttns">
<button>Edit</button>

<button>Delete</button>
</div>
</td>

</tr>

))
}

</tbody>

  </table>
  <p id="Vieww">View All</p>
</div>
<h2 id="Detail">Details of Staff</h2>
<div className="Aboutteam">

{
    staff.map(member => (

        <div className="team-card" key={member._id}>

            <h2 id="NameofStaff">
                {member.name}
            </h2>

            <p>{member.role.toUpperCase()}</p>

            <p>
                Experience: {member.experience} yr
            </p>

            <p>
                Shift: {member.shift}
            </p>

            <p>
                Status:
                {" "}
                <span
                    style={{
                        color:
                            member.status === "Active"
                                ? "green"
                                : "orange",
                        fontWeight: "bold"
                    }}
                >
                    {member.status}
                </span>
            </p>

            <p>
                Joined:
                {" "}
                {new Date(member.joiningDate).toLocaleDateString()}
            </p>

        </div>

    ))
}

</div>

            </div>
        </div>
    );
}
export default Staff;