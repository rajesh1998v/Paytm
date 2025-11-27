import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom';

// import Ticket from "./ticket";

function InputForm() {

    const data = ["Mumbai", "Delhi", "Pune", "Jaipur", "Kolkata", "Kolkata", "Bangalore", "Bangalore", "Bangalore",];

    const [value, setValue] = useState("");
    const [filtered, setFiltered] = useState([]);

    const topRef = useRef(null);
    const handleChange = (e) => {
        const newValue = e.target.value;
        const matches = data.filter((item) =>
            item.toLowerCase().startsWith(newValue.toLowerCase())
        )
        // if(matches.length === 0 && newValue == "") {
        //     return;
        // }
        setValue(newValue);
        setFiltered(newValue ? matches : []);
    };

    const handleSelect = (item) => {
        setValue(item);
        setFiltered([]);
    };



    return (
        <div>
            <div className="p14">

                <div className="KdsWe3">
                    <div className="d-flex">
                        <Link className="text-dark" to="/city">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width={20} class="">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </Link>
                        <div className="Khcd2w">
                            <div>Select a stop - Surat</div>
                        </div>
                    </div>

                    <div className="kHgd4s m-0">Help</div>
                </div>



                <div className="">
                    <div style={{ position: "relative" }}>
                        <div ref={topRef}></div>
                        <div className="input-container">

                            {/* <input type="text" className="" placeholder=" " value={value} onChange={handleChange} /> */}
                            <input type="text" value={value} className="input-field" placeholder="" onChange={handleChange} onClick={() => topRef.current.scrollIntoView({ behavior: "smooth" })} onFocus={() => topRef.current.scrollIntoView({ behavior: "smooth" })} />

                            <label className="input-label">From</label>
                            {filtered.length > 0 && (
                                <ul className="suggestion-box">
                                    {filtered.map((item, i) => (
                                        <li key={i} onClick={() => handleSelect(item)}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="input-container">
                            <input type="text" className="input-field" placeholder=" " value={value} onChange={handleChange} />
                            <label className="input-label">To</label>
                        </div>
                    </div>


                </div>
            </div>
            <div className="Khcd2w py-2 p14 m-0">Popular Stops</div>
            <ul className="Ku7Gx">
                <li>Railway Station Terminal</li>
                <li>Linear Bus Stop</li>
                <li>Golden Point</li>
                <li>Sahara Darwaja</li>
                <li>Chowk Terminal</li>
                <li>Kamela Darwaja</li>
                <li>Kinnary Cinema</li>
                <li>Maan Darwaja</li>
            </ul>






        </div>
    )
}

export default InputForm;