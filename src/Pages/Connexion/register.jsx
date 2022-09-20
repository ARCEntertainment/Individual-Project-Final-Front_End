import React from "react";
import FormRegister from '../../Composant/Form Login Register/form-register'
import Style from './register-style.module.css'
import Navigation from '../../User-Interface/Navigation/navigation'

const Register = () => {


    return (
        
        <div className={Style.page}>
            <Navigation />
            <p className={Style.title}>Inscription</p>
            <div className={Style.container}>
                
                <FormRegister />
            </div>
        </div>
        
    )
}

export default Register