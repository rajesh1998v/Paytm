import React from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

// import Ticket from "./ticket";

function ViewAll() {

    const navigate = useNavigate();
    const handleTicket2 = (from, to, price) => {
        navigate("/ticket2", { state: { from, to, price }, });
    }



    return (
        <div className="p14">

            <div className="KdsWe3">
                <div className="d-flex">
                    <Link className="text-dark" to="/city">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={20} className="">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </Link>

                </div>

                <div className="kHgd4s mt-2">Help</div>
            </div>

            <div className="d-flex justify-content-between">
                <div className="Khcd2w m-0">Recent Orders</div>

            </div>

            <div className="Kjf5Dx">
                <div className="Kjuh-left">
                    <div className="pgr4e">1 Adult Ticket</div>
                    <div className="d-flex mt-1 ">
                        <div className="HysD7G">Prajapita Brahmakumari Marg Brts</div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={16} className="mx-2 mt-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>

                        </div>
                        <div className="HysD7G">Mangal Pandey Hall Brts</div>
                    </div>

                </div>
                <div className="Kjuh-right">
                    <button onClick={() => handleTicket2("Prajapita Brahmakumari Marg Brts", "Mangal Pandey Hall Brts", 12)}>Buy &#x20B9; 12</button>
                </div>
            </div>
            <div className="Kjf5Dx">
                <div className="Kjuh-left">
                    <div className="pgr4e">1 Adult Ticket</div>
                    <div className="d-flex mt-1 ">
                        <div className="HysD7G">Mangal Pandey Hall Brts</div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={16} className="mx-2 mt-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>

                        </div>
                        <div className="HysD7G">Prajapita Brahmakumari Marg Brts</div>
                    </div>

                </div>
                <div className="Kjuh-right">
                    <button onClick={() => handleTicket2("Mangal Pandey Hall Brts", "Prajapita Brahmakumari Marg Brts", 12)}>Buy &#x20B9; 12</button>
                </div>
            </div>
            <div className="Kjf5Dx">
                <div className="Kjuh-left">
                    <div className="pgr4e">1 Adult Ticket</div>
                    <div className="d-flex mt-1 ">
                        <div className="HysD7G">Mangal Pandey Hall Brts</div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={16} className="mx-2 mt-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>

                        </div>
                        <div className="HysD7G">Sahara Darwaja</div>
                    </div>

                </div>
                <div className="Kjuh-right">
                    <button onClick={() => handleTicket2("Mangal Pandey Hall Brts", "Sahara Darwaja", 8)}>Buy &#x20B9; 8</button>
                </div>
            </div>




        </div>
    )
}


export default ViewAll;