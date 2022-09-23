import AudioPlayer from 'react-h5-audio-player';
// import song from '../../Audio/Ramiro Lopez - Larala (Original Mix).mp3'

import Style from './player.module.css'
import '../../../node_modules/react-h5-audio-player/src/styles.scss';
import { useSelector } from 'react-redux';




const Player = () => {

    const currentSong = useSelector(state => state.track.currentTracksrc)
    const trackNow = useSelector(state => state.track.currentTrackName)

    
    return (
        <>
            <div className={Style.playerBox}>

                <AudioPlayer 
                className={Style.player}
                src={currentSong}
                showSkipControls={true} 
                showJumpControls={false}
                header={trackNow}
                />
        
            </div>
        </>
        
    )
}

export default Player