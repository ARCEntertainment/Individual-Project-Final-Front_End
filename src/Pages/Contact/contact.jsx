import React from "react";
// import FormContact from "../../Composant/Form-Contact/form-contact";
import Navigation from "../../User-Interface/Navigation/navigation";
import Style from './contact.module.css'



const Contact = () => {


    return (

        <div className={Style.page}>
            <h2>Contact</h2>
            {/* <FormContact/> */}
            <Navigation />
        </div>
    )
}

export default Contact