import { useState, useEffect } from "react";

import { Timer } from "./components/Timer";
import { DateTime } from "./components/DateTime";

import { Button } from "./components/Button/Button";
import "./components/Button/StyledButton.scss";

import "./styles.scss";

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
      <Button btnClass="btn btn-primary" onClickFromBtn={handleToggle}>
        {close ? "Show" : "Clos"}ed
      </Button>
      {close ? (
        <>
          <p>Component will unmounted!</p>
          <p>{seconds} seconds</p>
          <p>{date} date</p>
        </>
      ) : (
        <>
          <Timer seconds={seconds} onAddSeconds={handleAddSeconds} />
          <DateTime date={date} onGetDate={getDate} />
        </>
      )}
    </div>
  );
};
