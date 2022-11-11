import { City } from "../models/models";

const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities/";
const GeoAPIOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_GEO_DB_KEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const getCities = async (searchQuery: string): Promise<City[]> => {
  try {
    const url = `${GEO_API_URL}?sort=-population&minPopulation=50000&namePrefix=${searchQuery}`;

    const response = await fetch(url, GeoAPIOptions as RequestInit);
    const { data: cities } = await response.json();

    return cities;
  } catch (error) {
    throw error;
  }
};
