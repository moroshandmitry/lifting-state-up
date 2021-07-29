import { useState, useEffect } from "react";
import { Timer } from "./components/Timer";
import { DateTime } from "./components/DateTime";
import "./styles.css";

export const App = () => {
  // close STATE
  const [close, setClose] = useState(false);
  // close STATE

  // seconds STATE
  const [seconds, seTSeconds] = useState(0);
  // seconds STATE

  // date STATE
  const [date, setNewDate] = useState("");
  // date STATE

  // seconds FUNCTION
  const handleAddSeconds = () => seTSeconds((prev) => prev + 1);
  // seconds FUNCTION

  // date FUNCTION
  const getDate = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours < 10 ? `0${hours}` : `${hours}`;
    minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    setNewDate(`${hours}:${minutes}:${seconds}`);
  };
  // date FUNCTION

  // updated seconds and date
  useEffect(() => {
    console.log("seconds and date");
  }, [seconds, date]);
  // updated seconds and date

  // updated close seconds and date
  useEffect(() => {
    const toggleClose = `${close ? "Clos" : "Show"}ed`;
    console.log(toggleClose);
  }, [close]);
  // updated close seconds and date

  // close seconds and date
  const handleToggle = () => {
    setClose((prev) => !prev);
  };
  // close seconds and date

  return (
    <div className="App">
      <button onClick={handleToggle}>{close ? "Show" : "Clos"}ed</button>
      <hr />
      {close ? (
        `Component will unmounted with ${seconds} seconds and ${date} date`
      ) : (
        <>
          <Timer seconds={seconds} onAddSeconds={handleAddSeconds} />
          <hr />
          <DateTime date={date} onGetDate={getDate} />
        </>
      )}
    </div>
  );
};
