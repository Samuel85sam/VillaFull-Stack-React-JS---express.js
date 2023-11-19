import { useState } from "react";
import Agenda from "../components/reservation.components/agenda"
import ResaForm from "../components/reservation.components/resaForm";

function Reservation () {
    const [insertResa, setInsertResa] = useState(true);
    const handleAction = function () {
        setInsertResa(!insertResa);
    };

    return (
        <>    <h1>Réserver un séjour</h1>
            <div id="sidebar">
                <button onClick={handleAction}>
                    {insertResa ? "RESERVER" : "Notre agenda"}
                </button>
                {insertResa ?   <Agenda /> : <ResaForm />}
            </div>
        </>

    )
}

export default Reservation
