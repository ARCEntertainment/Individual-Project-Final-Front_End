import React from 'react'
import Style from './social-style.module.css'
import Navigation from '../../User-Interface/Navigation/navigation'
import HelpDesk from '../../Composant-Social/Help-Desk/help-desk'
import Avis from '../../Composant-Social/Commentaire/avis'
import MusicBox from '../../Composant-Social/Music-Box-Link/music-box'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Social = () => {
    const conexion = useSelector(state =>  state.auth.isConnected)
    const navigate = useNavigate()
    console.log(conexion);

    useEffect(() => {

        if (!conexion)   {
            navigate('/conexion')
        }

    }, [conexion, navigate])


    const [isShownHelp, setIsShownHelp] = useState(false);
    const [isShownAvis, setIsShownAvis] = useState(false);
    const [isShownMusicBox, setIsShownMusicBox] = useState(false);

    
    const handleHelp = event => {
        
        setIsShownHelp(current => !current);
        
    }

    const handleAvis = event => {

        setIsShownAvis(current => !current)
    }

    const handleMusicBox = event => {

        setIsShownMusicBox(current => !current)
    }

    return (

        <div className={Style.page}>
            <Navigation />
            <h2>Social Side</h2>
            <div className={Style.navigate}>
                <button onClick={handleHelp} className={Style.link}>Help-Desk</button>
                <button onClick={handleAvis} className={Style.link}>Commentaire</button>
                <button onClick={handleMusicBox} className={Style.link}>Music-Box</button>
                <button  className={Style.link}>Soul-Side</button>
            </div>

            

            {isShownHelp && (
                <div className={Style.limit}>
                    <HelpDesk />
                
                </div>
            )}

            {isShownAvis && (
                <div className={Style.limit}>
                    <Avis />
                
                </div>
            )}

            {isShownMusicBox && (
                <div className={Style.limit}>
                    <MusicBox />
                
                </div>
            )}
            
            
            
        </div>
    )
}

export default Social