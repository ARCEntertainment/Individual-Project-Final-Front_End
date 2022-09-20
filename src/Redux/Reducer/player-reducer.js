//? ///////////////////////// REDUCER AudioPlayer (REDUX) /////////////////////////




// todo IMPORTATION Utils
// todo __________________________________
import { createReducer } from "@reduxjs/toolkit";
import { setTrack, resetTrack } from '../Action/player-action'




//todo REDUCER Initial State Config (Object)
//todo ________________________________
const initialState =  {

    //* Information Utile (Depart)
    // -----------------
    currentTracksrc : '',
    currentTrackId : '',

    currentTrackName : '',
    currentTrackInfo :'',
    currentTrackGenre: '',

    currentArtistName : '',
    currentArtistLand : '',
    currentArtistbio : ''

    // Info link
    // ------------------
    // currentArtist... = link.artistId.-> InfoShema <-

}


const playerReducer = createReducer(initialState, (builder) => {


    builder

        .addCase(setTrack ,(state, action) => {

            state.currentTracksrc= action.payload.urlTrack

            state.currentTrackName= action.payload.name
            state.currentTrackInfo= action.payload.info
            state.currentTrackGenre= action.payload.genre

            state.currentArtistName= action.payload.link.name
            state.currentArtistLand= action.payload.link.land
            state.currentArtistbio= action.payload.link.bio
        })

        .addCase(resetTrack, (state, action) => {

            state.currentTracksrc= ''

            state.currentTrackName= ''
            state.currentTrackInfo= ''
            state.currentTrackGenre= ''

            state.currentArtistName= ''
            state.currentArtistLand= ''
            state.currentArtistbio= ''
        })
})

export default playerReducer