import React from "react";
import Layout from "../Layout";
import Swipe from "../components/Swipe";
import Advantages from "../components/Advantages";
import Main from "../components/Main";
import Service from "../components/Service";
import Mood from "../components/Mood";
import Confess from "../components/Confess";

function Home() {
  return (
    <>
      <Swipe />
      <Advantages />
      <Main />
      <Service />
      <Mood />
      <Confess />
    </>
  );
}

export default Home;
