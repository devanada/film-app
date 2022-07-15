import React, { useState, useEffect } from "react";
import moment from "moment";

import { useFetchGet } from "../utils/customHooks";
import Header from "../components/Header";
import Button from "../components/Button";

const TestPage = () => {
  // const [data] = useFetchGet(
  //   `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  // );
  const [counter, setCounter] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);
  const [timeNow, setTimeNow] = useState(moment().format("HH:mm:ss"));

  useEffect(() => {
    let timer = setTimeout(() => {
      setTimeNow(moment().format("HH:mm:ss"));
    }, 1000);
    return () => clearTimeout(timer);
  });

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="w-full h-screen">
      <Header />
      <p>{timeNow}</p>
      <Button label="INCREMENT" onClick={() => handleIncrement()} />
      <Button label="RESET" onClick={() => setShow(!show)} />
      {show && <p>{counter}</p>}
      <form onSubmit={handleSubmit}>
        {/* <form onSubmit={(e) => this.handleSubmit(e)}> */}
        <label>
          email:{" "}
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          password:{" "}
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <Button label="BUTTON" type="submit" />
      </form>
    </div>
  );
};

export default TestPage;
