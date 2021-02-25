import React from "react";
import styled from "styled-components";
import Logo from "../../public/imgs/top-logo.png";
import Phone from "../../public/imgs/icon-foot-dianhua.png";
import Wechat from "../../public/imgs/foot-wechat.png";
import Download from "../../public/imgs/foot-dw.png";

const FooterWrapper = styled.footer`
  min-width: 1280px;
  max-height: 388px;
  height: 375.6px;
  background-color: #2abbb4;
  padding-top: 43px;

  .footer-logo {
    padding-bottom: 30px;
    text-align: center;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.3);
  }

  .footer-content {
    height: 234.2px;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    color: #fff;
  }

  .footer-item {
    width: 244.26px;
    height: 154.2px;
  }

  .footer-content-phone {
    font-weight: 700;
    font-size: 20px;
    margin-top: 18px;
    margin-bottom: 15px;
  }

  .footer-content-item-copyright {
    margin-top: 12px;
    font-size: 12px;
  }

  .footer-content-item-address {
    margin-top: 12px;
    font-size: 12px;
  }

  .footer-content-item-desc,
  .footer-content-item-filing {
    margin-top: 12px;
    font-size: 12px;
  }

  .text-center {
    text-align: center;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <div className="footer-logo">
        <img src={Logo} alt="" />
      </div>

      <div className="footer-content">
        <div className="footer-item">
          <p>工作时间：早上8:00-凌晨2:00</p>
          <p className="footer-content-phone">
            <img src={Phone} />
            <span>400-633-6659</span>
          </p>
          <p className="footer-content-item-copyright">
            <span>Copyright@2015-2020 XXX科技公司</span>
          </p>
          <p className="footer-content-item-address">
            <span>地址:广州市天河区建工路12号群豪大厦501房</span>
          </p>
          <p className="footer-content-item-filing">
            <span>粤 ICP 备 15001289号</span>
          </p>
          <p className="footer-content-item-filing">
            <span>信息系统备案：4401195038900001</span>
          </p>
        </div>
        <div className="footer-item text-center">
          <img src={Wechat} />
          <p className="footer-content-item-desc">扫码关注微信公众号</p>
        </div>
        <div className="footer-item text-center">
          <img src={Download} />
          <p className="footer-content-item-desc">扫码下载松果倾诉APP</p>
        </div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
