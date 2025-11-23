import React from "react";
import { Link } from 'react-router-dom';

function ViewTicket() {

  



    return (
        <div className="p14">
            <div className="KdsWe3">
                <div className="d-flex">
                    <Link className="text-dark" to="/city">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={20} class="">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </Link>
                    <div className="aWk4q">
                        
                        <img src="https://res.cloudinary.com/dnysmjaoi/image/upload/v1763751432/ChatGPT_Image_Nov_22_2025_12_25_29_AM_nlca0e.png" alt=""/>
                        {/* <span className="mx-1">1 QR Ticket</span> */}
                    </div>
                </div>
                
                <div className="kHgd4s my-1">Help</div>
            </div>






        </div>
    )
}

export default ViewTicket;