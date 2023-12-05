import { React, useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom"
import { GetToken } from "../services/auth.services";
import { Redirect } from "../services/navigation.services";
import { useAuthStore } from "../store/authStore";
const Root =  () => {
    const resetUserData = useAuthStore((state) => state.reset)
    const token =  GetToken()
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const logIn = async () => {
        console.log(JSON.stringify(`token dans login()  ====> ${token}`));
        if (token) {
            setisLoggedIn(true);
             }else{
                 console.log('NO TOKEN');
                 alert(`vous n'êtes pas connecté, veuillez vous identifier`)
                 

//                TODO:trouver un moyen de rediriger sans que ça plante "Hooks can only be called inside of the body of a function component..."
             }  
    };
    const logOut = async () => {
       await  resetUserData();
        setisLoggedIn(false);
        window.location.reload(true);
            };

    useEffect(() => {
        console.log(`token dans useEffect ===> ${JSON. stringify(token)}`);
        if (token) {
            setisLoggedIn(true);
            console.log(JSON.stringify(`token dans login()  ====> ${token}`));
        }else{
            setisLoggedIn(false);

        }

    },[])


    return (
        <>
            <div id="sidebar">
                <nav>
                    {isLoggedIn ? (
                        <button onClick={logOut}>Logout</button>
                    ) : (
                        <button onClick={logIn}>Login</button>
                    )}
                    <NavLink to="/index">Home</NavLink>
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