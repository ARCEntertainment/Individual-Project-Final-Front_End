
import axios from "axios";
import React from "react";
import Search from "../Search-Bar/search-bar";
import Style from './display.module.css'

import { useState } from "react";
import CardOfMusic from "../Card-of-Music/card-of-music";
import { useSelector } from "react-redux";






const Display = () => {

    const [musics, setmusics] = useState([])
    const [search, setSearch] = useState('')

    const currentTrackName = useSelector((state) => {return state.track.currentTrackName})
    const currentTrackInfo = useSelector((state) => {return state.track.currentTrackInfo})
    const currentTrackGenre = useSelector((state) => {return state.track.currentTrackGenre})


    const currentArtistName = useSelector((state) => {return state.track.currentArtistName})
    const currentArtistLand = useSelector((state) => {return state.track.currentArtistLand})
    const currentArtistbio = useSelector((state) => {return state.track.currentArtistbio})




    const MusicList = (search) => {

        setSearch(search)

            axios
            .get(`http://localhost:8580/api/music`)
    
            .then((res) => {
                setmusics(res.data.music)
                console.log('music', res.data);
            
            })
    
            .catch(err => console.log(err))
    
        }

    
    




    return (
        <div className={Style.limit}>

            <Search 
                className={Style.searchBar}
                placeholder='Chercher votre sons'
                onSearch={MusicList}
            
            />

            <div className={Style.info}>
                <p>Music Details</p>
                
                <p>Titre</p>
                <p>{currentTrackName}</p>

                <p>Info</p>
                <p>{currentTrackInfo}</p>

                <p>Genre</p>
                <p>{currentTrackGenre}</p>



                <p>Artist</p>
                <p>{currentArtistName}</p>

                <p>Origin</p>
                <p>{currentArtistLand}</p>

                <p>Biographie</p>
                <p>{currentArtistbio}</p>               
                

            </div>

            
            <div className={Style.container}>
                <p className={Style.title}>Music List</p>
                {(search === '') ? 
                    musics.map( music => <CardOfMusic key={music._id} {...music} />) :

                    musics.filter(music => music.genre.toUpperCase() === search.toUpperCase() || music.link.find(l => l.artistId.name.toUpperCase().includes(search.toUpperCase())) || music.name.toUpperCase() === search.toUpperCase() ).map( music => <CardOfMusic key={music._id} {...music} />)
                    
                    
                    }
                
            </div>

        </div>

    )
    }


export default Display