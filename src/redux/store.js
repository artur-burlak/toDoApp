import { configureStore } from "@reduxjs/toolkit";
import checkerReducer from "./checkerSlice";

const store = configureStore({
  reducer: {
    checker: checkerReducer
}})

export default store