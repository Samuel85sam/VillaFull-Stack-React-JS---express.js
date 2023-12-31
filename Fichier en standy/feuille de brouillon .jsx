import { React, useState } from "react";
import { PostForm } from '../../api/CRUD.api';
import { useNavigate } from "react-router-dom";
function SignUp() {
    
    const [inputValue, setInputValue] = useState({
        nom: "nomTest",
        prenom: "prenomTest",
        adresse: "adresse test",
        tel: "0123456789",
        loginName: "login_test",
        mail: "mail@test",
        password: "login_test",
    });

    const handleChange = (name, value) => {
        setInputValue((prevState) => ({ ...prevState, [name]: value }));
    };
    const navigate = useNavigate();
    const postStoreAndRedirect = async (inputValue) => {
        const formValues = inputValue
        const route = 'auth/REGISTER';
        const result = await PostForm(formValues, route);

        if (result.status === 200 || 201) {
           window.location.reload(true)
            console.log("FROM BACKEND ==> NEW USER STORED IN DATABASE ==> redirect to user index page ");
        }
        else if (result.status === !(200 || 201)) {
            navigate('auth')
            alert("REGISTER FAILED Fail");
            console.log("REGISTER FAILED ==> reload login page ");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

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

        postStoreAndRedirect(inputValue)
    };
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
                <label htmlFor="mail">mail :</label>
                <input
                    label="mail"
                    type="text"
                    name="mail"
                    className="input"
                    value={inputValue.mail}
                    onChange={(e) => handleChange("mail", e.target.value)}
                />
                <label htmlFor="loginName">LoginName :</label>
                <input
                    label="LoginName"
                    type="text"
                    name="loginName"
                    className="input"
                    value={inputValue.loginName}
                    onChange={(e) => handleChange("loginName", e.target.value)}
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