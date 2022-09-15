import React from "react";
import FormRegister from '../../Composant/Form Login Register/form-register'
import Style from './register-style.module.css'

const Register = () => {


    return (
        
        <>
            <p>Inscription</p>
            <div className={Style.container}>
                
                <FormRegister />
            </div>
        </>
        
    )
}

export default Register