//? ///////////////////////// COMPOSANT Formulaire de Contact Mail (REACT) /////////////////////////




// todo IMPORTATION Utils
// todo __________________________________
import React, {useState} from "react"
import Style from './form-contact-style.module.css'



//todo STRUCTUR Composant Form Contact
//todo ________________________________

const FormContact = () => {

    const [status, setStatus] = useState('submit')

    const handleSubmit = async (e) => {

        e.preventDefault();
        setStatus('Envoie...')
        


        const {name, email, msg} = e.target.element


        let info = {

            name: name.value,
            email: email.value,
            msg: msg.value
        }


        let response = await fetch('http://localhost:8580/', {
            method: 'POST', 
            headers: {'Contenue': 'application/json;charset=utf-8'}, body: JSON.stringify(info),
        })

        setStatus('submit')

        let result = await response.json()
        alert(result.status)
    }
    


    return (
        <div className={Style.container}>
            <div className={Style.border}>

                <form id="contact" onSubmit={handleSubmit} className={Style.form}>

                    <div className={Style.put}>
                        <label htmlFor="firstname"></label>
                        <input className={Style.input} type="text" id="fName" placeholder="Nom" required />
                    </div>


                    <div className={Style.put}>
                        <label htmlFor="lastname"></label>
                        <input className={Style.input} type="text" id="lName" placeholder="Prenom" required />
                    </div>


                    <div className={Style.put}>
                        <label htmlFor="email"></label>
                        <input className={Style.input} type="email" id="email" placeholder="Email" required />
                    </div>


                    <div className={Style.textput}>
                        <label htmlFor="message"></label>
                        <textarea className={Style.msg} id="msg" placeholder="Que puis-je faire pour vous" required />
                    </div>


                    <button type="submit" className={Style.submit}>{status}</button>

                </form>

            </div>

        </div>

    )
}

export default FormContact