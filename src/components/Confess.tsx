import React from "react";
import styled from "styled-components";
import CommonFactory from "./common/CompFactory";

import Confess1JPG from "../../public/imgs/confess-1.jpg";
import Confess2JPG from "../../public/imgs/confess-2.jpg";
import Confess3JPG from "../../public/imgs/confess-3.jpg";
import Confess4JPG from "../../public/imgs/confess-4.jpg";
import Confess5JPG from "../../public/imgs/confess-5.jpg";
import Confess6JPG from "../../public/imgs/confess-6.jpg";

const ConfessWrapper = styled.div`
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
`;

function Mood() {
  const data = {
    title: ["每一次倾听", "都一心一意"],
    description: " 海量倾听者，众多过来人，总有一款适合你",
  };

  const children = [
    {
      imgSrc: Confess1JPG,
      title: "舒言姐姐【名师】",
      description:
        "松果18年度倾听者top8，皇冠名师，资深心理情感咨询师，有超强的洞察分析能力，累计服务5000",
    },
    {
      imgSrc: Confess2JPG,
      title: "阳光金子●情感专家",
      description:
        "中国心理学会注册会员，中华家庭教育研究院高级讲师，名师榜情感专家，国家二级心理咨询师，累计服务4800",
    },
    {
      imgSrc: Confess3JPG,
      title: "清泉~虹约资深专家",
      description:
        "松果第一个皇冠工作室咨询师，中国心理学会会员，中国心理领域17年度十强讲师，国家注册二级心理咨询师。不是每一个心理导师都可能真正帮到你，我值得你来。",
    },
    {
      imgSrc: Confess4JPG,
      title: "舒心-情感情绪专家",
      description:
        "国家注册三级心理咨询师，区婚姻家庭咨询协会理事，十年线上线下咨询经验。期盼着与你相识，分享你的故事、分担你的忧伤。",
    },
    {
      imgSrc: Confess5JPG,
      title: "随风行走-心灵导师",
      description:
        "国家二级心理咨询师，从业时间超过十年，能熟练应对抑郁情绪、社恐焦虑、自卑强迫等各类心理咨询倾诉，累计服务6000+小时。愿用我的真诚、耐心和专业为您的内心保驾护航。",
    },
    {
      imgSrc: Confess6JPG,
      title: "如是【名师】",
      description:
        "国家二级心理咨询师，实战派情感挽回专家，心理学专栏文章作者，如是心理工作室创建人，天津法制心理协会会员。风里雨里，我在这里赤诚等你。",
    },
  ];
  return (
    <>
      <CommonFactory width="1280px" height="1096px" bgc="#fafafa" data={data}>
        <ConfessWrapper>
          <div className="mood-imgs">
            {children.map((child) => {
              return (
                <div className="mood-imgs-item" key={child.title}>
                  <div className="content-box">
                    <div className="img-box">
                      <img src={child.imgSrc} alt="" />
                    </div>
                    <div className="text-box">
                      <p className="text-title">{child.title}</p>
                      <p className="text-desc">{child.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ConfessWrapper>
      </CommonFactory>
    </>
  );
}

export default Mood;
