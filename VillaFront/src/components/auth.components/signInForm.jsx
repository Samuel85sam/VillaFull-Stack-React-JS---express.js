import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import Cookies from "js-cookie";
import { PostForm } from '../../api/CRUD.api';


function SignIn() {
    // État local pour stocker les valeurs des champs du formulaire
    const [inputValue, setInputValue] = useState({
        login: "SamDem",
        password: "SamDem",
    });

    // État local pour déterminer si les données sont prêtes à être envoyées
    const [readyToSend, isReadyToSend] = useState(false);

    //gestion form.
    const handleChange = (name, value) => {
        setInputValue((prevState) => ({ ...prevState, [name]: value }));
    };

    //redirection after-POST
    const navigate = useNavigate();
    const redirect = async () => {
        const result = await PostForm()
        try {
            if (result === 200 || 201) {
                navigate("index");

                window.location.reload();
            }
        } catch (err) {
            console.error(err);
        }
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

        isReadyToSend(true); // Définit l'état "readyToSend" sur true pour indiquer que les données sont prêtes à être envoyées au serveur

        //call API
        const route = 'auth/LOGIN';
        PostForm(inputValue, route);

        //redirection
        redirect()
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
                        label="Login"
                        type="text"
                        name="login"
                        className="input"
                        value={inputValue.login}
                        onChange={(e) => handleChange("login", e.target.value)}
                    />
                    <label htmlFor="noPasswordm">Password :</label>
                    <input
                        label="Password"
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