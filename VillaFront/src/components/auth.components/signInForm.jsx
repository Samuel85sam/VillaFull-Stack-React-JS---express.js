import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostForm, getOneById } from "../../api/CRUD.api";
import { useAuthStore } from "../../store/authStore";



const SignIn = () => {

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
    const redirect = function (id) {

        try {
            //navigate(`/index/${id}`);
            navigate("/index")
            // console.log('====================> REDIRECT TO USER INDEX  PAGE');
            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    }
    const addUserInfos = useAuthStore((state) => state.addUserData);
    const user = useAuthStore((state) => state.userData)
    const loadUserInfos = async (userId) => {
        try {
            const route = 'auth/GETONEbyID/';
            const id = userId;
            console.log(`ID =========>${id}`);
           const response = await getOneById(id, route);
           console.log(`RESPONSE===================>${response}`);
           const userInfos = response.data
           
            if (response.status === 200) {
                addUserInfos(userInfos)
                console.log(`OKOKOKOKOK  !!!!!!!  addUserInfos() ====> ${userInfos}`);
            }
        } catch (error) {
            
            console.error('Erreur lors de la récupération des infos utilisateur:', error);
        }
    };

    const postCheckAndRedirect = async (inputValue) => {
        const formValues = inputValue
        const route = 'auth/LOGIN';
        const result = await PostForm(formValues, route);
        const userId = result.data.user.id;
        
        if (result.status === 200 || 201) {
            loadUserInfos(userId);
        }
        else if (result.status === !200 || 201) {
            redirect()
            alert("LOGIN FAILED ");
            console.log("LOGIN FAILED ==> reload login page ");
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

        postCheckAndRedirect(inputValue)

        // !isReadyToSend(true); // Définit l'état "readyToSend" sur true pour indiquer que les données sont prêtes à être envoyées au serveur
    }

    //! useEffect(() => {
    //!     // Si "readyToSend" est true, alors appelez PostToApi
    //!     readyToSend === false ? null : PostToApi(inputValue);
    //! }, [readyToSend]);

    useEffect(() => { 
        if (user) {
            console.log(user);
        }
    }, [user])

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