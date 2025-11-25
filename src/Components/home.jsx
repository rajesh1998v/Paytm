import React from "react";
import { Link  } from 'react-router-dom';
import Navbars from "./navbars";
import Footer from "./footer";


function Home() {



    return (
        <div className="">
            <Navbars/>
            <div className="Zsef23">
                <div className="Sdefx">
                    <div className="qYn3s">
                        <div className="kUhgt">Recharges & Bill Payments</div>
                        <div className="IwXon2">
                            <div className="a5Bdew">
                                <img src="https://assetscdn1.paytm.com/images/catalog/view_item/2839929/17630252264344684.png" alt="rech" />
                                <span>Mobile Recharge</span>
                            </div>
                            <div className="a5Bdew">
                                <img src="https://assetscdn1.paytm.com/images/catalog/view_item/2839930/24719034555061353.png" alt="rech" />
                                <span>DTH Recharge</span>
                            </div>
                            <div className="a5Bdew">
                                <img src="https://assetscdn1.paytm.com/images/catalog/view_item/2839931/17630306417008374.png" alt="rech" />
                                <span>FasTag Recharge</span>
                            </div>
                            <div className="a5Bdew">
                                <img src="https://assetscdn1.paytm.com/images/catalog/view_item/3171057/25654768955408870.png" alt="rech" />
                                <span>Electricity Bill</span>
                            </div>
                            <div className="a5Bdew">
                                <img src="https://assetscdn1.paytm.com/images/catalog/view_item/3171058/25654802470500577.png" alt="rech" />
                                <span>Loan EMI Payment</span>
                            </div>
                            <div className="a5Bdew">
                                <img src="https://assetscdn1.paytm.com/images/catalog/view_item/3171059/25654906198636032.png" alt="rech" />
                                <span>Metro Recharge</span>
                            </div>
                            <Link className="a5Bdew" to="/city">
                                <img src="https://res.cloudinary.com/dnysmjaoi/image/upload/v1764089545/city_bus-min_yhqgti.png" alt="rech" />
                                <span>City Bus Tickets</span>
                            </Link>
                            <div className="a5Bdew">
                                <img src="https://assetscdn1.paytm.com/images/catalog/view_item/2839932/17630339117612605.png" alt="rech" />
                                <span>View All Products</span>
                            </div>

                        </div>
                    </div>

                    <div className="ZiVtr">
                        <div className="Awlk32">
                            <img src="https://assetscdn1.paytm.com/images/catalog/view_item/3171065/27389616900368101.png" alt="img1" />
                        </div>
                    </div>


                </div>
            </div>



            <div className="Zsef23">

                <div className="z9vfs">
                    <div className="kaEw2">
                        <img src="https://assetscdn1.paytm.com/images/catalog/view_item/3171063/25655116567472421.png" alt="banner" />
                        <img src="https://assetscdn1.paytm.com/images/catalog/view_item/3171064/32743882058815649.png" alt="banner2" />

                    </div>
                </div>

                <div className="ZyNsa">
                    <div className="PoGrf">
                        <img src="https://assetscdn1.paytm.com/images/catalog/view_item/2988609/20668546951073032.png" alt="offer" />
                    </div>
                </div>

                <div className="Sdefx mt-3">
                    <div className="AjDe2">
                        <div className="kdwA">
                            <img src="https://assetscdn1.paytm.com/images/catalog/view/342367/1725447383123.png" alt="bennerd" />
                        </div>

                        <div className="qixG2s">Pay anyone directly from your <span>bank account</span></div>

                        <div className="x1MFf">
                            Pay anyone, everywhere. Make contactless & secure payments in-stores or online using Paytm UPI or Directly from your Bank Account. Plus, send & receive money from anyone.
                        </div>
                        <div className="mM6X9">
                            <img src="https://assetscdn1.paytm.com/images/catalog/view_item/2834703/1725432129171.png" alt="link"/>
                            <img src="https://assetscdn1.paytm.com/images/catalog/view_item/2834704/1725432148873.png" alt="link2"/>
                        </div>
                        <div className="Ya3Gs">
                            <img src="https://assetscdn1.paytm.com/images/catalog/view/1752741641420.png" alt=""/>
                        </div>

                        
                    </div>
                </div>

            


            </div>

            <Footer/>

        </div>
    )

}
export default Home;