import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducer/auth-reducer";



const store = configureStore({

    //* Implentation Reducer 
    // -----------------
    reducer: {auth: authReducer},

    //* Implentation devTools 
    // -----------------
    devTools: process.env.NODE_ENV !== "production"
})



export default store