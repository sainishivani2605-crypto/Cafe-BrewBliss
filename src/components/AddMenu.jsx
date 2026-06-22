import { dfn } from "framer-motion/client";
import Sidebar from "./Sidebar";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../style/AddMenu.css";
function AddMenu() {
  return (
    <div className="Add-container">
        <Sidebar />
      <div className="Add">
        <div className="add">
            <h1 id="ad">Add New Items</h1>
             <div className="item-card">
            <label className="A" htmlFor="food name">Item Name</label>
            <input className="B" type="text" placeholder="Enter the name of the food item"></input>
<br></br>
            <label className="A" htmlFor="food category">Category</label>
            <input className="B" type="text" placeholder="Enter Category"></input>
<br></br>
            <label className="A" htmlFor="food price">Price</label>
            <input className="B" type="text" placeholder="Enter Price"></input>
<br></br>
            <label className="A" htmlFor="food Description">Description</label>
            <input className="B" type="text area" placeholder="Description">
            </input>
<br></br>
            <label className="A" htmlFor="food status">Status</label>
            <input className="B" type="text" placeholder="Enter the Status"></input>

            <button>Save</button>

            <button>Cancel</button>

             
        </div>
        </div>
      </div>
    </div>
  );
}

export default AddMenu;