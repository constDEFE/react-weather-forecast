import { Styles } from "../../models/models";
import RightSide from "./RightSide/RightSide";
import LeftSide from "./LeftSide/LeftSide";
import React from "react";

const styles: Styles = {
  forecast: "container max-w-[1280px] min-h-[768px] mx-auto container-outer bg-[#d2d3ec] grid grid-cols-2",
};

const Forecast = () => {
  return (
    <div className={styles.forecast}>
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Forecast;
