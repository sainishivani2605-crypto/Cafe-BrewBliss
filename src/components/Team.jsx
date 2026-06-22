import Sidebar from "./Sidebar";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";

import cupimg from "../assets/cup2.avif";
import { div } from "framer-motion/client";

function Team() {
    return(
        <div className="Team-container">
            <Sidebar />
        </div>
    );
}
export default Team;