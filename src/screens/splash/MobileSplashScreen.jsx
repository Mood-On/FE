import React from "react";
import "../../styles/splash.css";
// import logo from "./public/logo512.png";

const MobileSplashScreen = () => {
  return (
    <div className="screen">
      <div className="logoArea">
        <img
          className="logo"
          src={process.env.PUBLIC_URL + "/logo512.png"}
          alt="logo"
        />
        <div className="titles">
          <p className="title">Mood-On</p>
          <p className="subTitle">자립준비청년을 위한 AI 심리케어 서비스</p>
        </div>
      </div>
    </div>
  );
};

export default MobileSplashScreen;
