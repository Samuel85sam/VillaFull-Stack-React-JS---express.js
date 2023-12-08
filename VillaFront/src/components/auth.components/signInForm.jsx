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
import { React, useEffect, useState, FormEvent } from "react";
import { PostForm, getOneById } from "../../api/CRUD.api";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

const SignIn = () => {
  const addUserInfos = useAuthStore((state) => state.addUserData);
  const useUserInfos = useAuthStore((state) => state.userData)
  const navigate = useNavigate();


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

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    postCheckAndRedirect(data)
  };

  const postCheckAndRedirect = async (data) => {
    //  console.log(`data dans postCheckAndRedirect ===>${data} ===> stringified: ===> ${JSON.stringify(data)}`);
    try {
      const route = 'auth/LOGIN';
      const result = await PostForm(data, route);
      console.log(`result dans signInForm ==> ${JSON.stringify(result)}`);

      if (result.status === 200 || result.status === 201) {
        console.log(`result.status dans signIn.postCkeckAndRedirect ===> ${result.status}`);
        const userId = result.data.user.id

        loadUserInfos(userId);
      }
      else if (result.status === 401) {
        console.log(`result.status dans signIn.postCkeckAndRedirect ===> ${result.status}`);
        navigate('/auth')
        alert("Utilisateur inexistant");
      }
      else if (result.status === 418) {
        console.log(`result.status dans signIn.postCkeckAndRedirect ===> ${result.status}`);
        navigate('/auth')
        alert('I refuse the attempt to brew coffee    with a      teapot.')
      }
      else {
        console.log(`result stringifié dans signIn.postCkeckAndRedirect ===> ${JSON.stringify(result)}`);
      }
    }
    catch (error) {
      console.log("LOGIN POST TO API OR RESPONSE FAILED");
      console.log(`ERROR: ===> ${error}`);
    }
  }

  useEffect(() => {
    if (useUserInfos) {
      console.log(`STORED ====>${JSON.stringify(useUserInfos)}`);
    }
  }, [useUserInfos])

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
            Connexion à votre espace personnel
          </Typography>
          {/* --------------------------------------------------- */}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="loginName"
              label="loginName"
              name="loginName"
              autoComplete="loginName"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              {/* <Grid item>
                <Link href="#" variant="body2" >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid> */}
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}

export default SignIn

