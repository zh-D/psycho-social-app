import React from "react";
import styled from "styled-components";

import Mood1JPG from "../../public/imgs/mood-1.jpg";
import Mood2JPG from "../../public/imgs/mood-2.jpg";
import Mood3JPG from "../../public/imgs/mood-3.jpg";
import Mood4JPG from "../../public/imgs/mood-4.jpg";
import Mood5JPG from "../../public/imgs/mood-5.jpg";
import Mood6JPG from "../../public/imgs/mood-6.jpg";

const MoodWrapper = styled.section`
  .service {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 1280px;
    height: 941.2px;
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

  .mood-imgs {
    display: grid;
    grid-template-columns: 413px 413px 413px;
    grid-template-rows: 308px 308px;
    justify-items: center;
    align-items: center;
  }

  .mood-imgs-item {
    width: 379px;
    height: 248px;
    font-size: 30px;
    color: #fff;
    text-align: center;
    line-height: 248px;
  }

  .mood-imgs-item:nth-of-type(1) {
    background-image: url(${Mood1JPG});
  }
  .mood-imgs-item:nth-of-type(2) {
    background-image: url(${Mood2JPG});
  }
  .mood-imgs-item:nth-of-type(3) {
    background-image: url(${Mood3JPG});
  }
  .mood-imgs-item:nth-of-type(4) {
    background-image: url(${Mood4JPG});
  }
  .mood-imgs-item:nth-of-type(5) {
    background-image: url(${Mood5JPG});
  }
  .mood-imgs-item:nth-of-type(6) {
    background-image: url(${Mood6JPG});
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

function Mood() {
  return (
    <MoodWrapper>
      <div className="service">
        <h3 className="service-title">
          <div className="relative service-title-relative">
            <span>每一种心情</span>
            <span>都可倾诉</span>
          </div>
        </h3>
        <div className="service-description">
          N种主题，随心所选；贴近生活，靠近心扉
        </div>
        <div className="mood-imgs">
          <div className="mood-imgs-item mood-imgs-1">我想我是抑郁了</div>
          <div className="mood-imgs-item mood-imgs-2">TA还爱我吗？</div>
          <div className="mood-imgs-item mood-imgs-3">再怎么努力家还是会散</div>
          <div className="mood-imgs-item mood-imgs-4">每到深夜总是睡不着</div>
          <div className="mood-imgs-item mood-imgs-5">爸妈永远都不懂我</div>
          <div className="mood-imgs-item mood-imgs-6">孩子叛逆怎么办？</div>
        </div>
        <button className="service-btn">了解更多</button>
      </div>
    </MoodWrapper>
  );
}

export default Mood;
