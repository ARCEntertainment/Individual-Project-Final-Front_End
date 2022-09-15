import Style from './realese-card.module.css'
import { useEffect, useState } from "react"
import axios from "axios"
import CardOfRealese from '../Card Of Realese/card-of-realese'


const Realese = ({music}) => {


    const [musics, setmusics] = useState([])

    const urlMusic = "http://localhost:8580/api/music"


    useEffect( () => {

        axios
        .get(urlMusic)

        .then((res) => {
            setmusics(res.data.music)
            console.log('music', res.data);
        
        })

        .catch(err => console.log(err))

    },[])



    return (
        <>
            <h3>Latest</h3>
            <h2>Realese</h2>

            <div className={Style.container}>
                {musics.map( music => <CardOfRealese key={music._id} {...music} />)}
                

            </div>
        </>
        
    )
}

export default Realese