import { formatToLocalTime } from "../../../utils/functions";
import {
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
  AccordionItem,
  Accordion,
} from "react-accessible-accordion";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Styles } from "../../../models/models";
import React from "react";

const styles: Styles = {
  container: "mt-4 flex flex-col",
  heading: "font-bold pl-2 accent text-2xl text-start mb-1",
  accordion: "flex flex-col gap-4",
  item: "bg-zinc-900 accordion-item",
  row: "grid grid-cols-4 py-[1.15rem] px-4 items-center",
  img: "w-[30px] scale-[175%] hover:scale-[200%] duration-200",
  label: "cursor-pointer text-center transition-scale-medium",
  temps: "cursor-pointer text-center font-medium group transition-scale-medium",
  tempDivider: "mx-2 text-xl font-extralight",
  temp: "text-lg accent font-semibold",
  panel: "h-[90px] grid grid-cols-2 gap-4 bg-[#1f1f1f] rounded-b-lg shadow-lg shadow-[#1a1a22] px-2",
  col: "grid grid-cols-2",
  divider: "border-slate-600",
  innerCol1: "flex flex-col justify-center text-left gap-1",
  advanced: "transition-scale-sm",
  value: "transition-scale-sm font-medium",
  pink: "accent",
  innerCol2: "flex flex-col justify-between text-right gap-1",
};

const DailyForecast = () => {
  const { daily, timezone } = useSelector((state: RootState) => state.weather.data);

  return (
    <div className={styles.container}>
      <label className={styles.heading}>Daily</label>
      <Accordion className={styles.accordion} preExpanded={[0]}>
        {daily.map((day, index) => {
          if (index < 5) {
            return (
              <AccordionItem uuid={index} className={styles.item} key={index}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className={styles.row}>
                      <img
                        className={styles.img}
                        src={`${process.env.REACT_APP_ICON_URL}${day.weather[0].icon}@2x.png`}
                        alt="/"
                      />
                      <label className={styles.label}>
                        {day.weather[0].main}
                      </label>
                      <label className={styles.label}>
                        {day.weather[0].description}
                      </label>
                      <label className={styles.temps}>
                        {day.temp.min.toFixed()}
                        <span className={styles.temp}>&deg;C</span>
                        <span className={styles.tempDivider}>|</span>
                        {day.temp.max.toFixed()}
                        <span className={styles.temp}>&deg;C</span>
                      </label>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className={styles.panel}>
                    <div className={styles.col}>
                      <div className={styles.innerCol1}>
                        <label className={styles.advanced}>Pressure</label>
                        <hr className={styles.divider} />
                        <label className={styles.advanced}>Wind speed</label>
                        <hr className={styles.divider} />
                        <label className={styles.advanced}>Sunrise</label>
                      </div>
                      <div className={styles.innerCol2}>
                        <label className={styles.value}>
                          {day.pressure / 1000}{" "}
                          <span className={styles.pink}>hPa</span>
                        </label>
                        <label className={styles.value}>
                          {day.wind_speed.toFixed(1)}{" "}
                          <span className={styles.pink}>m/s</span>
                        </label>
                        <label className={styles.value}>
                          {formatToLocalTime(day.sunrise, timezone)}
                        </label>
                      </div>
                    </div>
                    <div className={styles.col}>
                      <div className={styles.innerCol1}>
                        <label className={styles.advanced}>Humidity</label>
                        <hr className={styles.divider} />
                        <label className={styles.advanced}>Clouds</label>
                        <hr className={styles.divider} />
                        <label className={styles.advanced}>Sunset</label>
                      </div>
                      <div className={styles.innerCol2}>
                        <label className={styles.value}>
                          {day.humidity} <span className={styles.pink}>%</span>
                        </label>
                        <label className={styles.value}>
                          {day.clouds} <span className={styles.pink}>%</span>
                        </label>
                        <label className={styles.value}>
                          {formatToLocalTime(day.sunset, timezone)}
                        </label>
                      </div>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            );
          } else {
            return null;
          }
        })}
      </Accordion>
    </div>
  );
};

export default DailyForecast;
