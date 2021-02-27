import styled from "styled-components";

export const CommonWrapper = styled.section`
  background: ${(props) => props.bgc};
  .service {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
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
