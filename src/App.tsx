import { useDispatch, useSelector } from "react-redux";
import { setCity, setWeather } from "./redux/slices/weatherSlice";
import React, { useEffect } from "react";
import { getWeatherData } from "./api/weatherApi";
import { RootState } from "./redux/store";
import { Coord } from "./models/models";
import Forecast from "./components/Forecast/Forecast";
import Search from "./components/Search";

const App = () => {
  const searchValue = useSelector((state: RootState) => state.search.value);
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const dispatch = useDispatch();

  useEffect(() => {
    interface Fetchable {
      value: Coord;
      label: string;
    }

    const fetchWeatherData = async ({ value, label }: Fetchable): Promise<void> => {
      const weatherData = await getWeatherData(value);

      dispatch(setCity(label));
      dispatch(setWeather(weatherData));
    };

    if (searchValue) {
      try {
        fetchWeatherData(searchValue as unknown as Fetchable);
      } catch (error) {
        console.error(error);
      }
    }
  }, [searchValue]);

  return (
    <>
      <Search />
      {weatherData.timezone && <Forecast />}
    </>
  );
};

export default App;
