import { useAuthStore } from "../../store/authStore"

export default function Index(){

    // const adminOrNot = function () {
    //     let admin = false
    //     //retourne true si token ok
    //     return admin
    // }

    const user = useAuthStore((state) => state.userData)

    //console.log(user ? user.id : null);

    return (
        <>
        <h1>Dashboard</h1>
        {/* {admin? <IndexAdmin /> : <IndexUser /> }  */}
        </>
    )
}