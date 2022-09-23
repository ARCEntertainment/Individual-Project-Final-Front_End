import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import Style from './navigation.module.css'
import { logout } from '../../Redux/Action/auth-action'


const Navigation = () => {

    const conexion = useSelector(state => state.auth.isConnected)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onLogout = () => {

        dispatch(logout())
        navigate('/home')
        
    }


    return (
        <>
        
            <div className={Style.container}>

                <ul className={Style.nav}>

                    {conexion && <button onClick={onLogout} className={Style.logout}>Logout</button>}

                    <NavLink to={"/home"}> 
                        <li className={Style.link}>Home</li>
                    </NavLink>

                    <NavLink to={"/label"}> 
                        <li className={Style.link}>label</li>
                    </NavLink>

                    <NavLink to={"/music"}> 
                        <li className={Style.link}>music</li>
                    </NavLink>

                    <NavLink to={"/social"}> 
                        <li className={Style.link}>social</li>
                    </NavLink>

                    <NavLink to={"/contact"}> 
                        <li className={Style.link}>Contact</li>
                    </NavLink>
                    {!conexion && 
                    <NavLink to={"/conexion"}> 
                        <li className={Style.link}>Conexion</li>
                    </NavLink>}


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