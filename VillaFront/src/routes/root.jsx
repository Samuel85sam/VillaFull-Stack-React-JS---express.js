import { React, useEffect, useState } from "react";
import { NavLink, Outlet, Navigate } from "react-router-dom"
import { useAuthStore } from "../store/authStore";


const Root = async () => {
    const userInfos = await useAuthStore((state) => state.userData);

    const logIn = () => {
        console.log(`userInfos.string : ${JSON.stringify(userInfos)}`);
        const { JWT } = userInfos

        try {
            if (JWT) {
                return JWT
            } else {
                return null
            }

        } catch (error) {
            console.error(`JWT ERROR : ${JWT}`);
        }
    }

    const logOut = () => {
        setisLoggedIn(false);
    };
    const navigate = Navigate;
    const JWT = await logIn()
    const [isLoggedIn, setisLoggedIn] = useState(false);


    useEffect(() => {
        if (JWT == !null) {
            setisLoggedIn(true);
        }
    },JWT)

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

