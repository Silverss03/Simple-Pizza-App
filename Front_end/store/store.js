import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

export default store = configureStore({
    reducer : {
        auth : authReducer,
    },
});
