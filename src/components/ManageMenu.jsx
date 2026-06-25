import { dfn } from "framer-motion/client";
import Sidebar from "./Sidebar";
import { FaSearch } from "react-icons/fa";
import '../style/mediaqueries.css';
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import cupimg from "../assets/cup2.avif";
import "../style/ManageMenu.css";
 import { useNavigate } from "react-router-dom";
 import burger from "../assets/burger.jpg";
 import coffee from "../assets/coffee.jpg";
 import pizza from "../assets/pizza.jpg";
 import sandwich1 from "../assets/sandwich.jpg";
  import sandwich from "../assets/sandwich2.jpg";
   import sandwich3 from "../assets/vegiesandwich.jpg";
    import Burger1 from "../assets/Classic_Cheese_Burger_.jpg";
  import Burger2 from "../assets/Paneer_Tikka_Burger_.jpg";
   import Burger3 from "../assets/Veggie_Aloo_Tikki_Burger_.jpg";
     import coffee1 from "../assets/cappuccino.jpg";
  import coffee2 from "../assets/coffee.jpg";
   import coffee3 from "../assets/espresso.jpg";
     import mocha from "../assets/mocha.jpg";
  import Latte from "../assets/latte.jpg";
   import vanillalatte from "../assets/vanillaicedlatte.jpg";
    import frape from "../assets/frappe.jpg";
     import coconutlatte from "../assets/Coconut-Iced-Espresso.jpg";


function ManageMenu(){
    const navigate = useNavigate();
    return(
        <div className="Menu-container">
            <Sidebar />
            <div className="Menu">
                <div className="menu" >
                    <h1 id="managemenu">Manage Menu</h1>
                    <img src={cupimg} />
                    
                                <button onClick={() => navigate("/add-menu")}>Changes</button>
                                <div className="searchh">
                            <label htmlFor="search"></label>
                                <FaSearch className="search-icon" />
                                <input className="search" type="search" placeholder="Search"></input>
                                </div>
                </div>

                <div className="totalmenu">
                    <h1 id="cafemenu">Cafe's Menu</h1>
                    <p id="vew">View all</p>
                    <div className="Totmenutop">
                    <h2>Sandwiches</h2>
                    </div>
                    <div className="Totmenumid">
                        <div className="Totmenumid-card">
                            <img src={sandwich1}/>
                            <p>Greek Sandwich</p>
                            <p>Price Rs.300</p>

                        </div>

                         <div className="Totmenumid-card">
                            <img src={sandwich}/>
                            <p>Plain Sandwich</p>
                            <p>Price Rs.100</p>

                        </div>

                         <div className="Totmenumid-card">
                            <img src={sandwich3}/>
                            <p>Vegie Sandwich</p>
                            <p>Price Rs.200</p>

                        </div>
                    </div>
                       

                        <div className="Totmenutop">
                    <h2>Burgers</h2>
                    </div>
                    <div className="Totmenumid">
                        <div className="Totmenumid-card">
                            <img src={Burger1}/>
                            <p>Classic Cheese Burger</p>
                            <p>Price Rs.200</p>

                        </div>

                         <div className="Totmenumid-card">
                            <img src={Burger2}/>
                            <p>Paneer Tikka Burger</p>
                            <p>Price Rs.250</p>

                        </div>

                         <div className="Totmenumid-card">
                            <img src={Burger3}/>
                            <p>Vegie Aloo Tikki Burger</p>
                            <p>Price Rs.200</p>

                        </div>
                    </div>


                            <div className="Totmenutop">
                    <h2>Coffee</h2>
                    </div>
                    <div className="Totmenumid">
                        <div className="Totmenumid-card">
                            <img src={coffee1}/>
                            <p>Cappuccino</p>
                            <p>Price Rs.200</p>

                        </div>

                         <div className="Totmenumid-card">
                            <img src={coffee2}/>
                            <p>Plain coffee</p>
                            <p>Price Rs.100</p>

                        </div>

                         <div className="Totmenumid-card">
                            <img src={coffee3}/>
                            <p>Espresso</p>
                            <p>Price Rs.300</p>

                        </div>

                           <div className="Totmenumid-card">
                            <img src={mocha}/>
                            <p>mocha</p>
                            <p>Price Rs.350</p>

                        </div>

                           <div className="Totmenumid-card">
                            <img src={Latte}/>
                            <p>Latte</p>
                            <p>Price Rs.300</p>

                        </div>

                           <div className="Totmenumid-card">
                            <img src={vanillalatte}/>
                            <p>Vanilla iced Latte</p>
                            <p>Price Rs.400</p>

                        </div>

                           <div className="Totmenumid-card">
                            <img src={frape}/>
                            <p>Frappe</p>
                            <p>Price Rs.400</p>

                        </div>

                           <div className="Totmenumid-card">
                            <img src={coconutlatte}/>
                            <p>Coconut iced Espresso</p>
                            <p>Price Rs.500</p>


                        </div>
                    </div>
                   
                </div>

            <div className="popular">
                  <h2>Today's Popular Menu</h2>
            <h3>
                Discover our customers' favorite picks of the day! From freshly brewed coffee to delicious snacks and
                desserts, these items are loved for their amazing taste and quality.
            </h3>
            </div>
            <div className="menumid">
          
                <div className="menumid-card">
                    <img src={burger} />
                    <h2>🍔 Classic Veg Burger</h2>
                <p>A juicy and flavorful burger served with crispy fries.</p>
                <button>View details</button>
                </div>
           

          
                <div className="menumid-card">
                    <img src={coffee} />
                                  <h2>☕ Cappuccino</h2>
                <p>
Rich espresso blended with creamy milk foam for the perfect coffee experience.</p>
<button>View details</button>
                </div>
          
                <div className="menumid-card">
                    <img src={pizza} />
                  <h2>Margherita Pizza</h2>
                <p>Freshly baked pizza topped with rich tomato, melted,and aromatic herbs.Crispy on the outside,soft on the inside.</p>
                <button>View details</button>
                </div>

                </div>
                </div>
            </div>

    );
}

export default ManageMenu;
