

import { React, useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { GetToken, GetUserFirstName } from "../services/auth.services";
import { useAuthStore } from "../store/authStore";
// import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const Root = () => {
    const navigate = useNavigate();
    const resetUserData = useAuthStore((state) => state.reset)
    const token = GetToken()
    const userFirstName = GetUserFirstName()
    //const [isLoggedIn, setisLoggedIn] = useState(false);
    //const [anchorEl, setAnchorEl] = useState(null);
    const logIn = async () => {
        console.log(JSON.stringify(`token dans login()  ====> ${token}`));
        if (token) {
            setisLoggedIn(true);
        } else {
            console.log('NO TOKEN');
            navigate('auth')
            alert(`vous n'êtes pas connecté, veuillez vous identifier`)
        }
    };

    const logOut = async () => {
        await resetUserData();
        setisLoggedIn(false);
        window.location.reload(true);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseAndRedirect =   (route) => {
         setAnchorEl(null);
        navigate(route)
        
    };

    useEffect(() => {
        if (token) {
            setisLoggedIn(true);
        } else {
            setisLoggedIn(false);
        }
    }, [token])

    return (
        <>
            <>
                <FormGroup>
                    {isLoggedIn ? (
                        <>
                            <h4>Bonjour {userFirstName}</h4>
                            {/* <Button variant="contained" id="logged" onClick={logOut}>Logout</Button> */}
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={isLoggedIn}
                                        onChange={logOut}
                                        aria-label="login switch"
                                    />
                                }
                                label={isLoggedIn ? 'Logout' : 'Login'}
                            />


                        </>) : null
                    // //     (
                    // //     <>
                    // //         <FormControlLabel
                    // //             control={
                    // //                 <Switch
                    // //                     checked={isLoggedIn}
                    // //                     onChange={logIn}
                    // //                     aria-label="login switch"
                    // //                     disabled
                    // //                 />
                    // //             }
                    // //             label={isLoggedIn ? 'Logout' : 'Login'}
                    // //         />
                    // //         {/* <Button variant="contained" onClick={logIn}>Login</Button> */}


                    // //     </>
                    // // )
                }
                </FormGroup>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Villa Kalokairi
                    </Typography>
                    {isLoggedIn?  (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleCloseAndRedirect}
                            >
                                {/* <MenuItem onClick={handleCloseAndRedirect('')}>Profile</MenuItem> */}
                                <MenuItem onClick={handleCloseAndRedirect('index')}>Home</MenuItem>
                            </Menu>
                        </div>
                    ) : null }
                        <NavLink to="/index">Home</NavLink>
                        <NavLink to="/auth">Login</NavLink>
                        <NavLink to="/reservation">Reservation</NavLink>
                        <NavLink to="/comments">Livre D'or</NavLink>
                    </Toolbar>
                </AppBar>

            </>

            <div id="detail">
                <h1>Villa Kalokairi</h1>
                <Outlet />
            </div>
        </>
    )
}

export default Root