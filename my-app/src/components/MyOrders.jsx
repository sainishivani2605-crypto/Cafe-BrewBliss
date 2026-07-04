import { useEffect, useState } from "react";
import axios from "axios";

function MyOrders() {

    const [orders, setOrders] = useState([]);
useEffect(() => {

    const fetchOrders = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                "http://localhost:5000/api/orders/my-orders",
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
  
       return (
    <div className="my-orders">

        <h1>My Orders</h1>

        {orders.length === 0 ? (

            <h3>No Orders Yet</h3>

        ) : (

            orders.map((order) => (

                <div
                    key={order._id}
                    className="order-card"
                >

                    <h3>Order #{order._id.slice(-5)}</h3>

                    {order.items.map((item, index) => (

                        <p key={index}>
                            {item.menuItem?.name}
                            {" "}
                            ×
                            {" "}
                            {item.quantity}
                        </p>

                    ))}

                    <h4>
                        Total: ₹{order.totalPrice}
                    </h4>

                    <h4>
                        Status:
                        {" "}
                        {order.status}
                    </h4>

                </div>

            ))

        )}

    </div>
);
   

}

export default MyOrders;