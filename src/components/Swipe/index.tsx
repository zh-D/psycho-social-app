import React, { useState, useEffect } from "react";
import styled from "styled-components";
import banner01 from "../../../public/imgs/banner01.jpg";
import banner02 from "../../../public/imgs/banner02.jpg";
import banner03 from "../../../public/imgs/banner03.jpg";
import banner04 from "../../../public/imgs/banner04.jpg";
import banner05 from "../../../public/imgs/banner05.jpg";
import banner06 from "../../../public/imgs/banner06.jpg";

const SwipeWrapper = styled.ul`
  position: relative;
  width: 100%;
  min-width: 1280px;
  height: 650px;
  background-color: #eee;
  overflow: hidden;
  input[type="radio"] {
    position: relative;
    z-index: 100;
    display: none;
  }
  .slide {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;

    transition: 0.5s transform ease-in-out;
  }

  .slide:nth-of-type(1) {
    background: url(${banner01});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .slide:nth-of-type(2) {
    left: 100%;
    background: url(${banner02});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .slide:nth-of-type(3) {
    left: 200%;
    background: url(${banner03});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .slide:nth-of-type(4) {
    left: 300%;
    background: url(${banner04});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .slide:nth-of-type(5) {
    left: 400%;
    background: url(${banner05});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .slide:nth-of-type(6) {
    left: 500%;
    background: url(${banner06});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .controls-visible {
    position: absolute;
    width: 100%;
    bottom: 12px;
    text-align: center;
  }

  .controls-visible label {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 50%;
    margin: 0 3px;
    border: 2px solid #fff;
  }

  input[type="radio"]:nth-of-type(1):checked
    ~ .controls-visible
    label:nth-of-type(1) {
    background-color: #333;
  }

  input[type="radio"]:nth-of-type(2):checked
    ~ .controls-visible
    label:nth-of-type(2) {
    background-color: #333;
  }

  input[type="radio"]:nth-of-type(3):checked
    ~ .controls-visible
    label:nth-of-type(3) {
    background-color: #333;
  }

  input[type="radio"]:nth-of-type(4):checked
    ~ .controls-visible
    label:nth-of-type(4) {
    background-color: #333;
  }

  input[type="radio"]:nth-of-type(5):checked
    ~ .controls-visible
    label:nth-of-type(5) {
    background-color: #333;
  }

  input[type="radio"]:nth-of-type(6):checked
    ~ .controls-visible
    label:nth-of-type(6) {
    background-color: #333;
  }

  input[type="radio"]:nth-of-type(1):checked ~ .slide {
    transform: translateX(0%);
  }
  input[type="radio"]:nth-of-type(2):checked ~ .slide {
    transform: translateX(-100%);
  }
  input[type="radio"]:nth-of-type(3):checked ~ .slide {
    transform: translateX(-200%);
  }
  input[type="radio"]:nth-of-type(4):checked ~ .slide {
    transform: translateX(-300%);
  }
  input[type="radio"]:nth-of-type(5):checked ~ .slide {
    transform: translateX(-400%);
  }
  input[type="radio"]:nth-of-type(6):checked ~ .slide {
    transform: translateX(-500%);
  }

  .navigator {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    z-index: 100;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    display: none;
  }

  .navigator i {
    display: block;
    width: 55px;
    height: 55px;
    font-style: normal;
    font-size: 55px;
    color: #333;
  }

  input[type="radio"]:nth-of-type(1):checked ~ .navigator:nth-of-type(1) {
    display: flex;
  }

  input[type="radio"]:nth-of-type(2):checked ~ .navigator:nth-of-type(2) {
    display: flex;
  }

  input[type="radio"]:nth-of-type(3):checked ~ .navigator:nth-of-type(3) {
    display: flex;
  }

  input[type="radio"]:nth-of-type(4):checked ~ .navigator:nth-of-type(4) {
    display: flex;
  }

  input[type="radio"]:nth-of-type(5):checked ~ .navigator:nth-of-type(5) {
    display: flex;
  }

  input[type="radio"]:nth-of-type(6):checked ~ .navigator:nth-of-type(6) {
    display: flex;
  }
`;

