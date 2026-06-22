import Sidebar from "./Sidebar";
import { FaSearch } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react";
import cupimg from "../assets/cup2.avif";
import { rgbUnit } from "framer-motion";
import { div } from "framer-motion/client";
import "../style/Reply.css";
import { RxDividerVertical } from "react-icons/rx";

function Reply(){
    return (

        <div className="Reply-container">
            <Sidebar />
            <div className="reply">
                <div className="cupreply"> 
                <h1>Reply</h1>
                <img src={cupimg} alt="" />
                </div>
                <div className="Reply">
                    <textarea placeholder="Write your Reply here ...">
                        
                    </textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
}
export default Reply;