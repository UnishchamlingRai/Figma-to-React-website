import React from "react";
import "./Hero.css";
import { people, star, arrow, wow } from "../../assets";
const Suggest = ({ num, title }) => {
  return (
    <>
      <div className="app_hero_right_suggest">
        <span className="circle">{num}</span>
        <p className="default_paragraph">{title}</p>
      </div>
    </>
  );
};

const Hero = () => {
  const data = [
    {
      id: 1,
      title: "Download the Extension for Chrome of Firefox.",
    },
    {
      id: 2,
      title: "Visit your favorite online retailers.",
    },
    {
      id: 3,
      title: "Save! Apply coupons from the toolbar. ",
    },
  ];

  return (
    <div className="app_hero universal_padding element_center">
      <div className="app_hero_left">
        <h1 className="default_heading">
          Shopping with Coupons. applied automatically!{" "}
        </h1>

        <div className="star">
          <img src={star} alt="" />
        </div>

        <div className="app_hero_left_people element_center">
          <div className="element_center">
            <p className="default_paragraph">Used by over 500,000</p>
            <img src={people} alt="" />
          </div>

          <img className="wow" src={wow} alt="wow" />
        </div>
      </div>

      <div className="line" />
      {/* Right */}
      <div className="app_hero_right">
       <div className="suggest">
       {data.map((data, index) => (
          <Suggest num={data.id} title={data.title} key={data.id} />
        ))}
       </div>

        <div className="btn defaultBtn">
          <h4>Install Extension</h4>
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
