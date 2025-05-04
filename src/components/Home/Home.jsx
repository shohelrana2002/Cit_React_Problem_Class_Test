import React from "react";
import Counter from "../Problem/Counter";
import UserDataFetch from "../Problem/UserDataFetch";
import InputFieldButton from "../Problem/InputFieldButton";
import LiveClock from "../Problem/LiveClock";

const Home = () => {
  return (
    <div>
      <LiveClock />
      <Counter />
      <UserDataFetch />
      <InputFieldButton />
    </div>
  );
};

export default Home;
