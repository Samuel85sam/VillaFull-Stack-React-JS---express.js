import React from 'react'
import { GetToken } from '../services/auth.services';
import IndexUser from '../components/index/indexUser';
import IndexAdmin from '../components/index/indexAdmin';
import LandingPage from '../components/index/landingPage';

const ProtectedRoutes = () => {

    const token = GetToken();
    const isAdmin = false  
    const route = () => {
            const admin = isAdmin
            if (admin === false ){
                return <IndexUser/>
            } 

            return <IndexAdmin/>
    }

    if (token === undefined) {
        return null
    }

    return (
        <>  
            
            {token ? route() : <LandingPage/> }
        </>
    )
}

export default ProtectedRoutes