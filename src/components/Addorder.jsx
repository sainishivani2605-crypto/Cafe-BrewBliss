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
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Order Added Successfully!");
    };
    return (
        <div className="Addorder-container">
            <Sidebar />
            <div className="addorder">
                <div className="addordertop">
                    <h1>📝Add Order</h1>
                    <h3>Order ID</h3>
                </div>
                <div className="add-order">
                    <div className="add-ordercard" >
                        <h2><MdGroups /> Order Detail</h2>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="Name">Customer Name</label>
                            <input type="text" placeholder="Enter the Name of Customer"></input>

                            <label htmlFor="number">Table Number</label>
                            <input type="text" placeholder="Enter the Table Number"></input>


                            <select>
                                <option value="Dine in">Dine IN</option>
                                <option value="Take away">Take away</option>
                            </select>
                            <br></br>

                            <label htmlFor="Name">Item Name</label>
                            <input type="text" placeholder="Enter the Name of Item"></input>

                            <label htmlFor="number">Number of Quantity</label>
                            <input type="number" min="1" placeholder="Enter the Number of Quantity"></input>
                            <button type="submit">
                                Add Order
                            </button>
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