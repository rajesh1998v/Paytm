import React from "react";
import { Routes,Route,Navigate } from "react-router-dom";
import "../assets/styles/App.css";
// import Navbar from "./navbars";
import Home from "./home";
import City from "./city";
import BookForm from "./bookForm";
import Ticket from "./ticket";
import ViewTicket from "./viewTicket";
import Ticket2 from "./ticket2";
import ViewTicket2 from "./viewTickect2";
import RemainingTime from "./ticketTimer";
function mainComponent(){

    return(
        <>
            {/* <Navbar/> */}
            <Routes>

            <Route path="/remainingTime" element={<RemainingTime/>}/>
            <Route path="/viewticket2" element={<ViewTicket2/>}/>
            <Route path="/ticket2" element={<Ticket2/>}/>
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