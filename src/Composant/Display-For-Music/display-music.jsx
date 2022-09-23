
import axios from "axios";
import React from "react";
import Search from "../Search-Bar/search-bar";
import Style from './display.module.css'

import { useState } from "react";
import CardOfMusic from "../Card-of-Music/card-of-music";
import { useSelector } from "react-redux";
import { useEffect } from "react";






const Display = () => {

    const [musics, setmusics] = useState([])
    const [searchFind, setSearchFind] = useState('')

    const currentTrackName = useSelector((state) => {return state.track.currentTrackName})
    const currentTrackInfo = useSelector((state) => {return state.track.currentTrackInfo})
    const currentTrackGenre = useSelector((state) => {return state.track.currentTrackGenre})


    const currentLink = useSelector((state) => {return state.track.currentTrackLink})



    useEffect(() => {

        axios
            .get(`http://localhost:8580/api/music`)
    
            .then((res) => {
                setmusics(res.data.music)
                console.log('music', res.data);
            
            })
    
            .catch(err => console.log(err))

    }, [searchFind])

    const MusicList = (search) => {

        setSearchFind(search)

        

    }

    
    




    return (
        <div className={Style.limit}>

            <Search 
                className={Style.searchBar}
                placeholder='Chercher votre sons'
                onSearch={MusicList}
            
            />

            <div className={Style.info}>
                <p className={Style.title2}>Music Details</p>
                
                <p className={Style.subTitle}>Titre</p>
                <p className={Style.detail}>{currentTrackName}</p>

                <p className={Style.subTitle}>Info</p>
                <p className={Style.detail}>{currentTrackInfo}</p>

                <p className={Style.subTitle}>Genre</p>
                <p className={Style.detail}>{currentTrackGenre}</p>



                <p className={Style.subTitle}>Artist</p>
                {currentLink.map(link => 

                    <div>
                        <p className={Style.detail}>{link.artistId.name}</p>

                        <p className={Style.subTitle}>Origin</p>
                        <p className={Style.detail}>{link.artistId.land}</p>

                        <p className={Style.subTitle}>Biographie</p>
                        <p className={Style.detail}>{link.artistId.bio}</p> 
                    </div>
                    
                    )}
                

            </div>

            
            <div className={Style.container}>
                <p className={Style.title}>Music List</p>
                {(searchFind === '') ? 
                    musics.map( music => <CardOfMusic key={music._id} {...music} />) :

                    musics.filter(music => music.genre.toUpperCase() === searchFind.toUpperCase() || music.link.find(l => l.artistId.name.toUpperCase().includes(searchFind.toUpperCase())) || music.name.toUpperCase() === searchFind.toUpperCase() ).map( music => <CardOfMusic key={music._id} {...music} />)
                    
                    
                    }
                
            </div>

        </div>

    )
    }


export default Display