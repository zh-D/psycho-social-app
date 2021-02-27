import React from "react";
import { RadiochildProps } from "./interface";

const Radiochild = ({
  arr,
  radioValue,
  onRadioValueChange,
}: RadiochildProps) => {
  console.log("Radiochild rendered");
  return (
    <>
      {arr.map((value) => {
        return (
          <input
            key={value}
            type="radio"
            id={`control-${value}`}
            name="control"
            value={`${value}`}
            checked={radioValue === `${value}`}
            onChange={(e) => {
              onRadioValueChange(e);
            }}
          />
        );
      })}
    </>
  );
};

export default Radiochild;
