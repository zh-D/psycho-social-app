import React, { useEffect } from "react";
import Swipe from "../components/Swipe";
import Advantages from "../components/Advantages";
import Main from "../components/Main";
import Service from "../components/Service";
import Mood from "../components/Mood";
import Confess from "../components/Confess";
import LazyImage from "../libs/LazyImage";

function Home() {
  useEffect(() => {
    new LazyImage(".lazy-image");
  }, []);
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
