import React from "react";
import styled from "styled-components";
import CommonFactory from "./common/CompFactory";

import Mood1JPG from "../../public/imgs/mood-1.jpg";
import Mood2JPG from "../../public/imgs/mood-2.jpg";
import Mood3JPG from "../../public/imgs/mood-3.jpg";
import Mood4JPG from "../../public/imgs/mood-4.jpg";
import Mood5JPG from "../../public/imgs/mood-5.jpg";
import Mood6JPG from "../../public/imgs/mood-6.jpg";

const Moodwrapper = styled.div`
  .mood-imgs {
    display: grid;
    grid-template-columns: 413px 413px 413px;
    grid-template-rows: 308px 308px;
    justify-items: center;
    align-items: center;
  }

  .mood-imgs-item {
    position: relative;
    width: 379px;
    height: 248px;
    font-size: 30px;
    color: #fff;
    text-align: center;
    line-height: 248px;
  }

  .mood-imgs-item p {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 379px;
    height: 248px;
  }
`;

function Mood() {
  const data = {
    title: ["每一种心情", "都可倾诉"],
    description: " N种主题，随心所选；贴近生活，靠近心扉",
  };
  return (
    <>
      <CommonFactory width="1280px" height="941.2px" bgc="#fff" data={data}>
        <Moodwrapper>
          <div className="mood-imgs">
            <div className="mood-imgs-item">
              <img src="" data-src={Mood1JPG} alt="" className="lazy-image" />
              <p>我想我是抑郁了</p>
            </div>
            <div className="mood-imgs-item">
              <img src="" data-src={Mood2JPG} alt="" className="lazy-image" />
              <p>TA还爱我吗?</p>
            </div>
            <div className="mood-imgs-item">
              <img src="" data-src={Mood3JPG} alt="" className="lazy-image" />
              <p>再怎么努力家还是会散</p>
            </div>
            <div className="mood-imgs-item">
              <img src="" data-src={Mood4JPG} alt="" className="lazy-image" />
              <p>每到深夜总是睡不着</p>
            </div>
            <div className="mood-imgs-item">
              <img src="" data-src={Mood5JPG} alt="" className="lazy-image" />
              <p>爸妈永远都不懂我</p>
            </div>
            <div className="mood-imgs-item">
              <img src="" data-src={Mood6JPG} alt="" className="lazy-image" />
              <p>孩子叛逆怎么办？</p>
            </div>
          </div>
        </Moodwrapper>
      </CommonFactory>
    </>
  );
}

export default Mood;