function Swipe() {
  const [radioValue, setRadioValue] = useState("1");
  const [interval, InitInterval] = useState(null);

  useEffect(() => {
    InitInterval(
      setInterval(() => {
        setRadioValue((radioValue) => {
          return radioValue === "6" ? "1" : String(Number(radioValue) + 1);
        });
      }, 3000)
    );
    return () => clearInterval(interval);
  }, []);

  const onRadioChange = (e) => {
    setRadioValue(e.target.value);
    clearInterval(interval);
    InitInterval(
      setInterval(() => {
        setRadioValue((radioValue) => {
          return radioValue === "6" ? "1" : String(Number(radioValue) + 1);
        });
      }, 3000)
    );
  };

  return (
    <SwipeWrapper>
      <input
        type="radio"
        id="control-1"
        name="control"
        value="1"
        checked={radioValue === "1"}
        onChange={(e) => {
          onRadioChange(e);
        }}
      />
      <input
        type="radio"
        id="control-2"
        name="control"
        value="2"
        checked={radioValue === "2"}
        onChange={(e) => {
          onRadioChange(e);
        }}
      />
      <input
        type="radio"
        id="control-3"
        name="control"
        value="3"
        checked={radioValue === "3"}
        onChange={(e) => {
          onRadioChange(e);
        }}
      />
      <input
        type="radio"
        id="control-4"
        name="control"
        value="4"
        checked={radioValue === "4"}
        onChange={(e) => {
          onRadioChange(e);
        }}
      />
      <input
        type="radio"
        id="control-5"
        name="control"
        value="5"
        checked={radioValue === "5"}
        onChange={(e) => {
          onRadioChange(e);
        }}
      />
      <input
        type="radio"
        id="control-6"
        name="control"
        value="6"
        checked={radioValue === "6"}
        onChange={(e) => {
          onRadioChange(e);
        }}
      />
      <div className="navigator slide-1">
        <label htmlFor="control-6">
          <i className="fas triangle-left">&lt;</i>
        </label>
        <label htmlFor="control-2">
          <i className="fas fa-chevron-right">&gt;</i>
        </label>
      </div>
      <div className="navigator slide-2">
        <label htmlFor="control-1">
          <i className="fas fa-chevron-left">&lt;</i>
        </label>
        <label htmlFor="control-3">
          <i className="fas fa-chevron-right">&gt;</i>
        </label>
      </div>
      <div className="navigator slide-3">
        <label htmlFor="control-2">
          <i className="fas fa-chevron-left">&lt;</i>
        </label>
        <label htmlFor="control-4">
          <i className="fas fa-chevron-right">&gt;</i>
        </label>
      </div>
      <div className="navigator slide-4">
        <label htmlFor="control-3">
          <i className="fas fa-chevron-left">&lt;</i>
        </label>
        <label htmlFor="control-5">
          <i className="fas fa-chevron-right">&gt;</i>
        </label>
      </div>
      <div className="navigator slide-5">
        <label htmlFor="control-4">
          <i className="fas fa-chevron-left">&lt;</i>
        </label>
        <label htmlFor="control-6">
          <i className="fas fa-chevron-right">&gt;</i>
        </label>
      </div>
      <div className="navigator slide-6">
        <label htmlFor="control-5">
          <i className="fas fa-chevron-left">&lt;</i>
        </label>
        <label htmlFor="control-1">
          <i className="fas fa-chevron-right">&gt;</i>
        </label>
      </div>

      <li className="slide"></li>
      <li className="slide"></li>
      <li className="slide"></li>
      <li className="slide"></li>
      <li className="slide"></li>
      <li className="slide"></li>

      <div className="controls-visible">
        <label htmlFor="control-1"></label>
        <label htmlFor="control-2"></label>
        <label htmlFor="control-3"></label>
        <label htmlFor="control-4"></label>
        <label htmlFor="control-5"></label>
        <label htmlFor="control-6"></label>
      </div>
    </SwipeWrapper>
  );
}

export default Swipe;
