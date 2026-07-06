import axios from "axios";
import {useEffect,useState} from "react";
import Sidebar from "./Sidebar";
import "../style/AdminDashboard.css";
import { FaBell, FaUserCircle } from "react-icons/fa";
import '../style/mediaqueries.css';
import { BiColor } from "react-icons/bi";
import cupimg from "../assets/cup2.avif";
import cup from "../assets/cup.jpg";
import { GiSandwich } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

import {
    FaShoppingCart,     // Total Orders
    FaRupeeSign,        // Revenue
    FaUsers,            // Customers
    FaUtensils,         // Menu
    FaUserTie,          // Staff
    FaStar,             // Reviews
    FaClipboardList,    // Recent Orders
    FaFire,             // Popular Items
    FaChartLine,        // Analytics
    FaCoffee,
     FaHamburger            // Cafe
} from "react-icons/fa";
function AdminDashboard(){
    const [topSelling, setTopSelling] = useState([]);
const [sales, setSales] = useState({});


    const [dashboard,setDashboard] = useState({
          totalRevenue: 0,
    totalOrders: 0,
    totalCustomers: 6,
    averageOrderValue: 0,
    totalMenu: 0,
    totalStaff: 0,
    totalReviews: 0,
    recentOrders:[]
    })
    const navigate = useNavigate();
    useEffect(() => {

    const fetchDashboard = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.get(
                "http://localhost:5000/api/analytics",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            console.log(response.data);
            setDashboard(response.data);
            
    const topResponse = await axios.get(
    "http://localhost:5000/api/analytics/top-selling",
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
     
);
setTopSelling(topResponse.data);


        } catch (err) {
            console.log(err);
        }

    };

    fetchDashboard();




}, []);
    return(
        <div className="dashboard-container">

    <Sidebar />
            
    <div className="Adminmain-content">

        <div className="Dashboardtop">
            <h1>Dashboard</h1>
            <img src={cupimg} />
            <span className="cup">
                <h4><img src={cup} className="imag"></img>New Items</h4>
              <button id="btn" onClick={() => navigate("/add-menu")}>+ Add</button>
            </span>
          
            <label htmlFor="search"></label>
            <input type="search" placeholder="🔍Search"></input>
        </div>

        <div className="cards">


            <div className="dashcard">
                <h3><FaShoppingCart/>Total Order</h3>
                <p>{dashboard.totalOrders}</p>
              
                <p>This month</p>
            </div>

            
            <div className="dashcard">
                <h3><FaRupeeSign/>Revenue</h3>
                <p>₹ {dashboard.totalRevenue}</p>
                <p>This month</p>
            </div>
           
            <div className="dashcard">
                <h3><FaUsers/>Customers</h3>
                <p>{dashboard.totalCustomers}</p>
                <p>This month</p>
            </div>

       
            <div className="dashcard">
                <h3><FaUtensils/>Total Menu</h3>
                <p>{dashboard.totalMenu}</p>
                <p>This month</p>
            </div>

               <div className="dashcard">
                <h3><FaUserTie/>Total Staff</h3>
                <p>{dashboard.totalStaff}</p>
                <p>This month</p>
            </div>

               <div className="dashcard">
                <h3><FaStar/>Total Reviews</h3>
                <p>{dashboard.totalReviews}</p>
                <p>This month</p>
            </div>

            <div className="section">
                <h2 className="recent">Recent Orders</h2>
                <div className="order">
                <table>
                    <thead>
                    <tr>
                        <th>Item Number</th>
                        <th>Item</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
    {dashboard.recentOrders.length === 0 ? (
        <tr>
            <td colSpan="3">No recent orders</td>
        </tr>
    ) : (
        dashboard.recentOrders.map((order) => (
            <tr key={order._id}>
                <td>#{order._id.slice(-5)}</td>

                <td>
                    {order.items
                        .map(item => `${item.menuItem?.name} x${item.quantity}`)
                        .join(", ")}
                </td>

                <td className={order.status.toLowerCase()} >{order.status}</td>
            </tr>
        ))
    )}
</tbody>
                </table>
                </div>
                </div>
                <div className="totalSale">
                        <h2 className="recent" id="sale">Total Sales</h2>
                       <div className="cardSale">
                        <div className="top">
                            <h3>Today Performance</h3>
                
                        </div>

                        <div className="gauge">
                            <div className="outer"></div>
                            <div className="inner"></div>

                            <div className="center">
                                <h2>20000</h2>
                                <p>Today Revenue</p>
                            </div>
                        </div>

                        <div className="stats">
                            <p>● Revenue <span>+10.9%</span></p>
                            <p>● Sale <span>+10%</span></p>
                        </div>

                        <div className="bottom">
                            <p>● Yesterday</p>
                            <h4>15000</h4>
                        </div>
                    </div>
                    
                </div>
                <div className="popular">
                    <h2 className="recent" id="pop">Popular Items</h2>
                    <div className="popCard">
                      <ul>
    {topSelling.length === 0 ? (
        <li>No sales yet</li>
    ) : (
        topSelling.map((item) => (
            <li key={item.item}>
                <FaHamburger /> {item.item} ({item.sold})
            </li>
        ))
    )}
</ul>
                    </div>

                </div>

        </div>
         </div>
    </div>
    
    );
}
export default AdminDashboard;