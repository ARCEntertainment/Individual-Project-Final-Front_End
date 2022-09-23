//? ///////////////////////// COMPOSANT Authentification (REACT) /////////////////////////




// todo IMPORTATION Utils
// todo __________________________________
import { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../Redux/Action/auth-action";
import { Link } from 'react-router-dom'


import Style from './form-register-style.module.css'



//todo STRUCTUR Composant Login/Register
//todo ________________________________

const FormLogin = () => {

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
            navigate('/social')
        }

    }, [isConnected, navigate])



    //* function OnSubmit (recolte donné)
    // -----------------
    const onSubmit = (data) => {
        console.log('login acant envoie : ', data);

        dispatch(login(data))
        console.log(data);
        reset()
    }




    //! STRUCTURE Form-Login
    //! -----------------
    return (

        <form onSubmit={handleSubmit(onSubmit)} className={Style.form}>
            

            {/* Implentation des Imput */}

            <div className={Style.input}>
                <label htmlFor="email" ></label>
                <input placeholder="E-mail" className={Style.input}
                
                id="email"
                type="mail"
                {...register('email', {required: true})}
                />

                {errors.mail && <p>Votre E-mail est Incorect veuillez recommancer</p>}
            </div>


{/* ------------------------------------------------------------------------- */}
            <div className={Style.input}>
                <label htmlFor="password" ></label>
                <input placeholder="Mots de Passe" className={Style.input}

                    id="password"
                    type="password"
                    {...register('password', {required: true})}
                    />
            </div>



            {/* Implentation Button Submit */}
            <button className={Style.submit} type="submit">
                Conexion{' '}
            </button>
            <Link  to={'/register'}>
                <h5 className={Style.links}>Creer un Compte</h5>
            </Link>

        </form>
    )
}




//todo EXPORT Form-Register
//todo ________________________________
export default FormLogin