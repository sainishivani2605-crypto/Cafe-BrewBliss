import Sidebar from "./Sidebar";
import { FaSearch } from "react-icons/fa";
import '../style/mediaqueries.css';
import { Link } from "react-router-dom";
import cupimg from "../assets/cup2.avif";
import "../style/ManageMenu.css";
import { useState, useEffect } from "react";
import axios from "axios";
 import { useNavigate } from "react-router-dom";



function ManageMenu(){

    const [menuItems, setMenuItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

    const fetchMenu = async () => {

        try {

            const response = await axios.get(
                "http://localhost:5000/api/menu"
            );

            setMenuItems(response.data);

        } catch (err) {

            console.log(err);

        }

    };

    fetchMenu();

}, []);
const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this item?"
    );

    if (!confirmDelete) return;

    try {

        const token = localStorage.getItem("token");

        await axios.delete(
            `http://localhost:5000/api/menu/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setMenuItems(
            menuItems.filter(item => item._id !== id)
        );

        alert("Menu item deleted successfully");

    } catch (err) {

        console.log(err);

        alert(
            err.response?.data?.message || "Delete Failed"
        );

    }

};
    return(
        <div className="Menu-container">
            <Sidebar />
            <div className="Menu">
                <div className="menu" >
                    <h1 id="managemenu">Manage Menu</h1>
                    <img src={cupimg} />
                    
                                <button onClick={() => navigate("/add-menu")}>Changes</button>
                                <div className="searchh">
                            <label htmlFor="search"></label>
                                <FaSearch className="search-icon" />
                                <input className="search" type="search" placeholder="Search"></input>
                                </div>
                </div>

               <div className="totalmenu">

    <h1 id="cafemenu">Cafe's Menu</h1>

    <div className="Totmenumid">

  {menuItems.map((item) => (
    <div className="Totmenumid-card" key={item._id}>

        <img
            src={`http://localhost:5000/uploads/${item.image}`}
            alt={item.name}
        />

        <p>{item.name}</p>
        <p>₹{item.price}</p>
        <p>{item.description}</p>
<div className="buttons">
        <button id="deletebtn"
            onClick={() => handleDelete(item._id)}
        >Delete
            
        </button>
        <button id="editmenu"
    onClick={() => navigate(`/add-menu/${item._id}`)}
>
    Edit
</button>
</div>

    </div>
))}

    </div>

</div>
</div>
</div>

    );
}

export default ManageMenu;
