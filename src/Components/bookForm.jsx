import React,{useState} from "react";
import { Link } from 'react-router-dom';

function City() {

    const data = ["Mumbai", "Delhi", "Pune", "Jaipur", "Kolkata", "Kolkata", "Bangalore", "Bangalore", "Bangalore",];

    const [value, setValue] = useState("");
    const [filtered, setFiltered] = useState([]);

    const handleChange = (e) => {
        const newValue = e.target.value;
        const matches = data.filter((item) =>
            item.toLowerCase().startsWith(newValue.toLowerCase())
        )
        if(matches.length === 0 && newValue == "") {
            return;
        }
        setValue(newValue);
        setFiltered(newValue ? matches : []);
    };

    const handleSelect = (item) => {
        setValue(item);
        setFiltered([]);
    };



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

            <div className="px-3">
                <div style={{position: "relative" }}>
                    <div className="input-container">
                        <input type="text" className="input-field" placeholder=" "value={value}onChange={handleChange}/>
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

                </div>


            </div>






        </div>
    )
}

export default City;