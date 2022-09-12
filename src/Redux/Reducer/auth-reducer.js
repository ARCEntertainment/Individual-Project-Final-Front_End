//? ///////////////////////// REDUCER Authentification (REDUX) /////////////////////////




// todo IMPORTATION Utils
// todo __________________________________
import { createReducer } from "@reduxjs/toolkit";
import { login, logout, registerUser } from "../Action/auth-action";



//todo REDUCER Initial State Config (Object)
//todo ________________________________
const initialState = {

    //* Information Utile (Depart)
    // -----------------
    isConnected: false,
    token: null,
    msgError: ""
}



//todo STRUCTUR Reducer Creation
//todo ________________________________
// Operation:
// -----------------
// Fulfilled = Reussi
// Pending   = En Cours
// Reject    = Rejeter


const authReducer = createReducer(initialState, (builder) => {

    //* Structure Buider
    // -----------------
    builder

    //* Structure Add Posibilities (addCase)
    // -----------------
    .addCase(login.fulfilled, (state, action) => {

        state.isConnected= true;
        state.msgError="";
        state.token= action.payload; // payload = auth-action return response.data.token
    })


    //* ------------------------------------------------------
    .addCase(login.rejected, (state, action) => {

        state.isConnected= false;
        state.msgError= "Votre mots de passe ou votre email est Incorrect";
        state.token= null;
    })


    //* ------------------------------------------------------
    .addCase(registerUser.fulfilled, (state, action) => {

        state.isConnected= true;
        state.msgError= "";
        state.token= action.payload; // payload = auth-action return response.data.token
    })


    //* ------------------------------------------------------
    .addCase(registerUser.rejected, (state, action) => {

        state.isConnected= false;
        state.msgError= "Les informations que vous avez communiqué sont Incorrect";
        state.token= null;
    })


    //* ------------------------------------------------------
    .addCase(logout, (state, action) => {

        state.isConnected= false;
        state.msgError= "";
        state.token= null;
    })
})


//todo Exported Reducer
//todo ________________________________
export default authReducer