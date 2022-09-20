import React from 'react'
import { NavLink } from 'react-router-dom'
import Style from './navigation.module.css'


const Navigation = () => {



    return (
        <>
        
            <div className={Style.container}>

                <ul className={Style.nav}>

                    <NavLink to={"/home"}> 
                        <li>Home</li>
                    </NavLink>

                    <NavLink to={"/label"}> 
                        <li>label</li>
                    </NavLink>

                    <NavLink to={"/music"}> 
                        <li>music</li>
                    </NavLink>

                    <NavLink to={"/social"}> 
                        <li>social</li>
                    </NavLink>

                    <NavLink to={"/contact"}> 
                        <li>Contact</li>
                    </NavLink>

                    <NavLink to={"/conexion"}> 
                        <li>Conexion</li>
                    </NavLink>

                </ul>


                <div className={Style.arrow}>
                    <div className={Style.handle}></div>
                </div>


                <div className={Style.bordure}></div>

            </div>
        
        </>

    )
}

export default Navigation