import React from "react";
import styled from "styled-components";
import CommonFactory from "./common/CompFactory";

import GlobalPNG from "../../public/imgs/icon-global.png";
import LogoPNG from "../../public/imgs/mood-logo.png";
import C2CPNG from "../../public/imgs/icon-c2c.png";

const ServiceWrapper = styled.div`
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
`;

function Service() {
  const data = {
    title: ["松果倾诉", "为你而来"],
    description:
      "松果倾诉App是通过智慧共享模式，提供C2C付费倾诉服务的平台服务于全球超过86个国家",
  };
  return (
    <>
      <CommonFactory width="1280px" height="542px" bgc="#fafafa" data={data}>
        <ServiceWrapper>
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
        </ServiceWrapper>
      </CommonFactory>
    </>
  );
}

export default Service;
