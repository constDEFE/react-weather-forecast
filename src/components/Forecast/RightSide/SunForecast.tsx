import { formatToLocalTime } from "../../../utils/functions";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Styles } from "../../../models/models";
import SunriseIMG from "../../../assets/sunrise.svg";
import SunsetIMG from "../../../assets/sunset.svg";
import React from "react";

const styles: Styles = {
  heading: "flex justify-between font-bold px-2 accent text-2xl text-start -mb-4",
  content: "h-[190px] w-full bg-zinc-900 container-inner rounded-b-3xl mt-4 grid grid-cols-3 px-4 py-3",
  col1: "flex flex-col justify-center items-start",
  col2: "flex justify-center items-center font-semibold tracking-wider",
  col3: "flex flex-col justify-center items-end",
  wrapper: "flex flex-col justify-center items-center",
  img: "pink-fill w-[100px] transition-scale-sm",
  sunTime: "capitalize font-medium text-xl transition-scale-sm cursor-default",
  time: "text-4xl transition-scale-sm hover:pb-1 hover:border-b-pink-700 hover:border-b-2 cursor-default",
};

const SunForecast = () => {
  const { current, timezone } = useSelector((state: RootState) => state.weather.data);

  return (
    <div>
      <div className={styles.heading}>
        <h3>Sunrise</h3>
        <h3>Sunset</h3>
      </div>
      <div className={styles.content}>
        <div className={styles.col1}>
          <div className={styles.wrapper}>
            <img
              className={styles.img}
              src={SunriseIMG}
              draggable="false"
              alt="/"
            />
            <h2 className={styles.sunTime}>
              {formatToLocalTime(current.sunrise, timezone)}
            </h2>
          </div>
        </div>
        <div className={styles.col2}>
          <h1 className={styles.time}>
            {formatToLocalTime(current.dt, timezone)}
          </h1>
        </div>
        <div className={styles.col3}>
          <div className={styles.wrapper}>
            <img
              className={styles.img}
              src={SunsetIMG}
              draggable="false"
              alt="/"
            />
            <h2 className={styles.sunTime}>
              {formatToLocalTime(current.sunset, timezone)}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunForecast;
