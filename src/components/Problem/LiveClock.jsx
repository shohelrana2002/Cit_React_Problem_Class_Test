import React, { useEffect, useState } from "react";

// live clock use to useState
const LiveClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="flex justify-center items-center">
      <div className="perspective-1000">
        <div className="time-box bg-white p-10 rounded-xl shadow-2xl max-w-sm w-full">
          <div className="text-center">
            <p className="text-gray-600 text-sm font-medium mb-2">
              Current Time
            </p>
            <div className="text-4xl font-extrabold text-gray-800 tracking-wide">
              {time}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveClock;
