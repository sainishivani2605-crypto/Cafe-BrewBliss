import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../style/Addorder.css";
import cupimg from "../assets/cup2.avif";
import { FaSearch } from "react-icons/fa";
import '../style/mediaqueries.css';
import { MdGroups } from "react-icons/md";
import sandwich1 from "../assets/sandwich.jpg";
import sandwich from "../assets/sandwich2.jpg";
    import Burger1 from "../assets/Classic_Cheese_Burger_.jpg";
  import Burger2 from "../assets/Paneer_Tikka_Burger_.jpg";
   import Burger3 from "../assets/Veggie_Aloo_Tikki_Burger_.jpg";
     import coffee1 from "../assets/cappuccino.jpg";
  import coffee2 from "../assets/coffee.jpg";
   import coffee3 from "../assets/espresso.jpg";
     import mocha from "../assets/mocha.jpg";
function Addorder() {
     const { id } = useParams();
    const [menu, setMenu] = useState([]);

const [selectedItem, setSelectedItem] = useState("");
const [quantity, setQuantity] = useState(1);
const [customerName, setCustomerName] = useState("");
const [tableNumber, setTableNumber] = useState("");
const [orderType, setOrderType] = useState("Dine In");
const [cart, setCart] = useState([]);
const addItem = () => {

    if (!selectedItem) {
        alert("Please select a menu item");
        return;
    }

    const menuItem = menu.find(item => item._id === selectedItem);

    const newItem = {
        menuItem: selectedItem,
        name: menuItem.name,
        price: menuItem.price,
        quantity: Number(quantity)
    };

    setCart([...cart, newItem]);

    setSelectedItem("");
    setQuantity(1);
};
   const handleSubmit = async (e) => {

    e.preventDefault();

    if (cart.length === 0) {
        alert("Please add at least one item.");
        return;
    }

    try {

       

     const token = localStorage.getItem("token");

const payload = {
    items: cart.map(item => ({
        menuItem: item.menuItem,
        quantity: item.quantity
    }))
};

if (id) {

    await axios.put(
        `http://localhost:5000/api/orders/${id}`,
        payload,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    alert("Order Updated Successfully!");

} else {

    await axios.post(
        "http://localhost:5000/api/orders",
        payload,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    alert("Order Added Successfully!");
}


        setCart([]);
        setSelectedItem("");
        setQuantity(1);

    } catch (err) {

        console.log(err);

        alert(err.response?.data?.message || "Failed to place order");

    }

};
    useEffect(() => {

    const fetchMenu = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                "http://localhost:5000/api/menu",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setMenu(response.data);

        } catch (err) {

            console.log(err);

        }

    };

    fetchMenu();

}, []);
useEffect(() => {

    if (!id) return;

    const fetchOrder = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                "http://localhost:5000/api/orders",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            const order = response.data.find(o => o._id === id);

            if (!order) return;

            setCustomerName(order.user?.name || "");
            setCart(
                order.items.map(item => ({
                    menuItem: item.menuItem._id,
                    name: item.menuItem.name,
                    price: item.menuItem.price,
                    quantity: item.quantity
                }))
            );

        } catch (err) {

            console.log(err);

        }

    };

    fetchOrder();

}, [id]);
    return (
        <div className="Addorder-container">
            <Sidebar />
            <div className="addorder">
                <div className="addordertop">
                    <h1>
    {id ? "✏️ Edit Order" : "📝 Add Order"}
</h1>
                    <h3>Order ID</h3>
                </div>
                <div className="add-order">
                    <div className="add-ordercard" >
                        <h2><MdGroups /> Order Detail</h2>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="Name">Customer Name</label>
                           <input
type="text"
placeholder="Enter the Name of Customer"
value={customerName}
onChange={(e)=>setCustomerName(e.target.value)}
/>


                            <label htmlFor="number">Table Number</label>
                           <input
type="text"
placeholder="Enter the Table Number"
value={tableNumber}
onChange={(e)=>setTableNumber(e.target.value)}
/>

<label>Order Type</label>

<select
    value={orderType}
    onChange={(e) => setOrderType(e.target.value)}
>
    <option value="Dine In">Dine In</option>
    <option value="Take Away">Take Away</option>
</select>

<label>Menu Item</label>

<select
    value={selectedItem}
    onChange={(e) => setSelectedItem(e.target.value)}
>
    <option value="">Select Item</option>

    {menu.map((item) => (
        <option
            key={item._id}
            value={item._id}
        >
            {item.name} - ₹{item.price}
        </option>
    ))}
</select>

<label>Quantity</label>

<input

type="number"

min="1"

value={quantity}

onChange={(e)=>setQuantity(e.target.value)}

/>
                            
                    <button
type="button"
onClick={addItem}
>

Add Item

</button>
<button type="submit">
    {id ? "Update Order" : "Place Order"}
</button>
<h3>Selected Items</h3>

{cart.map((item, index) => (

    <div key={index}>

        <p>
            {item.name} × {item.quantity} = ₹{item.price * item.quantity}
        </p>

    </div>

))}

<h3>
    Total: ₹
    {cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    )}
</h3>
                        </form>
                    </div>
                    <div className="add-ordercard">
                        <h2>Menu Item</h2>
                        <div className="Totmenumid-cardorder">
                            <img src={sandwich1} />
                            <p>Greek Sandwich</p>
                            <p>Price Rs.300</p>

                        </div>

                        <div className="Totmenumid-cardorder">
                            <img src={sandwich} />
                            <p>Plain Sandwich</p>
                            <p>Price Rs.100</p>

                        </div>

                        <div className="Totmenumid-cardorder">
                            <img src={Burger1} />
                            <p>Classic Cheese Burger</p>
                            <p>Price Rs.200</p>

                        </div>

                        <div className="Totmenumid-cardorder">
                            <img src={Burger2} />
                            <p>Paneer Tikka Burger</p>
                            <p>Price Rs.250</p>

                        </div>

                        <div className="Totmenumid-cardorder">
                            <img src={coffee1} />
                            <p>Cappuccino</p>
                            <p>Price Rs.200</p>

                        </div>

                        <div className="Totmenumid-cardorder">
                            <img src={coffee2} />
                            <p>Plain coffee</p>
                            <p>Price Rs.100</p>

                        </div>

                        <div className="Totmenumid-cardorder">
                            <img src={coffee3} />
                            <p>Espresso</p>
                            <p>Price Rs.300</p>

                        </div>

                        <div className="Totmenumid-cardorder">
                            <img src={mocha} />
                            <p>mocha</p>
                            <p>Price Rs.350</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

}
export default Addorder;