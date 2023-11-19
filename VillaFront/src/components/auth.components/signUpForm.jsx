import { React, useState, useEffect } from "react";
import { PostForm } from '../../api/CRUD.api';
import { useNavigate } from 'react-router-dom';
function SignUp() {
    // État local pour stocker les valeurs du formulaire
    const [inputValue, setInputValue] = useState({
        nom: "nomTest",
        prenom: "prenomTest",
        adresse: "dans ton cul",
        tel: "0123456789",
        email: "mail@test",
        loginName: "logNameTest",
        password: "passwordTest",
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
                navigate("");

                window.location.reload();
            }
        } catch (err) {
            console.error(err);
        }
    }

    //call de la fct à la soumission du form. 
    const handleSubmit = (e) => {
        e.preventDefault();

        //1st Validations  
        if (inputValue.nom === '') {
            alert('veuillez saisir un nom.');
            return;
        }
        if (inputValue.prenom === '') {
            alert('veuillez saisir un prenom.');
            return;
        }
        if (inputValue.adresse === '') {
            alert('veuillez saisir un adresse.');
            return;
        }
        if (inputValue.tel === '') {
            alert('veuillez saisir un tel.');
            return;
        }
        if (inputValue.email === '') {
            alert('veuillez saisir une adresse email.');
            return;
        }
        if (inputValue.loginName === '') {
            alert('veuillez saisir un nom.');
            return;
        }
        if (inputValue.password === '') {
            alert('veuillez saisir un password.');
            return;
        }

        isReadyToSend(true); // Définit l'état "readyToSend" sur true pour indiquer que les données sont prêtes à être envoyées au serveur

        //call API
        const route = 'auth/REGISTER';
        PostForm(inputValue, route);

        //redirection
        redirect()
    };

    // !useEffect(() => {
    // !    // Si "readyToSend" est true, alors appelez PostToApi
    // !    readyToSend === false ? null : PostToApi(inputValue);
    // !}, [readyToSend]);

    return (
        <div className="RegistrationDiv">
            <form>
                <label htmlFor="nom">Nom :</label>
                <input
                    label="nom"
                    type="text"
                    name="nom"
                    className="input"
                    value={inputValue.nom}
                    onChange={(e) => handleChange("nom", e.target.value)}
                />
                <label htmlFor="prenom">Prenom :</label>
                <input
                    label="prenom"
                    type="text"
                    name="prenom"
                    className="input"
                    value={inputValue.prenom}
                    onChange={(e) => handleChange("prenom", e.target.value)}
                />
                  <label htmlFor="adresse">Adresse :</label>
                <input
                    label="adresse"
                    type="text"
                    name="adresse"
                    className="input"
                    value={inputValue.adresse}
                    onChange={(e) => handleChange("adresse", e.target.value)}
                />
                <label htmlFor="tel">Tel :</label>
                <input
                    label="tel"
                    type="text"
                    name="tel"
                    className="input"
                    value={inputValue.tel}
                    onChange={(e) => handleChange("tel", e.target.value)}
                />
                <label htmlFor="email">Email :</label>
                <input
                    label="Email"
                    type="text"
                    name="email"
                    className="input"
                    value={inputValue.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                />
                <label htmlFor="loginName">LoginName :</label>
                <input
                    label="LoginName"
                    type="text"
                    name="loginName"
                    className="input"
                    value={inputValue.loginName}
                    onChange={(e) => handleChange("login", e.target.value)}
                />
                <label htmlFor="password">Password :</label>
                <input
                    label="Password"
                    type="password"
                    name="password"
                    className="input"
                    value={inputValue.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                />
                <button type="submit" onClick={handleSubmit}>
                    →S'enregistrer→
                </button>
            </form>
        </div>
    );
};



export default SignUp