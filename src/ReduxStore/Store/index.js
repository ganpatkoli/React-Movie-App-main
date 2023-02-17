import { configureStore } from "@reduxjs/toolkit";
import HomeScreenSlice from "../Slice/HomeScreenSlice";
const store = configureStore({
    reducer: {
        HomeReducer  : HomeScreenSlice.reducer,
    }
})

export default store

