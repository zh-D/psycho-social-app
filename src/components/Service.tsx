import React from "react";
import styled from "styled-components";

import GlobalPNG from "../../public/imgs/icon-global.png";
import LogoPNG from "../../public/imgs/mood-logo.png";
import C2CPNG from "../../public/imgs/icon-c2c.png";

const ServiceWrapper = styled.section`
  background-color: #fafafa;
  .service {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 1280px;
    height: 542px;
  }

  .service-title {
    font-size: 40px;
    font-weight: 400;
  }
  .service-title span:first-of-type {
    margin-right: 45px;
  }

  .relative {
    position: relative;
  }

  .service-title-relative:after {
    position: absolute;
    content: " ";
    bottom: -50%;
    left: 50%;
    transform: translateX(-50%);
    height: 4px;
    width: 45px;
    border-radius: 2px;
    background: #2abbb4;
  }

  .service-description {
    width: 540px;
    color: #888;
    font-size: 18px;
    text-align: center;
    line-height: 30px;
  }

  .service-icons {
    width: 1300px;
    height: 110.6px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .service-icons-item {
    width: 115.275px;
    height: 110.5px;
    font-weight: 700;
    margin-top: 17px;
    font-size: 14px;
    color: #333;
    text-align: center;
  }
  .service-icons-item img {
    width: 80px;
    height: 80px;
  }
  .service-icons-item p {
    margin-top: 17px;
  }

  .service-icons-item-relative:before {
    content: " ";
    position: absolute;
    width: 200px;
    height: 2px;
    border-bottom: 2px dashed #e8e8e8;
    top: 35%;
    right: 180px;
    transform: translateY(-50%);
  }
  .service-btn {
    width: 153px;
    height: 50px;
    background: transparent;
    border-radius: 25px;
    border: 1px solid #2abbb4;
    font-size: 14px;
    text-align: center;
    line-height: 50px;
    color: #2abbb4;
    outline: none;
  }
`;

function Service() {
  return (
    <ServiceWrapper>
      <div className="service">
        <h3 className="service-title">
          <div className="relative service-title-relative">
            <span>松果倾诉</span>
            <span>为你而来</span>
          </div>
        </h3>
        <div className="service-description">
          松果倾诉App是通过智慧共享模式，提供C2C付费倾诉服务的平台
          服务于全球超过86个国家
        </div>
        <div className="service-icons">
          <div className="service-icons-item">
            <img src={GlobalPNG} alt="" />
            <p>服务超过86个国家</p>
          </div>
          <div className="service-icons-item">
            <div className="relative service-icons-item-relative">
              <img src={LogoPNG} alt="" />
              <p>松果倾诉APP</p>
            </div>
          </div>
          <div className="service-icons-item">
            <div className="relative service-icons-item-relative">
              <img src={C2CPNG} alt="" />
              <p>C2C付费咨询</p>
            </div>
          </div>
        </div>
        <button className="service-btn">了解更多</button>
      </div>
    </ServiceWrapper>
  );
}

export default Service;
