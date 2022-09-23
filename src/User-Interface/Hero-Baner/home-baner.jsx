
import Style from './home-baner.module.css'

const HeroBaner = () => {


    return (

        <div className={Style.boxBaner}>
            {/* <h1>Mental Side Recording</h1> */}
            <div className={Style.titlePosition}>
                <p className={Style.titreP1}>Mental <span className={Style.colorT1}>Side</span></p>
                <p className={Style.titreP2}><span>R</span><span>ec</span><span>o</span><span>r</span><span>d</span><span>i</span><span>ng</span></p>
                
                
                
                
            </div>
            
        </div>
    )
}

export default HeroBaner