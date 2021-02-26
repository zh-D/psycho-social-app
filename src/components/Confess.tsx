import React from "react";
import styled from "styled-components";

import Mood1JPG from "../../public/imgs/mood-1.jpg";
import Mood2JPG from "../../public/imgs/mood-2.jpg";
import Mood3JPG from "../../public/imgs/mood-3.jpg";
import Mood4JPG from "../../public/imgs/mood-4.jpg";
import Mood5JPG from "../../public/imgs/mood-5.jpg";
import Mood6JPG from "../../public/imgs/mood-6.jpg";
import Confess1JPG from "../../public/imgs/confess-1.jpg";
import Confess2JPG from "../../public/imgs/confess-2.jpg";
import Confess3JPG from "../../public/imgs/confess-3.jpg";
import Confess4JPG from "../../public/imgs/confess-4.jpg";
import Confess5JPG from "../../public/imgs/confess-5.jpg";
import Confess6JPG from "../../public/imgs/confess-6.jpg";

const MoodWrapper = styled.section`
  .service {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 1280px;
    height: 1096px;
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
    grid-template-columns: 570px 570px;
    grid-template-rows: 220px 220px 220px;
    justify-items: center;
    align-items: center;
  }

  .mood-imgs-item {
    width: 570px;
    height: 220px;
    font-size: 30px;
    color: #fff;
    text-align: center;
    line-height: 248px;
  }

  .content-box {
    width: 510px;
    height: 134px;
  }

  .img-box {
    float: left;
    width: 135px;
    height: 135px;
  }

  .text-box {
    float: left;
    width: 359px;
    height: 117px;
    padding-top: 17px;
    padding-left: 16px;
    text-align: left;
  }

  .text-title {
    width: 359px;
    height: 16px;
    color: #3f526e;
    line-height: 16px;
    font-size: 16px;
    font-weight: 700;
  }

  .text-desc {
    width: 359px;
    height: 76.8px;
    margin-top: 10px;
    color: #999;
    font-size: 14px;
    line-height: 26px;
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
            <span>每一次倾听</span>
            <span>都一心一意</span>
          </div>
        </h3>
        <div className="service-description">
          海量倾听者，众多过来人，总有一款适合你
        </div>
        <div className="mood-imgs">
          <div className="mood-imgs-item">
            <div className="content-box">
              <div className="img-box">
                <img src={Confess1JPG} alt="" />
              </div>
              <div className="text-box">
                <p className="text-title">舒言姐姐【名师】</p>
                <p className="text-desc">
                  松果18年度倾听者top8，皇冠名师，资深心理情感咨询师，有超强的洞察分析能力，累计服务5000+小时。愿用轻柔的语言，温暖的文字，给你温暖的陪伴。
                </p>
              </div>
            </div>
          </div>
          <div className="mood-imgs-item">
            <div className="content-box">
              <div className="img-box">
                <img src={Confess2JPG} alt="" />
              </div>
              <div className="text-box">
                <p className="text-title">阳光金子●情感专家</p>
                <p className="text-desc">
                  中国心理学会注册会员，中华家庭教育研究院高级讲师，名师榜情感专家，国家二级心理咨询师，累计服务4800+小时。您的十分满意，是我的无限动力。
                </p>
              </div>
            </div>
          </div>
          <div className="mood-imgs-item">
            <div className="content-box">
              <div className="img-box">
                <img src={Confess3JPG} alt="" />
              </div>
              <div className="text-box">
                <p className="text-title">清泉~虹约资深专家</p>
                <p className="text-desc">
                  松果第一个皇冠工作室咨询师，中国心理学会会员，中国心理领域17年度十强讲师，国家注册二级心理咨询师。不是每一个心理导师都可能真正帮到你，我值得你来。
                </p>
              </div>
            </div>
          </div>
          <div className="mood-imgs-item">
            <div className="content-box">
              <div className="img-box">
                <img src={Confess4JPG} alt="" />
              </div>
              <div className="text-box">
                <p className="text-title">舒心-情感情绪专家</p>
                <p className="text-desc">
                  国家注册三级心理咨询师，区婚姻家庭咨询协会理事，十年线上线下咨询经验。期盼着与你相识，分享你的故事、分担你的忧伤。
                </p>
              </div>
            </div>
          </div>
          <div className="mood-imgs-item">
            <div className="content-box">
              <div className="img-box">
                <img src={Confess5JPG} alt="" />
              </div>
              <div className="text-box">
                <p className="text-title">随风行走-心灵导师</p>
                <p className="text-desc">
                  国家二级心理咨询师，从业时间超过十年，能熟练应对抑郁情绪、社恐焦虑、自卑强迫等各类心理咨询倾诉，累计服务6000+小时。愿用我的真诚、耐心和专业为您的内心保驾护航。
                </p>
              </div>
            </div>
          </div>
          <div className="mood-imgs-item">
            <div className="content-box">
              <div className="img-box">
                <img src={Confess6JPG} alt="" />
              </div>
              <div className="text-box">
                <p className="text-title">如是【名师】</p>
                <p className="text-desc">
                  国家二级心理咨询师，实战派情感挽回专家，心理学专栏文章作者，如是心理工作室创建人，天津法制心理协会会员。风里雨里，我在这里赤诚等你。
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="service-btn">了解更多</button>
      </div>
    </MoodWrapper>
  );
}

export default Mood;
