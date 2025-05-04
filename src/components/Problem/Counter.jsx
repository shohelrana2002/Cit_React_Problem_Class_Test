import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="text-center">
        <p className="text-2xl underline font-bold  mt-5">Counter Components</p>
        <p className="btn btn-ghost font-semibold text-xl">{count}</p>
      </div>
      <div className="flex justify-center gap-x-4">
        <button
          className="btn btn-secondary"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        <button
          disabled={count === 0}
          className="btn btn-secondary"
          // className={`${count > 0 ? "btn btn-secondary" : "disabled"}`}
          onClick={() => {
            if (count > 0) setCount(count - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
