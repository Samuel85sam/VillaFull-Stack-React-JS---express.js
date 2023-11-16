import { NavLink, useNavigation, Outlet } from "react-router-dom"

export default function Root() {
    const navigation = useNavigation();
    return (
        <>

            <div id="sidebar">
                

                <nav>
                <NavLink to="/index">Home</NavLink>
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