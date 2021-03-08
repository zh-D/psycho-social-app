import styled from "styled-components";

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
  
  .slide:nth-of-type(2) {
    left: 100%;
  }
  
  .slide:nth-of-type(3) {
    left: 200%;
  }
  .slide:nth-of-type(4) {
    left: 300%;
  }
  
  .slide:nth-of-type(5) {
    left: 400%;
  }
  
  .slide:nth-of-type(6) {
    left: 500%;
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

export default SwipeWrapper;
