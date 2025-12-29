import React from "react";
import { Link  } from 'react-router-dom';

function City() {

    
    return (
        <div className="mt-5">
            <div className="my-3 px-3">
                <Link className="text-dark" to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={20} class="">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </Link>
                
            </div>

            <div className="Swd3w px-3">Select your City</div>


            <div className="mt-2">
                <div className="z8dkuh">
                    <div className="poxs3a">
                        <img src="https://res.cloudinary.com/dnysmjaoi/image/upload/v1763401679/Screenshot_20251117_230225_Paytm_i3jlny.jpg" alt="" />
                    </div>
                    <div className="wa2kns">Ahmedabad</div>
                </div>
                <div className="z8dkuh">
                    <div className="poxs3a">
                        <img src="https://res.cloudinary.com/dnysmjaoi/image/upload/v1763404639/Screenshot_20251117_230256_Paytm_hor4wc.jpg" alt="" />
                    </div>
                    <div className="wa2kns">Goa</div>
                </div>
                <div className="z8dkuh">
                    <div className="poxs3a">
                        <img src="https://res.cloudinary.com/dnysmjaoi/image/upload/v1763404661/Screenshot_20251117_230339_Paytm_vnezxl.jpg" alt="" />
                    </div>
                    <div className="wa2kns">Nashik</div>
                </div>
                <Link className="z8dkuh" to="/station">
                    <div className="poxs3a">
                        <img src="https://res.cloudinary.com/dnysmjaoi/image/upload/v1763404661/Screenshot_20251117_230405_Paytm_yxmysf.jpg" alt="" />
                    </div>
                    <div className="wa2kns">Surat <span>Newly Added</span></div>
                </Link>
                <div className="z8dkuh">
                    <div className="poxs3a">
                        <img src="https://res.cloudinary.com/dnysmjaoi/image/upload/v1763404660/Screenshot_20251117_230442_Paytm_c6iqq1.jpg" alt="" />
                    </div>
                    <div className="wa2kns">Mumbai <span>Newly Added</span></div>
                </div>
            </div>

        </div>
    )
}

export default City;