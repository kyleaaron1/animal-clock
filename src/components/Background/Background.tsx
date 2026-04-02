import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import "./Background.css";

type Props = {
  children: ReactNode;
};

function Background({ children }: Props) {
  const [hour, setHour] = useState(new Date().getHours());

  useEffect(() => {
    const interval = setInterval(() => {
      setHour(new Date().getHours());
    }, 60000); // check every minute

    return () => clearInterval(interval);
  }, []);

  // 🔥 This is the key line
  const image = `/images/hour-${hour}.jpg`;

  return (
    <div
      className="app"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="overlay">{children}</div>
    </div>
  );
}

export default Background;