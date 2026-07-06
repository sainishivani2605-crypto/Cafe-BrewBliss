import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import "../style/Attendance.css";


function AddAttendance() {

    const navigate = useNavigate();

    const [staffList, setStaffList] = useState([]);

    const [staff, setStaff] = useState("");
    const [date, setDate] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [status, setStatus] = useState("Present");

    // Fetch Staff
    useEffect(() => {

        const fetchStaff = async () => {

            try {

                const token = localStorage.getItem("token");

                const response = await axios.get(
                    "http://localhost:5000/api/staff",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                setStaffList(response.data);

            } catch (err) {

                console.log(err);

            }

        };

        fetchStaff();

    }, []);

    // Save Attendance

    const handleSave = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            await axios.post(

                "http://localhost:5000/api/attendance",

                {

                    staff,
                    date,
                    checkIn,
                    checkOut,
                    status

                },

                {

                    headers: {

                        Authorization: `Bearer ${token}`

                    }

                }

            );

            alert("Attendance marked successfully");

            navigate("/attendance");

        }

        catch (err) {

            console.log(err);

            alert(err.response?.data?.message || "Something went wrong");

        }

    };

    return (

        <div className="AddAttendance-container">

            <Sidebar />

            <div className="attendance-form-container">

                <h1>Mark Attendance</h1>

                <form onSubmit={handleSave}>

                    <label>Employee</label>

                    <select
                        value={staff}
                        onChange={(e) => setStaff(e.target.value)}
                        required
                    >

                        <option value="">
                            Select Employee
                        </option>

                        {

                            staffList.map(member => (

                                <option
                                    key={member._id}
                                    value={member._id}
                                >

                                    {member.name} ({member.role})

                                </option>

                            ))

                        }

                    </select>

                    <label>Date</label>

                    <input

                        type="date"

                        value={date}

                        onChange={(e) => setDate(e.target.value)}

                        required

                    />

                    <label>Status</label>

                    <select

                        value={status}

                        onChange={(e) => {

                            setStatus(e.target.value);

                            if (

                                e.target.value === "Absent" ||

                                e.target.value === "Leave"

                            ) {

                                setCheckIn("");

                                setCheckOut("");

                            }

                        }}

                    >

                        <option>Present</option>

                        <option>Absent</option>

                        <option>Leave</option>

                    </select>

                    {

                        status === "Present" &&

                        <>

                            <label>Check In</label>

                            <input

                                type="time"

                                value={checkIn}

                                onChange={(e) => setCheckIn(e.target.value)}

                                required

                            />

                            <label>Check Out</label>

                            <input

                                type="time"

                                value={checkOut}

                                onChange={(e) => setCheckOut(e.target.value)}

                                required

                            />

                        </>

                    }

                    <div className="attendance-buttons">

                        <button
                            type="submit"
                            className="save-btn"
                        >
                            Save
                        </button>

                        <button

                            type="button"

                            className="cancel-btn"

                            onClick={() => navigate("/attendance")}

                        >

                            Cancel

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default AddAttendance;