import React, { useState } from "react";
// import { Link,useNavigate } from 'react-router-dom';


function Navbars() {



    return (
        <div className="">
            <nav className="navbars">

                <div className="d-flex">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={28} height={34} className="">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    </div>
                    <div className="img2we mx-3 ">
                        <img src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logo_new.svg" alt="paytmlogo" />
                    </div>
                </div>

                <div className="imf23">
                    <img src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logoutImg.svg" />
                </div>
            </nav>

        </div>
    )

}
export default Navbars;