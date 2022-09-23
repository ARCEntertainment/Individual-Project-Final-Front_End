import React from "react";
import Navigation from "../../User-Interface/Navigation/navigation";
import Labelcard from "../../Composant/Label/labelcard"
import Style from "./labelpage-style.module.css"



const Label = () => {


    return (

        <div className={Style.page}>
            <Navigation />
            <h2>Sub-Label</h2>
            <Labelcard />
        </div>
    )
}

export default Label