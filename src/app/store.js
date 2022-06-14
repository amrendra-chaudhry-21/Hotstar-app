import { configureStore } from "@reduxjs/toolkit";
import optionReducer from "../features/optionSlice";

export const store = configureStore({
  reducer: {
    option: optionReducer,
  },
});
