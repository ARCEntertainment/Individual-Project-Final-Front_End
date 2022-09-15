import React from "react";
import News from "../../Composant/News/news";
import Realese from "../../Composant/Realese/realese";
import HeroBaner from "../../User-Interface/Hero-Baner/home-baner";
import Navigation from "../../User-Interface/Navigation/navigation";



const Home = () => {


    return (

        <div>
            <Navigation />
            <HeroBaner />
            <Realese />
            <News />
        </div>
    )
}

export default Home