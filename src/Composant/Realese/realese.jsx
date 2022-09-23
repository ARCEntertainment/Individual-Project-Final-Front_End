import Style from './realese-card.module.css'
import { useEffect, useState } from "react"
import axios from "axios"
import CardOfRealese from '../Card Of Realese/card-of-realese'


const Realese = ({music}) => {


    const [musics, setmusics] = useState([])
    const [offset, setOffset] = useState(0)
    const [ count, setCount ] = useState(0)

    const urlMusic = "http://localhost:8580/api/music"


    useEffect( () => {

        axios
        .get( `${urlMusic}?offset=${offset}&limit=4` )

        .then((res) => {
            setmusics(res.data.music)
            setCount(res.data.count)
            console.log('music', res.data);
        
        })

        .catch(err => console.log(err))

    },[offset])

    const onPrevious = () => {

        if (offset > 0) {
            setOffset(offset => offset - 4) 
        }
    }
    
    const onNext = () => {
        console.log(count);

        if (offset + 4 < count ) { 

            setOffset(offset => offset + 4)
        }
    }
    // Math.floor(musics.length - 4)

    return (
        <>
            <h3>Latest</h3>
            <h2>Realese</h2>


            <div className={Style.boxBtn}>

                <button className={Style.btn} onClick={onPrevious}>Prev</button>
                <button className={Style.btn} onClick={onNext}>Next</button>

            </div>
            <div className={Style.container}>
                {musics.map( music => <CardOfRealese key={music._id} {...music} />)}
                

            </div>
        </>
        
    )
}

export default Realese