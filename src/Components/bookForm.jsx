import React from "react";
import { Link } from 'react-router-dom';

function City() {

    return (
        <div className="">
            <div className="KdsWe3 px-3">
                <div className="d-flex">
                    <Link className="text-dark" to="/city">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={20} class="">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </Link>
                    <div className="Khcd2w">
                        <div>Buys City Bus Ticket</div>
                        <div className="x2fSe"> Surat
                            <Link to="/city">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={16}>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="kHgd4s">Help</div>
            </div>

            <div className="Khcd2w">Buy New Ticket</div>

            

           


        </div>
    )
}

export default City;