import { useDispatch } from 'react-redux'
import { setTrack } from '../../Redux/Action/player-action'
import Style from './card-of-music.module.css'


// Mini rendu 
// const ArtistItem = ({name}) => (
//     <p>artist :{name}</p>
// )

const CardOfMusic = ({name, info, genre, urlTrack, link, cover}) => {


    const dispatch = useDispatch()

    const onSelectCard = () => {

        dispatch(setTrack({name, info, genre, urlTrack, link, cover}))
    }


    return (


        // dans player reducer => insert full info artist et music (Finish)
        // dans "Player-Action" action setTrack => recevoir objet creer au préalable 
        //  ICI setTrack({name, link, urlTrack, ...})
        




            <div className={Style.limit}>
                
                <div className={Style.card}
                    onClick={ onSelectCard }
                >

                    
                    {/* <div className={Style.imgBox}></div> */}


                    <div className={Style.cover}>
                        <div className={Style.play}></div>
                        <img src={cover} alt="img" />
                    </div> 

                    {/* {link.map( artist => <p className={Style.artistTitle} key={artist.artistId._id}>{artist.artistId.name}</p>)} */}
                </div>

                
            </div>
                
    )
}


export default CardOfMusic