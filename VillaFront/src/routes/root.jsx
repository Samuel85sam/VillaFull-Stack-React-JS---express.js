import { NavLink, useNavigation,Outlet } from "react-router-dom"

export default function Root() {
    const navigation = useNavigation();
    return (
        <>
            <nav id="sidebar">
                <NavLink to="/index">Home</NavLink>
                <NavLink to="/auth">Login</NavLink>
                <NavLink to="/reservation">Reservation</NavLink>
                <NavLink to="/avis">Livre D'or</NavLink>
            </nav>
            <div id="detail"
                className={
                    navigation.state === "loading" ? "loading" : ""
                }>
                <Outlet />
            </div>
        </>
    )
}