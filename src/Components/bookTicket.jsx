import React from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';

// import Ticket from "./ticket";

function City() {

    const location = useLocation();
    const { from, to } = location.state || {};

    const navigate = useNavigate();

    const handleTicket = () => {
        navigate("/ticket", { state: { from: from, to: to, }, });
    }
    const handleTicket2 = () => {
        navigate("/ticket2");
    }



    return (
        <div className="p14">

            <div className="KdsWe3">
                <div className="d-flex">
                    <Link className="text-dark" to="/city">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={20} class="">
                            <path strokeLinecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </Link>
                    <div className="Khcd2w">
                        <div>Buys City Bus Ticket</div>
                        <div className="x2fSe"> Surat
                            <Link to="/city">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={16}>
                                    <path strokeLinecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="kHgd4s">Help</div>
            </div>

            <div className="d-flex justify-content-between">
                <div className="Khcd2w m-0">Recent Orders</div>
                <div className="kHgd4s m-0">View All</div>
            </div>

            <div className="Kjf5Dx">
                <div className="Kjuh-left">
                    <div className="pgr4e">1 Adult Ticket</div>
                    <div className="d-flex mt-1 ">
                        <div className="HysD7G">Prajapita Brahmakumari Marg Brts</div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={16} class="mx-2 mt-2">
                                <path strokeLinecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>

                        </div>
                        <div className="HysD7G">Mangal Pandey Hall Brts</div>
                    </div>

                </div>
                <div className="Kjuh-right">
                    <button onClick={() => handleTicket()}>Buy &#x20B9; 12</button>
                </div>
            </div>
            <div className="Kjf5Dx">
                <div className="Kjuh-left">
                    <div className="pgr4e">1 Adult Ticket</div>
                    <div className="d-flex mt-1 ">
                        <div className="HysD7G">Mangal Pandey Hall Brts</div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={16} class="mx-2 mt-2">
                                <path strokeLinecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>

                        </div>
                        <div className="HysD7G">Prajapita Brahmakumari Marg Brts</div>
                    </div>

                </div>
                <div className="Kjuh-right">
                    <button onClick={() => handleTicket2()}>Buy &#x20B9; 12</button>
                </div>
            </div>


            <div>

            </div>
            <div className="Khcd2w m-0">Buy New Ticket</div>

            <div className="Lkdj3e">
                <div style={{ position: "relative" }}>
                    <div className="input-container">

                        <input type="text" value={from} className="input-field" placeholder=" " onClick={() => navigate("/inputForm")} />
                        <label className="input-label">From</label>

                    </div>

                    <div className="input-container">
                        <input type="text" value={to} className="input-field" placeholder=" " />
                        <label className="input-label">To</label>

                    </div>
                    <div className="input-container">
                        <input type="text" className="input-field" placeholder=" " value="1 Adult" />
                        <label className="input-label">Passenger</label>

                    </div>

                    <div className="s2oGtk">
                        {from && to ?
                            (<button className="bg-clor" onClick={() => handleTicket()}>Buy Ticket for <span>&#x20B9;5</span> &#x20B9;4</button>)
                            : (<button >Buy Ticket</button>)
                        }


                    </div>
                    <div className="kHgT7j">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={15} class="p2">
                            <path strokeLinecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                        </svg>
                        <span className="px-1">All bus tickets will be vaild for 2 hours post booking</span>
                    </div>

                </div>


            </div>






        </div>
    )
}

export default City;