import { configureStore } from "@reduxjs/toolkit";
import fetchSlice from "./fetchSlice";
import cartSlice from "./cartSlice";

const appStore = configureStore({
    reducer : {
        fetch : fetchSlice,
        cart : cartSlice
    }
});

export default appStore;

