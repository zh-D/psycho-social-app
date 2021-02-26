import React from "react";
import styled from "styled-components";

import MainPNG from "../../public/imgs/bg-main.jpg";

const MainWrapper = styled.section`
  .container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1280px;
    height: 480px;
    background-image: url(${MainPNG});
  }

  .container p {
    margin-bottom: 20px;
    font-size: 24px;
    color: #666;
  }

  .relative {
    position: relative;
  }

  .container > .relative:first-of-type::before {
    position: absolute;
    left: -50px;
    top: -10px;
    font-size: 30px;
    font-style: italic;
    font-family: PingFang-SC-Bold;
    color: #888;
    font-weight: 700;
    content: '"';
  }

  .container > .relative:last-of-type::after {
    position: absolute;
    right: -40px;
    bottom: 20px;
    font-size: 30px;
    font-style: italic;
    font-family: PingFang-SC-Bold;
    color: #888;
    font-weight: 700;
    content: '"';
  }
`;

function Main() {
  return (
    <MainWrapper>
      <div className="container">
        <div className="relative">
          <p>我愿做你的专属倾听者</p>
        </div>
        <p>为倾听你而来</p>
        <p>理解你的善良，包容你的棱角，温暖你的内心</p>
        <p>听你诉说过去的故事</p>
        <div className="relative">
          <p>给你走向未来的勇气</p>
        </div>
      </div>
    </MainWrapper>
  );
}

export default Main;
