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
import { FaChartLine, FaFileExport } from "react-icons/fa";

function Analytics(){
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
                <p>2,00,000</p>
                <p className="txt">↗15%</p>
                <p>This month</p>
        
           </div>

            <div className="analycard">
                
                <h4>< FaClipboardList size={24}/>Total Orders</h4>
                <p>1,200</p>
                <p className="txt">↗25%</p>
                <p>This month</p>
            </div>
            <div className="analycard">

                <h4><FaUsers size={24}/>Total Customer</h4>
                <p>1,000</p>
                <p className="txt">↗10%</p>
                <p>This month</p>
            </div>
                 <div className="analycard">
                <h4><FaWallet size={24}/>
                   Avg Order value </h4>
                <p>100</p>
                <p className="txt">↗15%</p>
                <p>This month</p>
            </div>
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
        <tr>
            <td>#100</td>
            <td>Suresh</td>
            <td>Cappuccino</td>
            <td>Rs.100</td>
            <td>10:30am</td>

        </tr>

        <tr>
             <td>#101</td>
            <td>Nikita</td>
            <td>Pizza,fries</td>
            <td>Rs.200</td>
            <td>11:30am</td>
        </tr>
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
                <tr>
                    <td>Cappuccino</td>
                    <td>90</td>
                    <td>48000</td>
                </tr>

                 <tr>
                    <td>Pizza</td>
                    <td>80</td>
                    <td>40000</td>
                </tr>
                  <tr>
                    <td>Burger</td>
                    <td>70</td>
                    <td>30000</td>
                </tr>
                </tbody>
            </table>
        </div>
            </div>

    </div>
</div>
    );
}

export default Analytics;
