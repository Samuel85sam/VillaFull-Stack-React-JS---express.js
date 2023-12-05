import React from 'react'
import { GetToken } from '../services/auth.services';
import IndexUser from './index/indexUser';
import IndexAdmin from './index/indexAdmin';
import { Redirect } from '../services/navigation.services';
import LandingPage from './index/landingPage';

const ProtectedRoutes = () => {

    //const location = useLocation();
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