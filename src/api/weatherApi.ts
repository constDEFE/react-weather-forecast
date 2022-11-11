import { WeatherData } from "../models/models";
import { Coord } from "../models/models";

const BASE_URL = "http://api.openweathermap.org/data/2.5/onecall";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const getWeatherData = async (location: Coord): Promise<WeatherData> => {
  try {
    const url = `${BASE_URL}?units=metric&lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}`;

    const response = await fetch(url);

    return await response.json();
  } catch (error) {
    throw error;
  }
};
