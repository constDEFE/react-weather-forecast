import HourlyForecast from "./HourlyForecast";
import SunForecast from "./SunForecast";
import { Styles } from "../../../models/models";
import React from "react";

const styles: Styles = {
  container: "h-full w-full p-4",
};

const RightSide = () => {
  return (
    <div className={styles.container}>
      <HourlyForecast />
      <SunForecast />
    </div>
  );
};

export default RightSide;
