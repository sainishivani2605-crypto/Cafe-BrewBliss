import Sidebar from "./Sidebar";
import { FaSearch } from "react-icons/fa";
import '../style/mediaqueries.css';
import { Link } from "react-router-dom";
import cupimg from "../assets/cup2.avif";
import "../style/ManageMenu.css";
import { useState, useEffect } from "react";
import axios from "axios";
 import { useNavigate } from "react-router-dom";
 import burger from "../assets/burger.jpg";
 import coffee from "../assets/coffee.jpg";
 import pizza from "../assets/pizza.jpg";
 import sandwich1 from "../assets/sandwich.jpg";
  import sandwich from "../assets/sandwich2.jpg";
   import sandwich3 from "../assets/vegiesandwich.jpg";
    import Burger1 from "../assets/Classic_Cheese_Burger_.jpg";
  import Burger2 from "../assets/Paneer_Tikka_Burger_.jpg";
   import Burger3 from "../assets/Veggie_Aloo_Tikki_Burger_.jpg";
     import coffee1 from "../assets/cappuccino.jpg";
  import coffee2 from "../assets/coffee.jpg";
   import coffee3 from "../assets/espresso.jpg";
     import mocha from "../assets/mocha.jpg";
  import Latte from "../assets/latte.jpg";
   import vanillalatte from "../assets/vanillaicedlatte.jpg";
    import frape from "../assets/frappe.jpg";
     import coconutlatte from "../assets/Coconut-Iced-Espresso.jpg";


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

        <button id="deletebtn"
            onClick={() => handleDelete(item._id)}
        >Delete
            
        </button>
        <button
    onClick={() => navigate(`/add-menu/${item._id}`)}
>
    Edit
</button>

    </div>
))}

    </div>

</div>
</div>
</div>

    );
}

export default ManageMenu;
