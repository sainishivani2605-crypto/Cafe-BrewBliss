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
              console.log(response.data);

            } catch (err) {

                console.log(err);

            }

        };

        fetchOrders();

    }, []);

    return (

        <div style={{ padding: "40px" }}>

            <h1>My Orders</h1>

            {
                orders.length === 0 ?

                <h3>No Orders Yet</h3>

                :

                orders.map(order => (


                    <div
                        key={order._id}
                        style={{
                            border: "1px solid gray",
                            borderRadius: "10px",
                            padding: "20px",
                            marginBottom: "20px"
                        }}
                    >

                       <h3>Order ID</h3>

<p>{order._id}</p>

<p>
    <strong>Ordered On:</strong>{" "}
    {new Date(order.createdAt).toLocaleDateString()}
</p>

<p>
    <strong>Status:</strong>{" "}
    <span
        style={{
            color:
                order.status === "Delivered"
                    ? "green"
                    : order.status === "Preparing"
                    ? "orange"
                    : "red",
            fontWeight: "bold"
        }}
    >
        {order.status}
    </span>
</p>
                        <p>

                            <strong>Total:</strong>

                            ₹{order.totalPrice}

                        </p>

                        <h4>Items</h4>

                        {

                            order.items.map(item => (

                                <div key={item._id}>

{item.menuItem?.name || "Deleted Item"}
                                    {" × "}

                                    {item.quantity}

                                </div>

                            ))

                        }

                    </div>

                ))

            }

        </div>

    );

}

export default MyOrders;