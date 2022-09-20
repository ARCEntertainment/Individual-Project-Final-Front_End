import AudioPlayer from 'react-h5-audio-player';
// import song from '../../Audio/Ramiro Lopez - Larala (Original Mix).mp3'

import 'react-h5-audio-player/lib/styles.css';
import Style from './player.module.css'
import { useSelector } from 'react-redux';




const Player = () => {

    const currentSong = useSelector(state => state.track.currentTracksrc)

    
    return (
        <>
            <div className={Style.playerBox}>

                <AudioPlayer 
                className={Style.player}
                src={currentSong}
                />
        
            </div>
        </>
        
    )
}

export default Player