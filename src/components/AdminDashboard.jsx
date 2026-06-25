import Sidebar from "./Sidebar";
import "../style/AdminDashboard.css";
import { FaBell, FaUserCircle } from "react-icons/fa";
import '../style/mediaqueries.css';
import { BiColor } from "react-icons/bi";
import cupimg from "../assets/cup2.avif";
import cup from "../assets/cup.jpg";
import { FaHamburger, FaCoffee } from "react-icons/fa";
import { GiSandwich } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
function AdminDashboard(){
    const navigate = useNavigate();
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
                <h3>Total Order</h3>
                <p>1,200</p>
                <p className="incr">↗25%</p>
                <p>This month</p>
            </div>

            
            <div className="dashcard">
                <h3>Revenue</h3>
                <p>2,00,000</p>
                <p className="incr">↗15%</p>
                <p>This month</p>
            </div>
           
            <div className="dashcard">
                <h3>Customers</h3>
                <p>1,000</p>
                <p className="incr">↗10%</p>
                <p>This month</p>
            </div>

       
            <div className="dashcard">
                <h3>Total Menu</h3>
                <p>56</p>
                <p className="incr">+5</p>
                <p>This month</p>
            </div>

            <div className="section">
                <div className="oders"></div>
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
                    <tr>
                        <td>#101</td>
                        <td>Cappuccino x2</td>
                        <td id="pend">Pending</td>
                    </tr>
                   
                    <tr>
                        <td>#102</td>
                        <td>Burger x1</td>
                        <td id="deli">Delivered</td>
                    </tr>
                    
                    <tr>
                        <td>#103</td>
                        <td>Pizza x2</td>
                        <td id="prep">Preparing</td>
                    </tr>
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
                            <li><FaHamburger/>Burger</li>
                            <li><FaCoffee/>Cappuccino</li>
                            <li><GiSandwich/>Sandwich</li>
                        </ul>
                    </div>

                </div>

        </div>
         </div>
    </div>
    
    );
}
export default AdminDashboard;