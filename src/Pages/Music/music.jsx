import React from "react";
import Display from "../../Composant/Display-For-Music/display-music";
// import Player from "../../Composant/Music Playert/player";
import Navigation from '../../User-Interface/Navigation/navigation'
import MusicBackground from '../../User-Interface/Music-Background/background';

import Style from './music-style.module.css'


const Music = () => {


    return (

        <div>

            <Navigation />
            <Display />
            <MusicBackground />
            {/* <Player /> */}
        </div>
    )
}

export default Music