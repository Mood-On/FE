import React from "react";
import { Mobile, Pc } from "../../components/ResponsiveComponent";
import MobileSplashScreen from "./MobileSplashScreen";
import PcSplashScreen from "./PcSplashScreen";

const SplashScreen = () => {
  return (
    <>
      <Mobile>
        <MobileSplashScreen />
      </Mobile>
      <Pc>
        <PcSplashScreen />
      </Pc>
    </>
  );
};

export default SplashScreen;
