import { React, useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { GetToken, GetUserFirstName } from "../services/auth.services";
import { useAuthStore } from "../store/authStore";

const Root = () => {
    const navigate = useNavigate();
    const resetUserData = useAuthStore((state) => state.reset)
    const token = GetToken()
    const userFirstName = GetUserFirstName()
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const logIn = async () => {
        console.log(JSON.stringify(`token dans login()  ====> ${token}`));
        if (token) {
            setisLoggedIn(true);
        } else {
            console.log('NO TOKEN');
            navigate('auth')
            alert(`vous n'êtes pas connecté, veuillez vous identifier`)
        }
    };

    const logOut = async () => {
        await resetUserData();
        setisLoggedIn(false);
        window.location.reload(true);
    };

    useEffect(() => {
        console.log(`token dans useEffect ===> ${JSON.stringify(token)}`);
        if (token) {
            setisLoggedIn(true);
            console.log(JSON.stringify(`token dans login()  ====> ${token}`));
        } else {
            setisLoggedIn(false);
        }
    }, [token])

    return (
        <>
            <div id="sidebar">
                <nav>
                    {isLoggedIn ? (
                        <>
                            <h4>LOGGED</h4>
                            <h5>Bonjour {userFirstName}</h5>
                            <button id="logged" onClick={logOut}>Logout</button>
                        </>) : (

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