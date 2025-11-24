import React, { useState, useEffect } from "react";
import { Link,useNavigate } from 'react-router-dom';

function Ticket() {
    const [time, setTime] = useState({ hours: 1, minutes: 32, seconds: 15 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prev => {
                let { hours, minutes, seconds } = prev;

                if (hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(timer);
                    return prev;
                }

                if (seconds > 0) {
                    seconds -= 1;
                } else {
                    if (minutes > 0) {
                        minutes -= 1;
                        seconds = 59;
                    } else {
                        if (hours > 0) {
                            hours -= 1;
                            minutes = 59;
                            seconds = 59;
                        }
                    }
                }

                return { hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const navigate = useNavigate();
    const viewTicket=()=>{
        navigate("/viewticket");
    }

    return (
        <div className="p14">
            <div className="KdsWe3">
                <div className>
                    <Link className="text-dark" to="/station">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={20} class="">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </Link>
                </div>
                <div className="aWk43">
                    <img src="https://paytmtravel-images-akamai.paytm.com/icons/Paytm_Travel_Logo.svg" alt="" />
                </div>
                <div className="kHgd4s my-1">Help</div>
            </div>

            <div className="fGt6V">
                <div className="pding12">
                    <div className="Kuj6d">
                        <div className="KjBy6">
                            <img src="https://res.cloudinary.com/dnysmjaoi/image/upload/v1763893728/sitilink_yhzs9y.png" alt="" />
                        </div>
                    </div>

                    <div className="khFr4 d-flex">
                        <div className="texts">Magob Parvat Khadi Bridge BRTS</div>
                        <div className="px-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={14} class="mx-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                        <div className="texts">Mangal Pandey Hall Brts</div>
                    </div>
                    <div className="pgr4e font14 text-center pt-1 my-2">1 Adult Ticket</div>
                    <div className="Kuj6d">
                        <div className="zAsw3">
                            <img src="https://res.cloudinary.com/dnysmjaoi/image/upload/v1763884053/ChatGPT_Image_Nov_23_2025_01_16_30_PM_ewvdev.png" alt="" />
                            <div className="font22">1</div>
                        </div>
                    </div>

                    <div className="text-center my-2 font38">
                        <span>&#x20B9;</span>
                        <span>8</span>
                        <img className="mb-1 mx-1" width={48} src="https://res.cloudinary.com/dnysmjaoi/image/upload/v1763885750/ChatGPT_Image_Nov_23_2025_01_45_28_PM_yc9dek.png" alt="" />

                    </div>
                    <div className="text-center pb-1 font14">TICKET BOOKED SUCCESSFULLY</div>
                    <div className="text-center my-3 pb-1 font14">
                        <span className="font12">22 Nov 2025, 12:45 AM</span>
                    </div>

                    <div className="dota mb-1"></div>

                    <div className="px-2 py-3">
                        <div className="Kuj6g">
                            <div className="font14">Your ticket is valid for</div>
                            <div className="d-flex my-2 justify-content-center">
                                <div>
                                    <div className="font38">{String(time.hours).padStart(2, "0")}</div>
                                    <div className="font12 mt-1">HOURS</div>
                                </div>
                                <span className="font38">:</span>
                                <div>
                                    <div className="font38">{String(time.minutes).padStart(2, "0")}</div>
                                    <div className="font12 mt-1">MINUTES</div>
                                </div>
                                <span className="font38">:</span>
                                <div>
                                    <div className="font38">{String(time.seconds).padStart(2, "0")}</div>
                                    <div className="font12 mt-1">SECONDS</div>
                                </div>
                            </div>
                            <div className="py-2">
                                <button className="btn btn-primary Jh7gt3" onClick={()=>viewTicket()}>View your Tickets</button>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="dJXTa"></div>
            </div>


        </div>
    )
}

export default Ticket;