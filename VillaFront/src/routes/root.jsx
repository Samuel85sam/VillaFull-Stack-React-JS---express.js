import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom"

export default function Root() {

    const [isLoggedIn, setisLoggedIn] = useState(null);
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
                    {isLoggedIn? <NavLink to="indexUser">User Index</NavLink> : <NavLink to="/index">Home</NavLink>}
                    <NavLink to="/auth">Login</NavLink>
                    <NavLink to="/reservation">Reservation</NavLink>
                    <NavLink to="/comments">Livre D'or</NavLink>
                </nav>
            </div>
            <div id="detail"
            // className={
            //     navigation.state === "loading" ? "loading" : ""
            // }
            >
                <h1>Villa Kalokairi</h1>
                <Outlet />
            </div>
        </>
    )
}