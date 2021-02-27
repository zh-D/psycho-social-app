import React from "react";
import { CommonWrapper } from "./CommonStyled";
import { CommonFactoryProps } from "./interface";

function CompFactory({
  children,
  width,
  height,
  bgc,
  data,
}: CommonFactoryProps) {
  const { title, description } = data;
  return (
    <CommonWrapper width={width} height={height} bgc={bgc}>
      <div className="service">
        <h3 className="service-title">
          <div className="relative service-title-relative">
            <span>{title[0]}</span>
            <span>{title[1]}</span>
          </div>
        </h3>
        <div className="service-description">{description}</div>
        {children}
        <button className="service-btn">了解更多</button>
      </div>
    </CommonWrapper>
  );
}

export default CompFactory;
