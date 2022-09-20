//? ///////////////////////// ACTION AudioPlayer (REDUX) /////////////////////////




// todo IMPORTATION Utils
// todo __________________________________
// Operation:
// -----------------
// createAction       = Action Simple        Synchrone
// createAsyncThunk   = Action (async/await) Asynchrone 

import { createAction} from "@reduxjs/toolkit";
// import axios from "axios";



// todo Route from A.P.I (back-end / DataBase)
// todo __________________________________




//todo STRUCTUR Action Audio-Player
//todo ________________________________

//* plays active track    
export const setTrack = createAction('setTrack', 
    
    (music) => ({
        payload: music,
})) 

//* pauses active track    
export const resetTrack = createAction('reset')