import { React, useState, useEffect } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom"
import { GetToken, GetUserFirstName } from "../services/auth.services";
import { useAuthStore } from "../store/authStore";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Root = () => {
    const resetUserData = useAuthStore((state) => state.reset)
    const token = GetToken()
    const userFirstName = GetUserFirstName()
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const pagesLinks = [
        <Link to='index'>
            Home
        </Link>,
        <Link to='reservation'>
            Réservation
        </Link>,
        <Link to="comments">
            Livre d'Or
        </Link>
    ];
    const logOut = async () => {
        await resetUserData();
        setisLoggedIn(false);
        window.location.reload(true);
    };

    const settingsLinks = [
        <Link to='userProfile'>
            Profile
        </Link>,
        <Link to='userAccount'>
            Espace personnel
        </Link>,
        <Button variant="text" onClick={logOut}>
            <Typography variant="h5">
                Logout
            </Typography>
        </Button>
    ];
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

   

    useEffect(() => {
        if (token) {
            setisLoggedIn(true);
        } else {
            setisLoggedIn(false);
        }
    }, [token])
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const navigate = useNavigate();


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    // const redirect = (route) => {
    //     const target = null
    //     if (route = 'Home') {
    //         target = 'index'
    //     } else if (route = 'Reservation') {
    //         target = 'reservation'
    //     } else if (route = 'Livre D\'Or') {
    //         target = 'comments'
    //     }
    //     route = target
    //     navigate(route)

    // }

    return (


        <>
            < AppBar position="static" >
                {/* AppBar est une barre d'application qui contient des composants comme Toolbar, Typography, IconButton, etc. */}
                < Container maxWidth="xl" >
                    {/* Container est un composant de Material-UI qui enveloppe le contenu avec une largeur maximale. */}
                    < Toolbar disableGutters >
                        {/* Toolbar */}
                        < AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 5 }} />
                        {/* Icon Android */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                //  titre de l'application.
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontfamily: 'GFS Neohellenic',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Villa Kalokairi
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            {/* Icon menu Nav*/}
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {/* Menu ouvert*/}
                                {pagesLinks.map((page, index) => (
                                    <MenuItem key={index} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        {/* mêmes éléments*/}
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        {/*Icon Androïd */}
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontfamily: 'GFS Neohellenic',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Villa Kalokairi
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {/* Une boîte supplémentaire pour les éléments à afficher sur les grands écrans. */}
                            {pagesLinks.map((page, index) => (
                                <Button
                                    key={index}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            {/* Une boîte supplémentaire avec flexGrow à 0 pour spécifier qu'elle ne doit pas prendre autant d'espace que possible. */}
                            <Tooltip title={token? userFirstName : ''}>
                                {/* Tooltip est un composant qui affiche une info-bulle au survol. */}
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    {/* Icon utilisateur */}
                                    <AccountCircle />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {/* Menu d'utilisateur similaire au menu de navigation, mais avec des éléments différents. */}
                                {settingsLinks.map((setting, index) => (
                                    <MenuItem key={index} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar >
                </Container >
            </AppBar >
            <Outlet />
        </>

    );
}
export default Root;
// const Root = () => {
//     const navigate = useNavigate();
//     const resetUserData = useAuthStore((state) => state.reset)
//     const token = GetToken()
//     const userFirstName = GetUserFirstName()
//     const [isLoggedIn, setisLoggedIn] = useState(false);
//     const logIn = async () => {
//         console.log(JSON.stringify(`token dans login()  ====> ${token}`));
//         if (token) {
//             setisLoggedIn(true);
//         } else {
//             console.log('NO TOKEN');
//             navigate('auth')
//             alert(`vous n'êtes pas connecté, veuillez vous identifier`)
//         }
//     };

//     const logOut = async () => {
//         await resetUserData();
//         setisLoggedIn(false);
//         window.location.reload(true);
//     };

//     useEffect(() => {
//         if (token) {
//             setisLoggedIn(true);
//         } else {
//             setisLoggedIn(false);
//         }
//     }, [token])

//     return (
//         <>
//             <div id="sidebar">
//                 <nav>
//                     {isLoggedIn ? (
//                         <>
//                             <h4>LOGGED</h4>
//                             <h5>Bonjour {userFirstName}</h5>
//                             <Button variant= "contained" id="logged" onClick={logOut}>Logout</Button>
//                             <br />
//                         </>) : (
//                         <>
//                         <Button variant= "contained" onClick={logIn}>Login</Button>
//                         <br />
//                         </>
//                     )}
//                     <br />
//                     <NavLink to="/index">Home</NavLink>
//                     <NavLink to="/auth">Login</NavLink>
//                     <NavLink to="/reservation">Reservation</NavLink>
//                     <NavLink to="/comments">Livre D'or</NavLink>
//                 </nav>
//             </div>
//             <div id="detail">
//                 <h1>Villa Kalokairi</h1>
//                 <Outlet />
//             </div>
//         </>
//     )
// }

// export default Root