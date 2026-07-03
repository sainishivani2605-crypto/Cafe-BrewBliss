import axios from "axios";
import Sidebar from "./Sidebar";
import "../style/Order.css";
import cupimg from "../assets/cup2.avif";
import { FaSearch } from "react-icons/fa";
import '../style/mediaqueries.css';
import { FaShoppingBag, FaClock, FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState} from "react";


function Order(){
  
    const [orders, setOrders] = useState([]);
      const [search, setSearch] = useState("");
   useEffect(() => {

    const fetchOrders = async () => {

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

            setOrders(response.data);

        } catch (err) {
            console.log(err);
        }

    };

    fetchOrders();

}, []);
    const navigate = useNavigate();
    const updateStatus = async (id, currentStatus) => {

    let nextStatus = currentStatus;

    if (currentStatus === "Pending")
        nextStatus = "Preparing";

    else if (currentStatus === "Preparing")
        nextStatus = "Ready";

    else if (currentStatus === "Ready")
        nextStatus = "Delivered";

    else
        return;

    try {

        const token = localStorage.getItem("token");

        await axios.put(
            `http://localhost:5000/api/orders/${id}/status`,
            {
                status: nextStatus
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setOrders(
            orders.map(order =>
                order._id === id
                    ? { ...order, status: nextStatus }
                    : order
            )
        );

    } catch (err) {

        console.log(err);

    }

};
const cancelOrder = async (id) => {

    const confirmDelete = window.confirm(
        "Are you sure you want to cancel this order?"
    );

    if (!confirmDelete) return;

    try {

        const token = localStorage.getItem("token");

        await axios.delete(
            `http://localhost:5000/api/orders/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setOrders(
            orders.filter(order => order._id !== id)
        );

        alert("Order cancelled successfully!");

    } catch (err) {

        console.log(err);

        alert("Failed to cancel order");

    }

};
const filteredOrders = orders.filter((order) => {

    const customer = order.user?.name?.toLowerCase() || "";

    const orderId = order._id.toLowerCase();

    const items = order.items
        .map(item => item.menuItem?.name || "")
        .join(" ")
        .toLowerCase();

    return (
        customer.includes(search.toLowerCase()) ||
        orderId.includes(search.toLowerCase()) ||
        items.includes(search.toLowerCase())
    );

});
    return(
        <div className="order-container">
        <Sidebar />
  
        <div className="Order">
            <h1 id="order">Manage Orders</h1>
            <img src={cupimg} />
            <button onClick={() => navigate("/addorder")} id="butn">📝+New Order</button>
            <div className="searchh">           <label htmlFor="search"></label>
            <FaSearch className="search-icon" />
           <input
    className="search"
    type="search"
    placeholder="Search Orders..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
/>
</div>
        </div>
        <div className="order-card">
        <div className="activeorder">
            <FaShoppingBag className="icon" size={30} />
            <h3>Total Active Orders</h3>
            <h4>{orders.length}</h4>
        </div>
        
        <div className="activeorder">
             <FaClock className="icon" size={30} />

            <h3>Average Wait Time</h3>
            <h4>15 min</h4>
        </div>

        <div className="activeorder">
             <FaRupeeSign className="icon" size={30} />
            <h3>Active Order Value</h3>
            <h4>₹ {orders.reduce((sum,order) => sum+order.totalPrice,0)}</h4>
            </div>
        </div>
        
        <div className="dinein">
        <h2 id="Dinein">Dine-IN Orders</h2>
        <p id="view">View All</p>
        <div className="dine">
            {filteredOrders.length === 0 ? (

    <h3 style={{textAlign:"center", width:"100%"}}>
        No Orders Found 😔
    </h3>

) : (

    filteredOrders.map((order) => (

<div className="dine-card" key={order._id}>

    <div className="up">

        <h4>{order.user?.name}</h4>

        <p>ORDER #{order._id.slice(-5)}</p>

    </div>

    <div className="middle">

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

                {order.items.map((item,index)=>(

                    <tr className="tr" key={index}>

                        <td>{item.quantity}x</td>

                        <td>{item.menuItem?.name}</td>

                        <td>₹{item.menuItem?.price}</td>

                    </tr>

                ))}

            </tbody>

        </table>

        <div className="totalprice">

            <h3>TOTAL =</h3>

            <h3>₹{order.totalPrice}</h3>

        </div>

    </div>

    <div className="end">
<div className="end">

    <button
        id="edit"
        onClick={() => navigate(`/addorder/${order._id}`)}
    >
        Edit
    </button>

    <button
        id="comp"
        onClick={() =>
            updateStatus(order._id, order.status)
        }
    >
        {order.status === "Delivered"
            ? "Completed"
            : "Next Status"}
    </button>

    <button
        id="can"
        onClick={() => cancelOrder(order._id)}
    >
        Cancel
    </button>

</div>

    </div>

</div>

)))}

    </div>

            </div>
        </div>
      
    );
}
export default Order;