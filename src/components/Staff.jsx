import Sidebar from "./Sidebar";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
import cupimg from "../assets/cup2.avif";
import "../style/Staff.css";
import { FaSearch } from "react-icons/fa";
import {
  MdGroups,      // Employees
  MdVerifiedUser,// Active Staff
  MdEventBusy,   // On Leave
  MdPersonAdd,   // New Joiners
} from "react-icons/md";
function Staff(){
    return(
        <div className="Staff-container">
            <Sidebar />
            <div className="Staff">
                <div className="staff">
                    <h1 id="managestaff">Manage Staff</h1>
                    <img src={cupimg} />
                    <button>Add Staff</button>
                    <div className="input">
                             <label htmlFor="search"></label>
                                <FaSearch className="search-icon" />
                                <input className="search" type="search" placeholder="Search"></input>
                                </div>
                               
                </div>
                <div className="Staff-card">
                    <div className="staffcard">
                        <h2><MdGroups />Total Employee</h2>
                        <p>30</p>
                    </div>

                       <div className="staffcard">
                        <h2><MdVerifiedUser />Active Staff</h2>
                        <p>25</p>
                    </div>

                       <div className="staffcard">
                        <h2><MdEventBusy /> On Leave</h2>
                        <p>2</p>
                    </div>

                       <div className="staffcard">
                        <h2><MdPersonAdd /> New Joiner</h2>
                        <p>3</p>
                    </div>
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
        <th>Status</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>EMP001</td>
        <td>Rahul Kumar</td>
        <td>Barista</td>
        <td>20-06-2026</td>
        <td>09:00 AM</td>
        <td>06:00 PM</td>
        <td>Present</td>
      </tr>

      <tr>
        <td>EMP002</td>
        <td>Priya Sharma</td>
        <td>Cashier</td>
        <td>20-06-2026</td>
        <td>-</td>
        <td>-</td>
        <td>Absent</td>
      </tr>

      <tr>
        <td>EMP003</td>
        <td>Amit Singh</td>
        <td>Chef</td>
        <td>20-06-2026</td>
        <td>10:00 AM</td>
        <td>07:00 PM</td>
        <td>Present</td>
      </tr>

        <tr>
        <td>EMP003</td>
        <td>Amrita Bhati</td>
        <td>Chef</td>
        <td>20-06-2026</td>
        <td>10:00 AM</td>
        <td>07:00 PM</td>
        <td>Present</td>
      </tr>

        <tr>
        <td>EMP003</td>
        <td>Kanika Rao</td>
        <td>Manager</td>
        <td>20-06-2026</td>
        <td>10:00 AM</td>
        <td>07:00 PM</td>
        <td>Present</td>
      </tr>

        <tr>
        <td>EMP003</td>
        <td>Shivam Singh</td>
        <td>Waiter</td>
        <td>20-06-2026</td>
        <td>10:00 AM</td>
        <td>07:00 PM</td>
        <td>Present</td>
      </tr>
      <p id="Vieww">View All</p>
    </tbody>

  </table>
</div>
<h2 id="Detail">Details of Staff</h2>
<div className="Aboutteam">
    <div className="team-card">
        <h2 id="NameofStaff">Kanika Rao</h2>
        <p>MANAGER</p>
        <p>kanika@gmail.com</p>
        <h3 id="Rating">4.5⭐</h3>
        <p>Salary 500000</p>
        <button>✉️Email</button>
        <button>📞Call</button>

    </div>

    <div className="team-card">
        <h2 id="NameofStaff">Priya Sharma</h2>
        <p>CASHIER</p>
        <p>sharma@gmail.com</p>
        <h3 id="Rating">4.4⭐</h3>
        <p>Salary 300000</p>
        <button>✉️Email</button>
        <button>📞Call</button>

    </div>

    <div className="team-card">
        <h2 id="NameofStaff">Amit Singh </h2>
        <p>CHEF</p>
        <p>amit@gmail.com</p>
        <h3 id="Rating">4.5⭐</h3>
        <p>Salary 400000</p>
        <button>✉️Email</button>
        <button>📞Call</button>

    </div>

    <div className="team-card">
        <h2 id="NameofStaff">Amrita Bhati</h2>
        <p>CHEF</p>
        <p>amrita@gmail.com</p>
        <h3 id="Rating">4.5⭐</h3>
        <p>Salary 400000</p>
        <button>✉️Email</button>
        <button>📞Call</button>

    </div>

    <div className="team-card">
        <h2 id="NameofStaff">Rahul Kumar</h2>
        <p>BARISTA</p>
        <p>rahul@gmail.com</p>
        <h3 id="Rating">4.1⭐</h3>
        <p>Salary 400000</p>
        <button>✉️Email</button>
        <button>📞Call</button>

    </div>

     <div className="team-card">
        <h2 id="NameofStaff">Shivam Singh</h2>
        <p>WAITER</p>
        <p>shivam@gmail.com</p>
        <h3 id="Rating">4.0⭐</h3>
        <p>Salary 200000</p>
        <button>✉️Email</button>
        <button>📞Call</button>

    </div>

      <div className="team-card">
        <h2 id="NameofStaff">Anshul Singh</h2>
        <p>CHEF</p>
        <p>anshul@gmail.com</p>
        <h3 id="Rating">4.0⭐</h3>
        <p>Salary 400000</p>
        <button>✉️Email</button>
        <button>📞Call</button>

    </div>
</div>

            </div>
        </div>
    );
}
export default Staff;