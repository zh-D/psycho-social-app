import React, { memo } from "react";
import { StaticChildProps } from "./interface";

import banner01 from "../../../public/imgs/banner01.jpg";
import banner02 from "../../../public/imgs/banner02.jpg";
import banner03 from "../../../public/imgs/banner03.jpg";
import banner04 from "../../../public/imgs/banner04.jpg";
import banner05 from "../../../public/imgs/banner05.jpg";
import banner06 from "../../../public/imgs/banner06.jpg";

const picArr = [banner01, banner02, banner03, banner04, banner05, banner06];

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
            <label htmlFor={`control-${value === arr.length ? 1 : value + 1}`}>
              <i>&gt;</i>
            </label>
          </div>
        );
      })}
      {arr.map((value) => {
        return (
          <li className="slide" key={value}>
            <img
              width="100%"
              height="100%"
              src=""
              data-src={picArr[value - 1]}
              alt="这是一张图片"
              className="lazy-image"
            />
          </li>
        );
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
