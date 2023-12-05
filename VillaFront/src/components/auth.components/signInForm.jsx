import { React, useEffect, useState } from "react";
import { PostForm, getOneById } from "../../api/CRUD.api";
import { useAuthStore } from "../../store/authStore";
import { Redirect } from "../../services/navigation.services";
import { useNavigate } from "react-router-dom";



const SignIn = () => {
    const [inputValue, setInputValue] = useState({
        loginName: "login_test",
        password: "login_test",
    });

    const navigate = useNavigate();

    const handleChange = (name, value) => {
        setInputValue((prevState) => ({ ...prevState, [name]: value }));
    };
 
    const addUserInfos = useAuthStore((state) => state.addUserData);
    //*----------------------------------------------------
    //*verif storage ok ↓↓↓*/
    const useUserInfos = useAuthStore((state) => state.userData)
    //*----------------------------------------------------
    const loadUserInfos = async (userId) => {
        try {
            const route = 'auth/GETONEbyID/';
            const id = userId;
            const response = await getOneById(id, route);
            const userInfos = response.data
            if (response.status === 200) {
                addUserInfos(userInfos)
                navigate('/index');
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
        else {
            Redirect('index')
            alert("LOGIN FAILED ");
            console.log("LOGIN FAILED ==> reload login page ");
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.loginName === "") {
            alert("veuillez saisir un nom.");
            return;
        }
        if (inputValue.password === "") {
            alert("veuillez saisir un password.");
            return;
        }

        postCheckAndRedirect(inputValue)
    }
    //*----------------------------------------------------
    //*verif storage ok ↓↓↓*/
    // 
    useEffect(() => {
        if (useUserInfos) {
            console.log(`STORED ====>${JSON.stringify(useUserInfos)}`);
        }
    }, [useUserInfos])
    //*----------------------------------------------------  
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