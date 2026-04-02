import "./Timer.css";
import { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="timer">
      {time.toLocaleTimeString()}
    </h1>
  );
}

export default Timer;