import Sidebar from "./Sidebar";
import "../style/Order.css";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import cupimg from "../assets/cup2.avif";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBag, FaClock, FaRupeeSign } from "react-icons/fa";

function Order(){
    return(
        <div className="order-container">
        <Sidebar />
  
        <div className="Order">
            <h1 id="order">Manage Orders</h1>
            <img src={cupimg} />
            <button id="butn">+ New Order</button>
            <div className="searchh">           <label htmlFor="search"></label>
            <FaSearch className="search-icon" />
            <input className="search" type="search" placeholder="Search"></input>
            </div>
        </div>
        <div className="order-card">
        <div className="activeorder">
            <FaShoppingBag className="icon" size={30} />
            <h3>Total Active Orders</h3>
            <h4>5</h4>
        </div>
        
        <div className="activeorder">
             <FaClock className="icon" size={30} />

            <h3>Average Wait Time</h3>
            <h4>15 min</h4>
        </div>

        <div className="activeorder">
             <FaRupeeSign className="icon" size={30} />
            <h3>Active Order Value</h3>
            <h4>2000</h4>
            </div>
        </div>
        
        <div className="dinein">
        <h2 id="Dinein">Dine-IN Orders</h2>
        <p id="view">View All</p>
        <div className="dine">
            <div className="dine-card">
                <div className="up">
                <h4>Table 2</h4>
                <p>ORDER 104 </p>
    </div>
    <div className="middle">
       <h4>Manju</h4> 
       <p>Order Items</p>
       <table className="table">
        <thead>
        <tr className="tr">
            <th className="th">Quantity</th>
            <th className="th">Item</th>
            <th className="th">Price</th>
        </tr>
        </thead>
        <tbody>
        <tr  className="tr">
            <td>3x</td>
            <td>Americano</td>
            <td>500</td>
        </tr>


        <tr className="tr">
            <td>1x</td>
            <td>Pizza</td>
            <td>200</td>
        </tr>
        </tbody>
       </table>
        <h3>TOTAL</h3>
        <h3>Rs.700</h3>
    </div>
    <div className="end">
        <button id="edit">Edit</button>
        <button id="comp">Complete</button>
        <button id="can">Cancel</button>
    </div>
    </div>

     <div className="dine-card">
                <div className="up">
                <h4>Table 4</h4>
                <p>ORDER 105 </p>
    </div>
    <div className="middle">
       <h4>Neha</h4> 
       <p>Order Items</p>
       <table className="table">
        <thead>
        <tr className="tr">
            <th className="th">Quantity</th>
            <th className="th">Item</th>
            <th className="th">Price</th>
        </tr>
        </thead>
        <tbody>
            <tr  className="tr">
            <td>2x</td>
            <td>Burger</td>
            <td>400</td>
        </tr>
    
        <tr className="tr">
            <td>1x</td>
            <td>sandwich</td>
            <td>200</td>
        </tr>
        </tbody>
       </table>
        <h3>TOTAL</h3>
        <h3>Rs.600</h3>
    </div>
    <div className="end">
        <button id="edit">Edit</button>
        <button id="comp">Complete</button>
        <button id="can">Cancel</button>
    </div>
    </div>

     <div className="dine-card">
                <div className="up">
                <h4>Table 5</h4>
                <p>ORDER 106 </p>
    </div>
    <div className="middle">
       <h4>Aditi</h4> 
       <p>Order Items</p>
       <table className="table">
        <thead>
        <tr className="tr">
            <th className="th">Quantity</th>
            <th className="th">Item</th>
            <th className="th">Price</th>
        </tr>
        </thead>
        <tbody>
        <tr  className="tr">
            <td>1x</td>
            <td>Pizza</td>
            <td>300</td>
        </tr>
        </tbody>

       </table>
        <h3>TOTAL</h3>
        <h3>Rs.300</h3>
    </div>
    <div className="end">
        <button id="edit">Edit</button>
        <button id="comp">Complete</button>
        <button id="can">Cancel</button>
    </div>
    </div>

            </div>
        </div>
        </div>
    );
}
export default Order;