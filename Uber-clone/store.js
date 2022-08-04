import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlices";

export const srore = configureStore({
    reducer: {
        nav: navReducer,
    },
});