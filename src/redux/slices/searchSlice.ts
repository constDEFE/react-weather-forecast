import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { SingleValue } from "react-select";
import { Option } from "../../models/models";

interface SearchState {
  query: string;
  options: Option[];
  value: SingleValue<string> | null;
}

const initialState: SearchState = {
  query: "",
  options: [],
  value: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setOptions: (state, action: PayloadAction<Option[]>) => {
      state.options = action.payload;
    },
    setValue: (state, action: PayloadAction<SingleValue<string> | null>) => {
      state.value = action.payload;
    },
  },
});

export const { setQuery, setOptions, setValue } = searchSlice.actions;
export default searchSlice.reducer;
