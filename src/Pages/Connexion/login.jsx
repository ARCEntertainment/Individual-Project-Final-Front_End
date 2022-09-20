import React from "react";

import Style from './register-style.module.css'
import Navigation from '../../User-Interface/Navigation/navigation'
import FormLogin from "../../Composant/Form Login Register/form-login";

const Login = () => {


    return (
        
        <div className={Style.page}>
            <Navigation />
            <p className={Style.title}>Login</p>
            <div className={Style.container}>
            
                <FormLogin />
                
            
            </div>
        </div>
        
    )
}

export default Login