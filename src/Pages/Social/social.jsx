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


    // ici j'initialise la fonctionalité State de React
    // ceci permet de modifier l'etat d'un composant 
    // (on ne peut pas modifier l'etat init d'un comopsant car React utilise le dom, il ne serais donc pas en mesure de recharger le composant)
    // (DOM document object model représentation html d'une page web pour acceder au element de cet page)

    // Pour ceci il est imperatif de creer 2 variable une contenant l'etat initial et l'autre la possible modification 
    // qui require la fonction useState ou en parametre je lui indique un etat faux 
    const [isShownHelp, setIsShownHelp] = useState(false);
    const [isShownAvis, setIsShownAvis] = useState(false);
    const [isShownMusicBox, setIsShownMusicBox] = useState(false);

    
    // a cet endroit je creer une function nomé selont le composant utilisé
    const handleHelp = event => {
        
        // je code ensuite les instruction
        // je recupère la variable utilisé pour modifier l'etat qui recupère la donné pour avtivé le coposant
        setIsShownHelp(current => !current);

        // et je lui demande a ce moment au click sur ce bouton que tu desactive tous les autre composant actif
        setIsShownAvis(false)
        setIsShownMusicBox(false)
        
    }

    const handleAvis = event => {

        setIsShownAvis(current => !current)
        setIsShownHelp(false)
        setIsShownMusicBox(false)
    }

    const handleMusicBox = event => {

        setIsShownMusicBox(current => !current)
        setIsShownHelp(false)
        setIsShownAvis(false)
    }

    return (

        <div className={Style.page}>
            <Navigation />
            <h2>Social Side</h2>
            <div className={Style.navigate}>

                {/* ici ce trouve l'ensemble de ces bouton  */}
                {/* dans ces bouton j'inclu une metode onClick qui detienne la fonctuon creer plus haut */}
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