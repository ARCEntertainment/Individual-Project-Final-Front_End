
import Style from './label-style.module.css'


const Labelcard = () => {


    const clubin = '../../../clubin-side.png'
    const raveroom = '../../../rave-room-side.png'
    const hardroom = '../../../hard-room-side.png'
    const deepside = '../../../deep-side.png'
    const darkside = '../../../dark-side.png'
    const spiritside = '../../../spirit-side.png'

    return (

        <>
            <div className={Style.limit}>
                <div className={Style.info}>
                    <p className={Style.infoTitle}>Clubin Side <span className={Style.origin}>Mainstage</span></p>
                    <p className={Style.subTitleInfo}>Voici les genre associer</p>

                    <ul className={Style.listOfGenre}>
                        <li className={Style.gender}>E.D.M</li>
                        <li className={Style.gender}>Electro</li>
                        <li className={Style.gender}>Bigroom</li>
                        <li className={Style.gender}>Hardhouse</li>
                        <li className={Style.gender}>Trap</li>
                    </ul>

                    <p className={Style.detailInfo}>Musique de night club, festival et n’importe quel style de fête</p>
                </div>


                <div className={Style.card}>
                    <img className={Style.img} src={clubin} alt="img" />
                    <p className={Style.cardTitle}>Clubin Side</p>
                    
                    <button className={Style.btn}>Artist</button>
                </div>

            </div>


            <div className={Style.limit}>
                <div className={Style.info}>
                        <p className={Style.infoTitle}>Rave Room Side <span className={Style.origin}>Devotion</span></p>
                        <p className={Style.subTitleInfo}>Voici les genre associer</p>

                        <ul className={Style.listOfGenre}>
                            <li className={Style.gender}>Minimal</li>
                            <li className={Style.gender}>Deep Trance</li>
                            <li className={Style.gender}>Neo Trance</li>
                            <li className={Style.gender}>PsyTrance</li>
                            <li className={Style.gender}>Experimental</li>
                        </ul>

                        <p className={Style.detailInfo}>Rave Music, inspirée et profonde, qui transporte et ouvre à de nouveau Horizon</p>
                    </div>


                <div className={Style.card}>
                    <img className={Style.img} src={raveroom} alt="img" />
                    <p className={Style.cardTitle}>Rave Room Side</p>
                    
                    <button className={Style.btn}>Artist</button>
                </div>

            </div>


            <div className={Style.limit}>
                <div className={Style.info}>
                        <p className={Style.infoTitle}>Hard Room Side <span className={Style.origin}>Blow of Speaker</span></p>
                        <p className={Style.subTitleInfo}>Voici les genre associer</p>

                        <ul className={Style.listOfGenre}>
                            <li className={Style.gender}>JumpStyle</li>
                            <li className={Style.gender}>HardStyle</li>
                            <li className={Style.gender}>HardDance</li>
                            <li className={Style.gender}>TekTrance</li>
                            <li className={Style.gender}>HardCore</li>
                        </ul>

                        <p className={Style.detailInfo}>Un son Purement de Bass, Sortie de la scène belgo-germanique</p>
                    </div>


                <div className={Style.card}>
                    <img className={Style.img} src={hardroom} alt="img" />
                    <p className={Style.cardTitle}>Hard Room Side</p>
                    
                    <button className={Style.btn}>Artist</button>
                </div>
            </div>


            <div className={Style.limit}>
                <div className={Style.info}>
                        <p className={Style.infoTitle}>Deep Side <span className={Style.origin}>Inside of The World</span></p>
                        <p className={Style.subTitleInfo}>Voici les genre associer</p>

                        <ul className={Style.listOfGenre}>
                            <li className={Style.gender}>Deep House</li>
                            <li className={Style.gender}>Futur Rave</li>
                            <li className={Style.gender}>Melodic Techno</li>
                            <li className={Style.gender}>Chill</li>
                        </ul>

                        <p className={Style.detailInfo}>Une journée à la plage ou tranquille à la maison, Deep Side comprend tous les types de musique profonde, de rêve et électro commerciale</p>
                    </div>


                <div className={Style.card}>
                    <img className={Style.img} src={deepside} alt="img" />
                    <p className={Style.cardTitle}>Deep Side</p>
                    
                    <button className={Style.btn}>Artist</button>
                </div>

            </div>


            <div className={Style.limit}>
                <div className={Style.info}>
                        <p className={Style.infoTitle}>Dark Side <span className={Style.origin}>Inside Experience</span></p>
                        <p className={Style.subTitleInfo}>Voici les genre associer</p>

                        <ul className={Style.listOfGenre}>
                            <li className={Style.gender}>Techno</li>
                            <li className={Style.gender}>Industrial Tech</li>
                            <li className={Style.gender}>Acid Tech</li>
                            <li className={Style.gender}>Tech House</li>
                            <li className={Style.gender}>Futur Club</li>
                        </ul>

                        <p className={Style.detailInfo}>Entré dans la scène Dark and Underground une expérience unique Inspirante et exceptionnelle</p>
                    </div>


                <div className={Style.card}>
                    <img className={Style.img} src={darkside} alt="img" />
                    <p className={Style.cardTitle}>Dark Side</p>
                    
                    <button className={Style.btn}>Artist</button>
                </div>

            </div>


            <div className={Style.limit}>
                <div className={Style.info}>
                        <p className={Style.infoTitle}>Spirit Side <span className={Style.origin}>Travel Inside</span></p>
                        <p className={Style.subTitleInfo}>Voici les genre associer</p>

                        <ul className={Style.listOfGenre}>
                            <li className={Style.gender}>Trance</li>
                            <li className={Style.gender}>Uplifting</li>
                            <li className={Style.gender}>Scoring</li>
                            <li className={Style.gender}>Synthwave</li>
                            <li className={Style.gender}>chill</li>
                        </ul>

                        <p className={Style.detailInfo}>La légende n’a plus besoin d’être nommée, si vous recherchez l'épique,l'émotionnelle ou le voyage cinématographique, vous êtes au bon endroit</p>
                    </div>


                <div className={Style.card}>
                    <img className={Style.img} src={spiritside} alt="img" />
                    <p className={Style.cardTitle}>Spirit Side</p>
                    
                    <button className={Style.btn}>Artist</button>
                </div>

            </div>

        </>
        
    )
}

export default Labelcard