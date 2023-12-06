import { useAuthStore } from "../store/authStore";

export const GetToken = () =>{
    const userInfos = useAuthStore((state) => state.userData)
    const token = userInfos.JWT
    return token
}

export const GetUserFirstName = () =>{
    const userInfos = useAuthStore((state) => state.userData)
    const userFirstName = userInfos.prenom
    return JSON.stringify(userFirstName)
}

export const logOut = async () => {
    const resetUserData = useAuthStore((state) => state.reset)
    await resetUserData();
    setisLoggedIn(false);
    window.location.reload(true);
};

export const logIn = () => {
    //const addUserInfos = useAuthStore((state) => state.addUserData);

    console.log(JSON.stringify(`token dans login()  ====> ${token}`));
    if (token) {
        setisLoggedIn(true);
        alert(`vous êtes connecté, bienvenue ${userFirstName}`)

    }
}

export const clearStore = () => {
    const resetUserData = useAuthStore((state) => state.reset)

    resetUserData();
}



