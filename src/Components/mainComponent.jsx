import React from "react";
import { Routes,Route,Navigate } from "react-router-dom";
import "../assets/styles/App.css";
// import Navbar from "./navbars";
import Home from "./home";
import City from "./city";
import BookForm from "./bookForm";
import Ticket from "./ticket";
import ViewTicket from "./viewTicket";
function mainComponent(){

    return(
        <>
            {/* <Navbar/> */}
            <Routes>

            <Route path="/viewticket" element={<ViewTicket/>}/>
            <Route path="/ticket" element={<Ticket/>}/>
            <Route path="/station" element={<BookForm/>}/>
            <Route path="/city" element={<City/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/" element={<Navigate replace to="/"/>}  />
 
            </Routes>
        </>
    )
}

export default mainComponent;