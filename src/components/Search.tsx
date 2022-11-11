import { setOptions, setQuery, setValue } from "../redux/slices/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCity, setWeather } from "../redux/slices/weatherSlice";
import { HiLocationMarker } from "react-icons/hi";
import { getWeatherData } from "../api/weatherApi";
import { Option, Styles } from "../models/models";
import { AsyncPaginate } from "react-select-async-paginate";
import { SingleValue } from "react-select/dist/declarations/src/types";
import { RootState } from "../redux/store";
import { getCities } from "../api/geoDB";
import { getCity } from "../api/geocodingApi";
import React from "react";

const styles: Styles = {
  container: "container mx-auto w-full flex items-center justify-center gap-2",
  button: "transition-scale-medium cursor-pointer",
  select: "w-2/4 my-8 text-black",
};

const Search = () => {
  const searchQuery = useSelector((state: RootState) => state.search.query);
  const dispatch = useDispatch();

  const loadForecastByLocation = async ({ coords }: GeolocationPosition) => {
    try {
      const location = {
        lat: coords.latitude,
        lon: coords.longitude,
      };
  
      const data = await getWeatherData(location);
      const city = await getCity(location);
  
      dispatch(setCity(city));
      dispatch(setWeather(data));
    } catch (error) {
      console.error(error);
    }
  };

  const loadOptions = async (value: string): Promise<any> => {
    try {
      dispatch(setQuery(value));

      const cities = await getCities(value as string);
      const options: Option[] = cities.map((city) => ({
        value: {
          lat: city.latitude,
          lon: city.longitude,
        },
        label: `${city.name}, ${city.countryCode}`,
      }));

      dispatch(setOptions(options));

      return { options };
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchChange = (value: SingleValue<string>): void => {
    dispatch(setValue(value));
  };

  const handleLocationClick = (): void => {
    navigator.geolocation.getCurrentPosition(loadForecastByLocation);
  };

  return (
    <div className={styles.container}>
      <AsyncPaginate
        loadOptions={loadOptions}
        value={searchQuery}
        debounceTimeout={600}
        onChange={handleSearchChange}
        className={styles.select}
        placeholder={"Search for a city..."}
      />

      <div className={styles.button} onClick={handleLocationClick}>
        <HiLocationMarker size={30} />
      </div>
    </div>
  );
};

export default Search;
