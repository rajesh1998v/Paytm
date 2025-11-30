import React, { useRef, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

// import Ticket from "./ticket";

function InputForm() {

    const stations = ["Mumbai", "Delhi", "Pune", "Jaipur", "Kolkata", "Kolkata", "Bangalore", "Bangalore", "Bangalore",];

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [activeField, setActiveField] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [filtered, setFiltered] = useState([]);

    const fromRef = useRef(null);
    const toRef = useRef(null);
    const navigate = useNavigate();

    const handleChange = (e, field) => {
        const value = e.target.value;

        if (field === "from") setFrom(value);
        if (field === "to") setTo(value);

        setActiveField(field);
        setSearchText(value);
        runFilter(value);

    };

    const runFilter = (value) => {
        if (value.length >= 3) {
            const matches = stations.filter((s) =>
                s.toLowerCase().startsWith(value.toLowerCase())
            );
            setFiltered(matches);
        } else {
            setFiltered([]);
        }
    };


    const handleFocus = (field) => {
        setActiveField(field);
        const value = field === "from" ? from : to;
        setSearchText(value);
        runFilter(value);
    };


    const handleSelectStop = (stop) => {
        if (activeField === "from") {
            setFrom(stop);
            setSearchText("");
            setFiltered([]);
            setActiveField("to");

            if (toRef.current) {
                toRef.current.focus();
            }
            return;
        }

        if (activeField === "to") {
            setTo(stop);
            setFiltered([]);

            navigate("/ticket", {
                state: {
                    from: from,
                    to: stop,
                },
            });
        }
    }

    const heading = searchText && searchText.length >= 3 ? "Suggested Stops" : "Popular Stops";
    const showList = searchText.length >= 3 ? filtered : stations;



    return (
        <div>
            <div className="p14">

                <div className="KdsWe3">
                    <div className="d-flex">
                        <Link className="text-dark" to="/station">
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
                        <div className="input-container">

                            {/* <input type="text" className="" placeholder=" " value={value} onChange={handleChange} /> */}
                            <input ref={fromRef} type="text" value={from} className="input-field" placeholder="" onChange={(e) => handleChange(e, "from")} onFocus={() => handleFocus("from")} />
                            <label className="input-label">From</label>

                        </div>

                        <div className="input-container">
                            <input ref={toRef} type="text" className="input-field" placeholder=" " value={to} onChange={(e) => handleChange(e, "to")} onFocus={() => handleFocus("to")} />
                            <label className="input-label">To</label>
                        </div>
                    </div>


                </div>
            </div>
            <div className="Khcd2w py-2 p14 m-0">{heading}</div>
            {/* <div className="Khcd2w py-2 p14 m-0">Suggested Stops</div> */}
            {/* <ul >
                <li>Railway Station Terminal</li>
                
                <li>Golden Point</li>
                <li>Sahara Darwaja</li>
                <li>Chowk Terminal</li>
                <li>Kamela Darwaja</li>
                <li>Kinnary Cinema</li>
                <li>Maan Darwaja</li>
            </ul> */}
            <div>
                <ul className="Ku7Gx">
                    {searchText.length >= 3 && filtered.length === 0 ? (
                        <p style={{ color: "red", padding: "10px 0" }}>No stops found</p>
                    ) : (
                        showList.map((stop) => (
                            <li key={stop} onClick={() => handleSelectStop(stop)}> {stop}</li>
                        ))
                    )}
                </ul>

            </div>






        </div>
    )
}

export default InputForm;