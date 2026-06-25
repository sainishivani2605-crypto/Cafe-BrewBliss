import Sidebar from "./Sidebar";
import { FaSearch } from "react-icons/fa";
import '../style/mediaqueries.css';
import "../style/Review.css";
import { Link, Navigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react";
import cupimg from "../assets/cup2.avif";
import { rgbUnit } from "framer-motion";
 import { useNavigate } from "react-router-dom";
function Review (){
    const [filter, setFilter] = useState("all");
    const reviews = [{
        name: "Suresh",
        rating: 5,
      text: "⭐⭐⭐⭐⭐ Amazing Coffee!",
    },
      {
      name: "Manju",
      rating: 4,
      text: "⭐⭐⭐⭐ Good Service!",
    },
     {
      name: "Nikita",
      rating: 5,
      text: "⭐⭐⭐⭐⭐ Loved the Pizza!",
    },
];

  const filteredReviews =
    filter === "all"
      ? reviews
      : reviews.filter((review) => review.rating === Number(filter));

          const navigate = useNavigate();

    return(
        <div Review-container>
            <Sidebar />
            <div className="Review">
                <div className="review">
                     <h1 id="managereview">Manage Review</h1>
                    <img src={cupimg} />
                      <div className="searchh">           <label htmlFor="search"></label>
                                <FaSearch className="search-icon" />
                                <input className="search" type="search" placeholder="Search"></input>
                               
            </div>
            </div>
            </div>

    <div className="filter">
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("5")}>⭐⭐⭐⭐⭐</button>
        <button onClick={() => setFilter("4")}>⭐⭐⭐⭐</button>
        <button onClick={() => setFilter("3")}>⭐⭐⭐</button>
      </div>

      <div className="Revieww">
        {filteredReviews.map((review, index) => (
          <div className="revieww" key={index}>
            <h3>{review.name}</h3>
            <p>{review.text}</p>
          </div>
        ))}
      </div>

        <h2 id="topreview" style={{color:"purple"}}>Top Review</h2>
        <div className="reviewercard">

         <div className="reviewercontent">
    <div className="content-card">
        <h2 className="Namee">~ Suresh</h2>
        <p>"Amazing coffee and great ambience !"</p>
        <p>12/June/2026</p>
        <button onClick={() => navigate("/reply")}>Reply</button>
        <button>Delete</button>
    </div>
       <div className="content-card">
        <h2 className="Namee">~ Nikita</h2>
        <p>"Pizza was delicious and served fresh."</p>
        <p>11/June/2026</p>
        <button onClick={() => navigate("/reply") }>Reply</button>
        <button>Delete</button>
    </div>
</div>

</div>
    </div>

      </div>
    );
}
export default Review;