import AudioPlayer from 'react-h5-audio-player';
import song from '../../Audio/Ramiro Lopez - Larala (Original Mix).mp3'
import MusicBackground from '../../User-Interface/Music-Background/background';
import 'react-h5-audio-player/lib/styles.css';
import Style from './player.module.css'




const Player = () => {

    
    return (
        <>
            <MusicBackground />
            <div className={Style.playerBox}>

                <AudioPlayer 
                className={Style.player}
                src={song}
                />
        
            </div>
        </>
        
    )
}

export default Player