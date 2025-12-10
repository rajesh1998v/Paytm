import React from "react";
import { Link } from 'react-router-dom';
import TicketTimer from "./ticketTimer";

function ViewTicket() {

 
    return (
        <div className="p14">
            <div className="KdsWe3">
                <div className="d-flex">
                    <Link className="text-dark" to="/ticket">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={20} class="">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </Link>
                    <div className="aWk4q">
                        <img src="https://res.cloudinary.com/dnysmjaoi/image/upload/v1763914038/file_00000000b1207208ac6e7d55336b9831_k9009p.png" alt="" />
                    </div>
                    <span className="mx-2 font16">1 QR Ticket</span>
                </div>

                <div className="kHgd4s my-1">Help</div>
            </div>

            <div className="khFr4 d-flex">
                <div className="texts">Prajapita Brahmakumari Marg Brts</div>
                <div className="px-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={16} class="mx-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </div>
                <div className="texts">Mangal Pandey Hall Brts</div>

            </div>
            <div className="text-center my-4">Scan this QR at Entry & Exit Points</div>

            <div className="text-center">
                <img src="https://res.cloudinary.com/dnysmjaoi/image/upload/v1763915496/downloadqr_hr9hd0.png" alt="" />
            </div>

            <div className="px-2 py-3">
                <div className="Kuj6g">
                    <div className="font14">Your ticket is valid for</div>
                    <TicketTimer value="timer"/>

                </div>
                <div className="jYg5f">
                    <div className="JhYu3 pt-0 pb-2 ">
                        <div className="font16">Ticket Details</div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={18} class="">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg>
                    </div>

                    <div className="JhYu3  bord">
                        <div>Issued On</div>
                        <div><TicketTimer /></div>
                    </div>
                    <div className="JhYu3 bord">
                        <div>Order ID</div>
                        <div>26243209596</div>
                    </div>
                    <div className="JhYu3 bord">
                        <div>Order Iten ID</div>
                        <div>2703936236</div>
                    </div>
                    <div className="JhYu3 bord border-0 ">
                        <div>Ticket Type</div>
                        <div>1 Adult</div>
                    </div>
                </div>

            </div>







        </div>
    )
}

export default ViewTicket;