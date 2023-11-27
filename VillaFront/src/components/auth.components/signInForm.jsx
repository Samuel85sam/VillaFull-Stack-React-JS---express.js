import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import { PostForm } from "../../api/CRUD.api";



function SignIn() {
    const login = useAuthStore((state) => state.login)

    // État local pour stocker les valeurs des champs du formulaire
    const [inputValue, setInputValue] = useState({
        loginName: "login_test",
        password: "login_test",
    });

    //! // État local pour déterminer si les données sont prêtes à être envoyées
    // !const [readyToSend, isReadyToSend] = useState(false);

    //gestion form.
    const handleChange = (name, value) => {
        setInputValue((prevState) => ({ ...prevState, [name]: value }));
    };

    //redirection after-POST
    const navigate = useNavigate();
    const redirect = async () => {
        try {
            navigate("index");
            console.log('====================> REDIRECT TO USER INDEX  PAGE');
            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    }

    const postCheckAndRedirect = async (inputValue) => {
        const formValues = inputValue
        const route = 'auth/LOGIN';
        const result = await PostForm(formValues, route);
        console.log(`result PostForm ===>${JSON.stringify(result)}`);
        if (result.status === 200 || 201) {
            console.log(result.status);
            redirect()
            console.log("REGISTER DONE ==> reload login page ");
        }
        else if (result.status === !200 || 201) {
            redirect()
            console.alert("REGISTER FAILED Fail");
            console.log("REGISTER FAILED ==> reload login page ");
        }
        //redirection
        redirect()
    }

    //call de la fct à la soumission du form.
    const handleSubmit = (e) => {
        e.preventDefault();

        //1st Validation 
        if (inputValue.loginName === "") {
            alert("veuillez saisir un nom.");
            return;
        }
        if (inputValue.password === "") {
            alert("veuillez saisir un password.");
            return;
        }

        postCheckAndRedirect(inputValue)

        // !isReadyToSend(true); // Définit l'état "readyToSend" sur true pour indiquer que les données sont prêtes à être envoyées au serveur
    }

    //! useEffect(() => {
    //!     // Si "readyToSend" est true, alors appelez PostToApi
    //!     readyToSend === false ? null : PostToApi(inputValue);
    //! }, [readyToSend]);

    return (
        <>
            <div className="LoginDiv">
                <form>
                    <label htmlFor="Login">Login :</label>
                    <input
                        label="loginName"
                        type="text"
                        name="loginName"
                        className="input"
                        value={inputValue.loginName}
                        onChange={(e) => handleChange("loginName", e.target.value)}
                    />
                    <label htmlFor="noPasswordm">Password :</label>
                    <input
                        label="password"
                        type="password"
                        name="password"
                        className="input"
                        value={inputValue.password}
                        onChange={(e) => handleChange("password", e.target.value)}
                    />
                    <button type="submit" onClick={handleSubmit}>
                        → Connexion →
                    </button>
                </form>
            </div>
        </>
    );
};

export default SignIn