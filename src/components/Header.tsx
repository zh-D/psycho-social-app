import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../public/imgs/top-logo.png";

const HeaderWrapper = styled.header`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  width: 1216px;
  height: 65px;
  top: 58px;
  .header-logo-box {
    float: left;
    width: 160px;
    height: 65px;
  }
  .nav-box {
    float: left;
    width: 1056px;
    height: 65px;
    // background: blue;
  }
  .nav-list {
    float: right;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 997.16px;
    height: 64.8px;
    line-height: 65px;
    font-size: 16px;
    color: #666;
  }
  .nav-item: {
    width: 97px;
    text-align: center;
    cursor: pointer;
  }
  .nav-item-btn {
    width: 150px;
    height: 46px;
    line-height: 46px;
    color: #fff;
    background-color: #2abbb4;
    border-radius: 23px;
    font-size: 18px;
    font-weight: 400;
    // margin-left: 20px;
    outline: none;
  }
  .nav-list > li:last-of-type > span:first-of-type {
    margin-right: 15px;
  }
  .nav-list > li:last-of-type > span:last-of-type {
    margin-left: 15px;
    color: #ff8104;
  }
`;

function Header() {
  return (
    <div style={{ position: "relative", height: "604.42px" }}>
      <HeaderWrapper>
        <div className="header-logo-box">
          <img src={Logo} />
        </div>
        <nav className="nav-box">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/">首页</Link>
            </li>
            <li className="nav-item">
              <Link to="/brand">品牌</Link>
            </li>
            <li className="nav-item">
              <Link to="/pour-out">倾诉</Link>
            </li>
            <li className="nav-item">
              <Link to="/listener">倾听者</Link>
            </li>
            <li className="nav-item">
              <Link to="/serve">服务</Link>
            </li>
            <li className="nav-item">
              <Link to="/articles">文章</Link>
            </li>
            <li className="nav-item">
              <Link to="/help">求助广场</Link>
            </li>
            <li>
              <button className="nav-item-btn">加入倾听者</button>
            </li>
            <li>
              <span>登录</span>|<span>注册</span>
            </li>
          </ul>
        </nav>
      </HeaderWrapper>
    </div>
  );
}

export default Header;