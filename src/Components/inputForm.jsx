import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

// import Ticket from "./ticket";

function InputForm() {

    const stations = ["Railway Station Terminal","Linear Bus Stop","Golden Point","Sahara Darwaja","Chowk Terminal","Kamela Darwaja","Kinnary Cinema","Maan Darwaja"];
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [activeField, setActiveField] = useState(null);
    const [searchText, setSearchText] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [isFromSelected, setIsFromSelected] = useState(false);

    const fromRef = useRef(null);
    const toRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (fromRef.current) {
            fromRef.current.focus();
        }

    }, []);

    const handleChange = (e, field) => {
        const value = e.target.value;

        if (field === "from") {
            setFrom(value);
            setIsFromSelected(false);
        }
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
            console.log(matches);

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

    const handleToMouseDown = (e) => {
        if (!isFromSelected) {
            e.preventDefault();
            if (fromRef.current) {
                fromRef.current.focus();
            }
        }
    };
    const handleToFocus = (e) => {
        if (!isFromSelected) {
            e.target.blur();
            if (fromRef.current) {
                fromRef.current.focus();
            }
            return;
        }
        handleFocus("to");
    };



    const handleSelectStop = (stop) => {
        if (activeField === "from") {
            setFrom(stop);
            setIsFromSelected(true);
            setSearchText("");
            setFiltered([]);
            setActiveField("to");

            setTimeout(() => {
                if (toRef.current) {
                    toRef.current.focus();
                }
            }, 0);
            return;
        }

        if (activeField === "to") {
            setTo(stop);
            setFiltered([]);
            navigate("/station", { state: { from: from, to: stop, }, });
        }
    }

    const heading = filtered.length !== 0 &&searchText.length >= 3 ? "Suggested Stops" :searchText.length >= 3 && filtered.length === 0?"":"Popular Stops";
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
                            <input ref={toRef} type="text" value={to} className="input-field" placeholder="" onChange={(e) => handleChange(e, "to")} onFocus={handleToFocus} onMouseDown={handleToMouseDown} />
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
                        <div className="text-center mt-5 py-3">
                            <img width={90} src="https://res.cloudinary.com/dnysmjaoi/image/upload/v1764499135/search-min_kphlen.png" alt="" />
                            <div className="Khcd2w">No stops found</div>
                            <div className="lJ7Fr mt-2">We could not find any stops</div>
                            <div className="lJ7Fr">matching your search.</div>
                        </div>

                    ) : (
                        showList.map((stop) => (
                            <li key={stop} onClick={() => handleSelectStop(stop)}>{stop}</li>
                        ))
                    )}
                </ul>

            </div>






        </div>
    )
}

export default InputForm;