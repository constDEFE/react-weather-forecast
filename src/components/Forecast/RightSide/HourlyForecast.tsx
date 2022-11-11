import { formatToLocalTime } from "../../../utils/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Styles } from "../../../models/models";
import React from "react";

const styles: Styles = {
  container: "grid grid-cols-2",
  col1: "flex flex-col items-start",
  col2: "flex flex-col items-end",
  hour: "flex flex-col justify-between items-center container-inner w-[180px] h-[140px] p-2 mt-4 mb-6 bg-zinc-900",
  imgContainer: "w-[50px]",
  img: "scale-[130%] hover:scale-[150%] duration-200 ease-out",
  textContainer: "flex flex-col items-center",
  description: "transition-scale-sm cursor-default",
  temp: "transition-scale-medium font-medium cursor-default",
  sign: "accent font-semibold",
  time: "font-medium tracking-wider transition-scale-sm cursor-default",
};

const HourlyForecast = () => {
  const { hourly, timezone } = useSelector((state: RootState) => state.weather.data);

  return (
    <div className={styles.container}>
      <div className={styles.col1}>
        {hourly.map((hour, index) => {
          if (index < 3) {
            return (
              <div key={index} className={styles.hour}>
                <div className={styles.imgContainer}>
                  <img
                    className={styles.img}
                    src={`${process.env.REACT_APP_ICON_URL}${hour.weather[0].icon}@2x.png`}
                    alt="/"
                  />
                </div>
                <div className={styles.textContainer}>
                  <p className={styles.description}>
                    {hour.weather[0].description}
                  </p>
                  <p className={styles.temp}>
                    {hour.temp.toFixed()}{" "}
                    <span className={styles.sign}>&deg;C</span>
                  </p>
                  <p className={styles.time}>
                    {formatToLocalTime(hour.dt, timezone)}
                  </p>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className={styles.col2}>
        {hourly.map((hour, index) => {
          if (index > 2 && index < 6) {
            return (
              <div key={index} className={styles.hour}>
                <div className={styles.imgContainer}>
                  <img
                    className={styles.img}
                    src={`${process.env.REACT_APP_ICON_URL}${hour.weather[0].icon}@2x.png`}
                    alt="/"
                  />
                </div>
                <div className={styles.textContainer}>
                  <p className={styles.description}>
                    {hour.weather[0].description}
                  </p>
                  <p className={styles.temp}>
                    {hour.temp.toFixed()}{" "}
                    <span className={styles.sign}>&deg;C</span>
                  </p>
                  <p className={styles.time}>
                    {formatToLocalTime(hour.dt, timezone)}
                  </p>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default HourlyForecast;
