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
import ImgPiscine from '../IMG/imgVilla/piscine1Banner.jpeg'

const Root = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [isLoggedIn, setisLoggedIn] = useState(false);

    const navigate = useNavigate();
    const resetUserData = useAuthStore((state) => state.reset)
    const token = GetToken()
    const userFirstName = GetUserFirstName()

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
    const logOut = async () => {
        await resetUserData();
        setisLoggedIn(false);
        navigate('index')
        window.location.reload(true);
    };

    const logIn = async () => {
        console.log(JSON.stringify(`token dans login()  ====> ${token}`));
        if (token) {
            setisLoggedIn(true);
            alert(`vous êtes connecté, bienvenue ${userFirstName}`)

        } else {
            console.log('NO TOKEN');
            navigate('auth')
            handleCloseUserMenu()
        }
    };

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
    
    const settingsLinks = [
        <Link to = 'user/profile'>Profile</Link>,
        <Link to = 'user/page'>Espace Personnel</Link>

     ];

    useEffect(() => {
        if (token) {
            setisLoggedIn(true);
        } else {
            setisLoggedIn(false);
        }
    }, [token])

    return (
        <>
            < AppBar 
                position = "static"
                sx={{
                    // position:'fixed',
                    backgroundImage: `url(${ImgPiscine})`,
                    backgroundPositionY: 'bottom', 
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "100%",
                    }}
             >
                {/* AppBar est une barre d'application qui contient des composants comme Toolbar, Typography, IconButton, etc. */}
                < Container maxWidth="xl" >
                    {/* Container est un composant de Material-UI qui enveloppe le contenu avec une largeur maximale. */}

                    < Toolbar disableGutters >
                        {/*--------------------------------------------------------------------------------------------------------------------*/}
                        {/* Icon Villa + titre = Toolbar */}
                        {/* (mode petit écran) Icon menu */}
                        {/* < AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 5 }} /> */}

                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
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

                        {/*--------------------------------------------------------------------------------------------------------------------*/}
                        {/* (mode petit écran)  menu Nav*/}

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
                                {pagesLinks.map((page, index) => (
                                    <MenuItem key={index} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                                {isLoggedIn ? <Button variant="text" onClick={logOut}>
                                    <Typography variant="h7">
                                    Logout 
                                    </Typography>
                                </Button> : <Button variant="text" onClick={logIn}>
                                    <Typography variant="h7">
                                    Sign-In/Sign-Up
                                    </Typography>
                                </Button>}
                            </Menu>
                        </Box>

                        {/*--------------------------------------------------------------------------------------------------------------------*/}
                        {/* (mode grand écran) Icon titre */}


                        {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
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

                        {/*--------------------------------------------------------------------------------------------------------------------*/}
                        {/* (mode grand écran)  menu Nav*/}

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pagesLinks.map((page, index) => (
                                <Button
                                    key={index}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                             {isLoggedIn ? <Button 
                             variant="text" 
                             onClick={logOut}
                             sx={{ my: 2, color: 'white', }}>
                                    <Typography variant="h7">
                                    Logout 
                                    </Typography>
                                </Button> : <Button 
                                variant="text" 
                                onClick={logIn}
                                sx={{ my: 2, color: 'white', }}>
                                    <Typography variant="h7">
                                    Sign-In/Sign-Up
                                    </Typography>
                                </Button>}
                        </Box>

                        {/*--------------------------------------------------------------------------------------------------------------------*/}
                        {/*menu utilisateur */}

                        <Box sx={{ flexGrow: 0 }}>
                            {/* flexGrow à 0 pour spécifier qu'elle Ne doit PAS prendre autant d'espace que possible. */}
                            <Tooltip title={token ? userFirstName : ''}>
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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
                                {settingsLinks.map((setting, index) => (
                                    <MenuItem key={index} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                                {isLoggedIn ? <Button variant="text" onClick={logOut}>
                                    <Typography variant="h7">
                                        Logout
                                    </Typography>
                                </Button> : <Button variant="text" onClick={logIn}>
                                    <Typography variant="h7">
                                        Login
                                    </Typography>
                                </Button>}
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
