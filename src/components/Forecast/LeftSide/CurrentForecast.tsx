import { formatToLocalTime } from "../../../utils/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Styles } from "../../../models/models";
import React from "react";

const styles: Styles = {
  container: "h-[200px] w-full bg-zinc-900 rounded-t-3xl mt-4 flex flex-col justify-between px-4 py-3 container-inner",
  row: "flex justify-between",
  city: "font-medium text-xl transition-scale-sm cursor-default",
  description: "capitalize transition-scale-sm cursor-default",
  img: "scale-110 transition-scale-lg",
  left: "-mt-4",
  temp: "font-semibold text-5xl transition-scale-sm cursor-default",
  sign: "accent font-bold tracking-wider",
  time: "font-semibold text-4xl transition-scale-sm cursor-default",
  right: "flex",
  col1: "flex flex-col justify-between",
  advanced: "text-sm transition-scale-sm cursor-default",
  value: "text-sm font-semibold text-right transition-scale-medium cursor-default",
  divider: "border-slate-600",
  col2: "ml-4 flex flex-col justify-between",
  accent: "accent cursor-default",
};

const CurrentForecast = () => {
  const { current, timezone } = useSelector((state: RootState) => state.weather.data);
  const city = useSelector((state: RootState) => state.weather.city);

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div>
          <h3 className={styles.city}>{city}</h3>
          <p className={styles.description}>{current.weather[0].description}</p>
        </div>
        <img
          className={styles.img}
          src={`${process.env.REACT_APP_ICON_URL}${current.weather[0].icon}@2x.png`}
          alt="/"
        />
      </div>
      <div className={styles.row}>
        <div className={styles.left}>
          <h3 className={styles.temp}>
            {current.temp.toFixed()}
            <span className={styles.sign}>&deg;C</span>
          </h3>
          <h3 className={styles.time}>
            {formatToLocalTime(current.dt, timezone)}
          </h3>
        </div>
        <div className={styles.right}>
          <div className={styles.col1}>
            <p className={styles.advanced}>Feels Like</p>
            <hr className={styles.divider} />
            <p className={styles.advanced}>Wind speed</p>
            <hr className={styles.divider} />
            <p className={styles.advanced}>Humidity</p>
          </div>
          <div className={styles.col2}>
            <span className={styles.value}>
              {current.feels_like.toFixed()}{" "}
              <span className={styles.accent}>&deg;C</span>
            </span>
            <span className={styles.value}>
              {current.wind_speed.toFixed(1)}{" "}
              <span className={styles.accent}>m/s</span>
            </span>
            <span className={styles.value}>
              {current.humidity} <span className={styles.accent}>%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentForecast;
