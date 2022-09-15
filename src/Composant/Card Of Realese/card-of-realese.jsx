import Style from '../Realese/realese-card.module.css'

// Mini rendu 
// const ArtistItem = ({name}) => (
//     <p>artist :{name}</p>
// )

const CardOfRealese = ({name, link}) => {


    


    return (




            <div>
                
                <div className={Style.card}>
                    <div className={Style.imgBox}></div>


                    <p className={Style.trackTitle}>{name}</p>

                    {link.map( artist => <p className={Style.artistTitle} key={artist.artistId._id}>{artist.artistId.name}</p>)}
                </div>

                
            </div>
                
    )
}


export default CardOfRealese