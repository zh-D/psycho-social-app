import React, { useState, useEffect, useMemo, useCallback } from "react";

import Radiochild from "./Radiochild";
import StaticChild from "./StaticChild";
import SwipeWrapper from "./style";

function Swipe() {
  const [radioValue, setRadioValue] = useState("1");
  const [interval, InitInterval] = useState(null);
  let arr = useMemo(
    () => new Array(6).fill(0).map((value, index) => index + 1),
    []
  );

  useEffect(() => {
    InitInterval(
      setInterval(() => {
        setRadioValue((radioValue) => {
          return radioValue === `${arr.length}`
            ? "1"
            : String(Number(radioValue) + 1);
        });
      }, 3000)
    );
    return () => clearInterval(interval);
  }, []);

  const onRadioValueChange = useCallback((e) => {
    setRadioValue(e.target.value);
    InitInterval((interval) => {
      clearInterval(interval);
      return setInterval(() => {
        setRadioValue((radioValue) => {
          return radioValue === `${arr.length}`
            ? "1"
            : String(Number(radioValue) + 1);
        });
      }, 3000);
    });
  }, []);

  return (
    <SwipeWrapper>
      <Radiochild
        arr={arr}
        onRadioValueChange={(e) => onRadioValueChange(e)}
        radioValue={radioValue}
      />
      <StaticChild arr={arr} />
    </SwipeWrapper>
  );
}

export default Swipe;
