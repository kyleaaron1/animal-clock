import "./Background.css";
import type { ReactNode } from "react";
import { useState, useEffect } from "react";

type Props = {
  children: ReactNode;
};

function Background({ children }: Props) {
  const colors = [
    "#FF0000","#FF7F00","#FFFF00","#7FFF00","#00FF00","#00FF7F",
    "#00FFFF","#007FFF","#0000FF","#7F00FF","#FF00FF","#FF007F",
    "#990000","#994C00","#999900","#4C9900","#009900","#00994C",
    "#009999","#004C99","#000099","#4C0099","#990099","#99004C"
  ];

  const [hour, setHour] = useState(new Date().getHours());

  useEffect(() => {
    // Check every minute
    const interval = setInterval(() => {
      setHour(new Date().getHours());
    }, 60000); // 60,000 ms = 1 minute

    return () => clearInterval(interval);
  }, []);

  const backgroundColor = colors[hour];

  return (
    <div className="app" style={{ backgroundColor }}>
      <div className="overlay">{children}</div>
    </div>
  );
}

export default Background;