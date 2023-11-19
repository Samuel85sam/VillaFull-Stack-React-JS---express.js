import { useState } from "react";
import Agenda from "../components/reservation/agenda"
import ResaForm from "../components/reservation/resaForm";

function Reservation () {
    const [insertResa, setInsertResa] = useState(true);
    const handleAction = function () {
        setInsertResa(!insertResa);
    };

    return (
        <>    <h1>Livre d'or</h1>
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
