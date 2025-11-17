import React from "react";
import { Routes,Route,Navigate } from "react-router-dom";
import "../assets/styles/App.css";
import Navbar from "./navbars"
import Home from "./home";
import City from "./city";
function mainComponent(){

    return(
        <>
            <Navbar/>
            <Routes>

            <Route path="/city" element={<City/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/" element={<Navigate replace to="/home"/>}  />
 
            </Routes>
        </>
    )
}

export default mainComponent;