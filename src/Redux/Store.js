//? ///////////////////////// STORE Authentification (REDUX) /////////////////////////




// todo IMPORTATION Utils
// todo __________________________________
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducer/auth-reducer";




//todo STRUCTUR Store Login/Register
//todo ________________________________
const store = configureStore({

    //* Implentation Reducer 
    // -----------------
    reducer: {auth: authReducer},

    //* Implentation devTools 
    // -----------------
    devTools: process.env.NODE_ENV !== "production"
})




//todo EXPORT Store 
//todo ________________________________
export default store