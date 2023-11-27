import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostForm, getOne } from "../../api/CRUD.api";
import { useAuthStore } from "../../store/authStore";



const SignIn = () => {
  //  const login = useAuthStore((state) => state.login)

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

    const loadUserInfos = async () => {
        try {
            const result = await getOne();
            console.log(result)
            const userInfos = result.data
            if(userInfos) {
                addUserInfos(userInfos)
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des infos utilisateur:', error);
        }
    };

    const postCheckAndRedirect = async (inputValue) => {
        const formValues = inputValue
        const route = 'auth/LOGIN';
        const result = await PostForm(formValues, route);
        
        
        //const userId = result.data.user.id;
        console.log(`result PostForm ===>${JSON.stringify(result)}`);
        if (result.status === 200 || 201) {
            console.log(result.status);
          //  console.log(`User Id in redirect ==>${userId}`);
           // redirect(userId)//loading du store (zustand) 
          loadUserInfos();
           redirect()
            console.log(`LOGIN DONE ==> reload login page`);
        }
        else if (result.status === !200 || 201) {
            redirect()
            alert("LOGIN FAILED ");
            console.log("LOGIN FAILED ==> reload login page ");
        }
        //redirection
        redirect()

          //loading du store (zustand) 
          loadUserInfos();
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