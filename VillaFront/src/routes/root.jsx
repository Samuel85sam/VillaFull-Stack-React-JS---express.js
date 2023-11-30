import { React,useEffect, useState } from "react";
import { NavLink, Outlet, Navigate } from "react-router-dom"
import { useAuthStore } from "../store/authStore";

const Root =  () => {
    // const navigate = Navigate;
    const [isLoggedIn, setisLoggedIn] = useState(null);
    // const user = await useAuthStore((state) => state.userData)
    // const logIn = async () => {
       
    //         console.log(`token checked for indexUser===>${token}`);
    //         token == !null ? setisLoggedIn(true) : null
            
    
    // };
//! pourquoi ça bug? ↓↓↓
    // useEffect(() => {
    //     isLoggedIn === false ? null : navigate("/indexUser")
    //     window.location.reload();
    // }, [isLoggedIn])
    const logIn = () => {
        setisLoggedIn(true);
    };
    const logOut = () => {
        setisLoggedIn(false);
    };


    return (
        <>
            <div id="sidebar">
                <nav>
                    {isLoggedIn ? (
                        <button onClick={logOut}>Logout</button>
                    ) : (
                        <button onClick={logIn}>Login</button>
                    )}
                    {isLoggedIn ? <NavLink to="indexUser">User Index</NavLink> : <NavLink to="/index">Home</NavLink>}
                    <NavLink to="/auth">Login</NavLink>
                    <NavLink to="/reservation">Reservation</NavLink>
                    <NavLink to="/comments">Livre D'or</NavLink>
                </nav>
            </div>
            <div id="detail">
                <h1>Villa Kalokairi</h1>
                <Outlet />
            </div>
        </>
    )
}

export default Root