import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const Home: NextPage = () => {
  const { useState } = React;
  /* TODO 
    - 1 start, stop gomb
    - 1 beállítások gomb
    - input a perceknek
    - input a másodperceknek
    - fv. ezt a két inputot összevegyíti másodpercekké
    - változó aminek az értékét csökkentem
    - setInterval amivel csökkentem
  */
  const [countdownSeconds, setCountdownValue] = useState(900);
  const INTERVAL = 1000;
  setInterval(() => {
    setCountdownValue(countdownSeconds - 1);
    console.log(countdownSeconds)
  }, INTERVAL)
  return (
    <>
      {countdownSeconds}
      <input type="text" />
      <input type="text" />
      <button>START</button>
      <button>Beállítás</button>
    </>
  );
};

export default Home;
