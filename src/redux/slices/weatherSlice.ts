import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { WeatherData } from "../../models/models";

interface WeatherState {
  data: WeatherData;
  city: string;
}

const initialState: WeatherState = {
  data: {} as WeatherData,
  city: "",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather: (state, action: PayloadAction<WeatherData>) => {
      state.data = action.payload;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
});

export const { setWeather, setCity } = weatherSlice.actions;
export default weatherSlice.reducer;
