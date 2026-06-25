
import "../App.css";
import React from 'react';
import backgr from "../assets/Backgroundimg.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="main-content" style={{ backgroundImage: `url(${backgr})` }}>
     
      <div className="signboard" >
        <h1 className="title">BREW BLISS CAFE</h1>
        <div className="divider" />
        <p className="subtitle">Premium Boutique & Cafe</p>
      </div>
    
    </main>
  
     
  );
}

export default Home;