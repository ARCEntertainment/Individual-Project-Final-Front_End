//? ///////////////////////// ACTION Authentification (REDUX) /////////////////////////




// todo IMPORTATION Utils
// todo __________________________________
// Operation:
// -----------------
// createAction       = Action Simple        Synchrone
// createAsyncThunk   = Action (async/await) Asynchrone 

import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// todo Route from A.P.I (back-end / DataBase)
// todo __________________________________
// => LOGIN:    POST = "http://localhost:8580/api/auth/login/"
// => REGISTER: POST = "http://localhost:8580/api/auth/register/"


//todo STRUCTUR Action Login/Register
//todo ________________________________


//* Action Structure Login
// -----------------
export const login = createAsyncThunk("", 

    async (data) => {

        //* => Route LOGIN:    post
        // -----------------
        const response = axios.post('http://localhost:8580/api/auth/login/', data)

        return response.data.token
    }
)


//* Action Structure Register
// -----------------
export const registerUser = createAsyncThunk("", 

    async (data) => {

        //* => Route REGISTER: post
        // -----------------
        const response = axios.post('http://localhost:8580/api/auth/register/', data)

        return response.data.token
    }
)


export const logout = createAction()


//todo ______________________________________________________________________
