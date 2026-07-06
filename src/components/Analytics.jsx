import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../style/mediaqueries.css';
import cupimg from "../assets/cup2.avif";
import "../style/Analytics.css";
import {
    FaHome,
    FaClipboardList,
    FaUtensils,
    FaStar,
    FaUsers,
    FaSignOutAlt,
    FaWallet
} from "react-icons/fa";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { FaChartLine, FaFileExport } from "react-icons/fa";
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
function Analytics(){
    const [analytics, setAnalytics] = useState(null);

const [transactions, setTransactions] = useState([]);
const [topSelling, setTopSelling] = useState([]);
const chartData = {
    labels: topSelling.map(item => item.item),
    datasets: [
        {
            label: "Items Sold",
            data: topSelling.map(item => item.sold),
            backgroundColor: [
                "#8B4513",
                "#C97B63",
                "#D4A373",
                "#E9C46A",
                "#A98467"
            ]
        }
    ]
};
const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: "Top Selling Items"
        }
    }
};
useEffect(() => {

    const fetchAnalytics = async () => {

        try {

            const token = localStorage.getItem("token");

            const headers = {
                Authorization: `Bearer ${token}`
            };

            const analyticsRes = await axios.get(
                "http://localhost:5000/api/analytics",
                { headers }
            );

            const transactionRes = await axios.get(
                "http://localhost:5000/api/analytics/recent-transaction",
                { headers }
            );

            const topSellingRes = await axios.get(
                "http://localhost:5000/api/analytics/top-selling",
                { headers }
            );

            setAnalytics(analyticsRes.data);
            setTransactions(transactionRes.data);
            setTopSelling(topSellingRes.data);

        } catch (err) {

            console.log(err);

        }

    };

    fetchAnalytics();

}, []);
    return(
        <div className="Analytics">
    <Sidebar />
    <div className="Analytic-container">
        <div className="analytop">
            <h1>Revenue Analytics</h1>
             <img src={cupimg} />
             <button id="butn2"><FaFileExport size={20} />Export Report</button>
              <div className="date-filter">
                <label>From:</label>
                <input type="date"></input>

                <label>To:</label>
                <input type="date"></input>
            </div>
             </div>
                 <div className="analycards">
            <div className="analycard">
                
                <h4><FaChartLine size={24} />
                    Total Revenue</h4>
<p>₹{analytics?.totalRevenue || 0}</p>                <p className="txt">↗15%</p>
                <p>This month</p>
        
           </div>

            <div className="analycard">
                
                <h4>< FaClipboardList size={24}/>Total Orders</h4>
<p>{analytics?.totalOrders || 0}</p>               <p className="txt">↗25%</p>
                <p>This month</p>
            </div>
            <div className="analycard">

                <h4><FaUsers size={24}/>Total Customer</h4>
<p>{analytics?.totalCustomers || 0}</p>               <p className="txt">↗10%</p>
                <p>This month</p>
            </div>
                 <div className="analycard">
                <h4><FaWallet size={24}/>
                   Avg Order value </h4>
<p>₹{analytics?.averageOrderValue?.toFixed(2) || 0}</p>                <p className="txt">↗15%</p>
                <p>This month</p>
            </div>
            </div>
<div
    style={{
        background: "#fff",
        margin: "20px",
        padding: "20px",
        borderRadius: "12px",
        width: "600px",
        height: "300px",
        marginInline: "auto"
    }}
>
    <Bar
        data={chartData}
        options={{
            ...chartOptions,
            maintainAspectRatio: false
        }}
    />
</div>
            

            <div className="rec">
                <div className="recent-card">
    <h3>Recent Transactions</h3>
    <p id="vieww">View All</p>
    
    <table>
        <thead>
        <tr className="tableheader">
            <th>Order ID</th>
              <th>Customer</th>
                <th>Items</th>
                  <th>Amount</th>
                    <th>Time</th>
        </tr>
        </thead>
       <tbody>

{
transactions.map(order => (

<tr key={order._id}>

<td>{order._id.slice(-5)}</td>

<td>{order.user?.name}</td>

<td>
{
order.items.map(item => item.menuItem?.name).join(", ")
}
</td>

<td>₹{order.totalPrice}</td>

<td>
{new Date(order.createdAt).toLocaleString()}
</td>

</tr>

))
}

</tbody>
    </table>

</div>

        <div className="itempop">
            <h3>Top selling</h3>

            <table>
                <thead>
                <tr className="tableheader">
                    <th>Item</th>
                    <th>Sold</th>
                    <th>Revenue</th>
                </tr>
                </thead>
                <tbody>

{
topSelling.map((item,index)=>(

<tr key={index}>

<td>{item.item}</td>

<td>{item.sold}</td>

<td>₹{item.revenue}</td>

</tr>

))
}

</tbody>
            </table>
        </div>
            </div>

    </div>
</div>
    );
}

export default Analytics;
