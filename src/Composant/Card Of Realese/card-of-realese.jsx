import { useNavigate } from 'react-router-dom'
import Style from '../Realese/realese-card.module.css'

// Mini rendu 
// const ArtistItem = ({name}) => (
//     <p>artist :{name}</p>
// )

const CardOfRealese = ({name, link, cover}) => {

    const navigate = useNavigate()


    const onLink = () => {
        navigate('/music')
    }


    return (




            <div>
                
                <div onClick={onLink} className={Style.card}>
                    <div className={Style.imgBox}><img src={cover} alt="img" /></div> 


                    <p className={Style.trackTitle}>{name}</p>

                    {link.map( artist => <p className={Style.artistTitle} key={artist.artistId._id}>{artist.artistId.name}</p>)}
                    <div className={Style.link}></div>
                </div>

                
            </div>
                
    )
}


export default CardOfRealese