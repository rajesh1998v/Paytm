import { useEffect, useState } from "react";

function TicketTimer({ offsetMinutes = 36, validityHours = 2, value }) {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [bookTime, setBookTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {

    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = now.toLocaleString("en-US", { month: "short" });
    const year = now.getFullYear();

    let h = now.getHours();
    h = h % 12;
    if (h === 0) h = 12;

    const formattedDate = `${day} ${month} ${year}`;
    setCurrentDate(formattedDate);

    // ----- BOOK TIME & REMAINING -----
    const bt = new Date(now.getTime() - offsetMinutes * 60 * 1000);
    const expiryMs = bt.getTime() + validityHours * 60 * 60 * 1000;

    const formatBookTime = (d) => {
      let hh = d.getHours();
      const mm = d.getMinutes();
      const ap = hh >= 12 ? "PM" : "AM";
      hh = hh % 12;
      if (hh === 0) hh = 12;
      return `${String(hh).padStart(2, "0")}:${String(mm).padStart(2, "0")} ${ap}`;
    };

    setBookTime(formatBookTime(bt));

    const updateRemaining = () => {
      let diff = expiryMs - Date.now();
      if (diff <= 0) {
        setHours("00");
        setMinutes("00");
        setSeconds("00");
        return;
      }

      let total = Math.floor(diff / 1000);

      const hh = String(Math.floor(total / 3600)).padStart(2, "0");
      total %= 3600;
      const mm = String(Math.floor(total / 60)).padStart(2, "0");
      const ss = String(total % 60).padStart(2, "0");

      setHours(hh);
      setMinutes(mm);
      setSeconds(ss);
    };

    updateRemaining();
    const t = setInterval(updateRemaining, 1000);
    return () => clearInterval(t);
  }, [offsetMinutes, validityHours]);

  return (
    <div>
      {value === "timer" ?
        (
          <div className="d-flex my-2 justify-content-center">
            <div>
              <div className="font38">{hours}</div>
              <div className="font12 mt-1">HOURS</div>
            </div>
            <span className="font38">:</span>
            <div>
              <div className="font38">{minutes}</div>
              <div className="font12 mt-1">MINUTES</div>
            </div>
            <span className="font38">:</span>
            <div>
              <div className="font38">{seconds}</div>
              <div className="font12 mt-1">SECONDS</div>
            </div>
          </div>
        ) : (
          <span>{currentDate}, {bookTime}</span>
        )}


      {/* <p><strong>Current Time:</strong> {currentDate}</p> */}


      {/* <p><strong>Book Time:</strong> {bookTime}</p> */}


    </div>
  );
}

export default TicketTimer;
