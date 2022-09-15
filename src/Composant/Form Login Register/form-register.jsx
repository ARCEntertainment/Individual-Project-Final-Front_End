//? ///////////////////////// COMPOSANT Authentification (REACT) /////////////////////////




// todo IMPORTATION Utils
// todo __________________________________
import { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../Redux/Action/auth-action";

import Style from './form-register-style.module.css'




//todo STRUCTUR Composant Login/Register
//todo ________________________________

const FormRegister = () => {

    //* Hook Form Init 
    // -----------------
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,

    } = useForm()



    //* Redux / Router-dom Init 
    // -----------------
    const dispatch = useDispatch()
    const navigate = useNavigate()



    //* Structure isConnected 
    // -----------------

    //-- => REDUX (mise a l'état connecté)
    const isConnected = useSelector((state) => {
        return state.auth.isConnected
    })

    //-- => USE-EFFECT (return to home page)
    useEffect( () => {

        if (isConnected) {
            navigate('/home')
        }

    }, [isConnected, navigate])



    //* function OnSubmit (recolte donné)
    // -----------------
    const onSubmit = (data) => {

        dispatch(registerUser(data))
        console.log(data);
        reset()
    }




    //! STRUCTURE Form-Register
    //! -----------------
    return (

        <form onSubmit={handleSubmit(onSubmit)} className={Style.form}>


            {/* Implentation des Imput */}
            
            <div className={Style.input}>
                <label htmlFor="firstname" placeholder="Prenom"></label>
                <input
                    id="firstname"
                    type="text"
                    {...register('firstname', {required: false})}
                    />
            </div>


{/* ------------------------------------------------------------------------- */}
            <div className={Style.input}>
                <label htmlFor="lastname" placeholder="Nom"></label>
                <input
                    id="lastname"
                    type="text"
                    {...register('lastname', {required: false})}
                    />
            </div>


{/* ------------------------------------------------------------------------- */}
            <div className={Style.input}>
                <label htmlFor="pseudo" placeholder="Pseudo"></label>
                <input
                    id="pseudo"
                    type="text"
                    {...register('pseudo', {required: true})}
                    />
            </div>


{/* ------------------------------------------------------------------------- */}
            <div className={Style.input}>
                <label htmlFor="email" placeholder="E-mail"></label>
                <input
                id="email"
                type="mail"
                {...register('email', {required: true})}
                />

                {errors.mail && <p>Votre E-mail est Incorect veuillez recommancer</p>}
            </div>


{/* ------------------------------------------------------------------------- */}
            <div className={Style.input}>
                <label htmlFor="password" placeholder="Mots de Passe"></label>
                <input
                    id="password"
                    type="password"
                    {...register('password', {required: true})}
                    />
            </div>



            {/* Implentation Button Submit */}
            <button type="submit">
                Entrer dans la Famille{' '}
            </button>


            {/* Info a Respecter */}
            <p>Veillez a Respecter les champs obligatoir</p>

        </form>
    )
}




//todo EXPORT Form-Register
//todo ________________________________
export default FormRegister