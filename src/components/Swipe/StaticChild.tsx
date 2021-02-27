import React, { memo } from "react";
import { StaticChildProps } from "./interface";

const StaticChild = memo(({ arr }: StaticChildProps) => {
  console.log("StaticChild rendered");

  return (
    <>
      {arr.map((value) => {
        return (
          <div className="navigator" key={value}>
            <label htmlFor={`control-${value === 1 ? arr.length : value - 1}`}>
              <i>&lt;</i>
            </label>
            <label
              htmlFor={`control-${value === arr.length - 1 ? 1 : value + 1}`}
            >
              <i>&gt;</i>
            </label>
          </div>
        );
      })}
      {arr.map((value) => {
        return <li className="slide" key={value}></li>;
      })}
      <div className="controls-visible">
        {arr.map((value) => {
          return <label htmlFor={`control-${value}`} key={value}></label>;
        })}
      </div>
    </>
  );
});

export default StaticChild;
