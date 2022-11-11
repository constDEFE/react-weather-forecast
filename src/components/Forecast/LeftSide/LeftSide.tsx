import CurrentForecast from "./CurrentForecast";
import DailyForecast from "./DailyForecast";
import { Styles } from "../../../models/models";
import React from "react";

const styles: Styles = {
  container: "bg-[#e9e9e9] border-2 border-[#e9e9e9] container-outer px-4 pt-4 pb-1",
};

const LeftSide = () => {
  return (
    <div className={styles.container}>
      <div>
        <CurrentForecast />
      </div>
      <div>
        <DailyForecast />
      </div>
    </div>
  );
};

export default LeftSide;
