import { React, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { GetToken, clearStore, logOut } from '../services/auth.services'
import UserPage from '../components/User/userPage'
import UserProfile from '../components/User/userProfile'
const ProtectedUserPages = () => {


    const [isLoggedIn, setisLoggedIn] = useState(false);
    const navigate = useNavigate
    const token = GetToken()



    useEffect(() => {
        if (token) {
            setisLoggedIn(true);
        } else {
            setisLoggedIn(false);
            clearStore()
            navigate('auth')
        }
    }, [token])





    return (
        <>
            {isLoggedIn ? <>
                <UserPage />
                <UserProfile /> </> : null
            }
        </>
    )
}


export default ProtectedUserPages