import { redirect } from "react-router-dom"
import Agenda from "../components/reservation/agenda"



export default function Reservation(){
    const navigate = useNavigate()
    const redirect = () => {

    }
    return (
        <>
        <h1>Reservation</h1>
        <Agenda/>
        <button 
        className="btn btn-primary btn-block"
        onClick={redirect} >
               
                <span> → RESERVER ← </span>
            </button>

        
        
        </>
    )
}