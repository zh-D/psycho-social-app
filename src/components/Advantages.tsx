import React from "react";
import styled from "styled-components";
import ListenerPNG from "../../public/imgs/icon-listener.png";
import UserPNG from "../../public/imgs/icon-user.png";
import LockPNG from "../../public/imgs/icon-lock.png";
import TickPNG from "../../public/imgs/icon-tick.png";

const AdvantagesWrapper = styled.section`
  .advantage-list {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 1280px;
    height: 288px;
  }
  .advantage-item {
    width: 100px;
    height: 148.8px;
    text-align: center;
  }
  .advantage-text {
    margin-top: 20px;
  }
`;

function Advantages() {
  return (
    <AdvantagesWrapper>
      <div className="advantage-list">
        <div className="advantage-item">
          <img
            src=""
            data-src={ListenerPNG}
            alt="这是一张图片"
            className="lazy-image"
          />
          <p className="advantage-text">海量倾听者 10W+</p>
        </div>
        <div className="advantage-item">
          <img
            src=""
            data-src={UserPNG}
            alt="这是一张图片"
            className="lazy-image"
          />
          <p className="advantage-text">服务用户500W+</p>
        </div>
        <div className="advantage-item">
          <img
            src=""
            data-src={LockPNG}
            alt="这是一张图片"
            className="lazy-image"
          />
          <p className="advantage-text">隐私放心1对1倾诉</p>
        </div>
        <div className="advantage-item">
          <img
            src=""
            data-src={LockPNG}
            alt="这是一张图片"
            className="lazy-image"
          />
          <p className="advantage-text">话题有心N种主体</p>
        </div>
        <div className="advantage-item">
          <img
            src=""
            data-src={TickPNG}
            alt="这是一张图片"
            className="lazy-image"
          />
          <p className="advantage-text">即时谈心</p>
        </div>
      </div>
    </AdvantagesWrapper>
  );
}

export default Advantages;
