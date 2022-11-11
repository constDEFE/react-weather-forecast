import { Coord } from "../models/models";

const API_KEY = `${process.env.REACT_APP_GEOCODING_API_KEY}`;
const BASE_URL = `http://api.openweathermap.org/geo/1.0/reverse`;

export const getCity = async (location: Coord): Promise<string> => {
  try {
    const url = `${BASE_URL}?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}`;

    const response = await fetch(url);
    const [ data ] = await response.json();
    const { name, country } = data;

    return `${name}, ${country}`;
  } catch (error) {
    throw error;
  }
};
