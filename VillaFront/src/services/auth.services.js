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