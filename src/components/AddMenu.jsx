import { dfn } from "framer-motion/client";
import '../style/mediaqueries.css';
import Sidebar from "./Sidebar";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../style/AddMenu.css";
import { useState } from "react";
import axios from "axios";
function AddMenu() {
  const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [description, setDescription] = useState("");
const [image, setImage] = useState(null);
const handleSave = async () => {

    try {

        const token = localStorage.getItem("token");

        const formData = new FormData();

        formData.append("name", name);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("image", image);

        const response = await axios.post(
            "http://localhost:5000/api/menu",
            formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            }
        );

        alert(response.data.message);

        setName("");
        setPrice("");
        setDescription("");
        setImage(null);

    } catch (err) {
    console.log("Error:", err);
    console.log("Response:", err.response);
    console.log("Data:", err.response?.data);
    console.log("Message:", err.message);

    alert("Check console");
}

};
  return (
    <div className="Add-container">
        <Sidebar />
      <div className="AddItems">
        <div className="addItems">
            <h1 id="ad">Add New Items</h1>
             <div className="item-card">
            <label className="A" htmlFor="food name">Item Name</label>
           <input
    className="B"
    type="text"
    placeholder="Enter the name of the food item"
    value={name}
    onChange={(e) => setName(e.target.value)}
/>
<br></br>
            <label className="A" htmlFor="food category">Category</label>
            <input className="B" type="text" placeholder="Enter Category"></input>
<br></br>
            <label className="A" htmlFor="food price">Price</label>
          <input
    className="B"
    type="number"
    placeholder="Enter Price"
    value={price}
    onChange={(e) => setPrice(e.target.value)}
/>
<br></br>
            <label className="A" htmlFor="food Description">Description</label>
           <textarea
    className="B"
    placeholder="Description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
></textarea>
<br></br>
<label className="A">Image</label>

<input
    type="file"
    accept="image/*"
    onChange={(e) => setImage(e.target.files[0])}
/>
<br></br>
            <label className="A" htmlFor="food status">Status</label>
            <input className="B" type="text" placeholder="Enter the Status"></input>

<button onClick={handleSave}>
    Save
</button>
            <button>Cancel</button>

             
        </div>
        </div>
      </div>
    </div>
  );
}

export default AddMenu;