import {React} from 'react';
import {useNavigate} from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PostForm } from '../../api/CRUD.api';


const defaultTheme = createTheme();

const SignUp = () => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
               
            if (formData.get('nom') === '') {
                alert('veuillez saisir un nom.');
                return;
            }
            if (formData.get('prenom') === '') {
                alert('veuillez saisir un prenom.');
                return;
            }
            if (formData.get('adresse') === '') {
                alert('veuillez saisir un adresse.');
                return;
            }
            if (formData.get('tel') === '') {
                alert('veuillez saisir un tel.');
                return;
            }
            if (formData.get('mail') === '') {
                alert('veuillez saisir une adresse email.');
                return;
            }
            if (formData.get('loginName') === '') {
                alert('veuillez saisir un nom.');
                return;
            }
            if (formData.get('password') === '') {
                alert('veuillez saisir un password.');
                return;
            }

        const data = Object.fromEntries(formData)
        postStoreAndRedirect(data)      
    };

    const postStoreAndRedirect = async (inputValue) => {
        const formValues = inputValue
        const route = 'auth/REGISTER';
        const result = await PostForm(formValues, route);

        if (result.status === 200 || result.status === 201) {
           window.location.reload(true)
            console.log("FROM BACKEND ==> NEW USER STORED IN DATABASE ==> redirect to user index page ");
        }
        else if (result.status === 401) {
            alert(`Valeurs introduites non - valides`)
            console.log("Wrong Values ==> reload login page ");
            navigate('/auth')

        }
        else {
            alert("REGISTER FAILED Fail");
            console.log("REGISTER FAILED ==> reload login page ");
            navigate('/auth')
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="nom"
                                    required
                                    fullWidth
                                    id="nom"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="family-name"
                                    required
                                    fullWidth
                                    id="prenom"
                                    label="Last Name"
                                    name="prenom"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="adress"
                                    required
                                    fullWidth
                                    id="adresse"
                                    label=" adresse"
                                    name="adresse"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="tel"
                                    required
                                    fullWidth
                                    id="tel"
                                    label="tel"
                                    name="tel"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="loginName"
                                    required
                                    fullWidth
                                    id="loginName"
                                    label="loginName"
                                    name="loginName"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="email"
                                    required
                                    fullWidth
                                    id="mail"
                                    label="mail"
                                    name="mail"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="new-password"
                                    required
                                    fullWidth
                                    name="password"
                                    label="password"
                                    type="password"
                                    id="password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default SignUp