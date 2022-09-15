import Style from './news-card.module.css'

const News = (props) => {


    return (
        <>
            {/* Limit Sur Page */}
            <div className={Style.container}>
                

                {/* Contenaire des Element */}
                <div className={Style.card}>
                    <h2>News / Event</h2>


                    {/* Element News*/}
                    <div className={Style.news}>

                    </div>

                {/* ------------------------------ */}
                
                    {/* Element Event*/}
                    <div className={Style.event}>

                    </div>
                
                </div>

            </div>
        </>
        
    )
}

export default News