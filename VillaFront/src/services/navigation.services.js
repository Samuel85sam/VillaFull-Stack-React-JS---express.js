import { useNavigate } from "react-router-dom";



export const Redirect =  (route) => {
    const navigate = useNavigate();
    try {
        navigate(route)
        window.location.reload(true);
    } catch (err) {
        console.error(err);
    }
}