//? ///////////////////////// STORE Authentification (REDUX) /////////////////////////




// todo IMPORTATION Utils
// todo __________________________________
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducer/auth-reducer";
import playerReducer from './Reducer/player-reducer'




//todo STRUCTUR Store Login/Register
//todo ________________________________
const store = configureStore({

    //* Implentation Reducer 
    // -----------------
    reducer: 
        {
            auth: authReducer,
            track: playerReducer
        },


    //* Implentation devTools 
    // -----------------
    devTools: process.env.NODE_ENV !== "production"
})




//todo EXPORT Store 
//todo ________________________________
export default store