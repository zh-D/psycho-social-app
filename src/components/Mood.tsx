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
            <div className="mood-imgs-item mood-imgs-1">我想我是抑郁了</div>
            <div className="mood-imgs-item mood-imgs-2">TA还爱我吗？</div>
            <div className="mood-imgs-item mood-imgs-3">
              再怎么努力家还是会散
            </div>
            <div className="mood-imgs-item mood-imgs-4">每到深夜总是睡不着</div>
            <div className="mood-imgs-item mood-imgs-5">爸妈永远都不懂我</div>
            <div className="mood-imgs-item mood-imgs-6">孩子叛逆怎么办？</div>
          </div>
        </Moodwrapper>
      </CommonFactory>
    </>
  );
}

export default Mood;
