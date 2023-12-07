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


//  function Copyright(props: any) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }


const defaultTheme = createTheme();

const SignIn = () => {
  const addUserInfos = useAuthStore((state) => state.addUserData);
  const useUserInfos = useAuthStore((state) => state.userData)
  const navigate = useNavigate();
  const handleSubmit =  (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
   postCheckAndRedirect(data)
  };

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

  const postCheckAndRedirect = async (inputValue) => {
       const formValues = inputValue
       const route = 'auth/LOGIN';
       const result = await PostForm(formValues, route);
       const userId = result.data.user.id;
    if (result.status === 200 || 201) {
        loadUserInfos(userId);
    }
    else {
        navigate('index')
        alert("LOGIN FAILED ");
        console.log("LOGIN FAILED ==> reload login page ");
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
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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


// import { React, useEffect, useState } from "react";
// import { PostForm, getOneById } from "../../api/CRUD.api";
// import { useAuthStore } from "../../store/authStore";
// import { useNavigate } from "react-router-dom";




// const SignIn = () => {
//     const [inputValue, setInputValue] = useState({
//         loginName: "login_test",
//         password: "login_test",
//     });

//     const navigate = useNavigate();

//     const handleChange = (name, value) => {
//         setInputValue((prevState) => ({ ...prevState, [name]: value }));
//     };
 
//     const addUserInfos = useAuthStore((state) => state.addUserData);
//     //*----------------------------------------------------
//     //*verif storage ok ↓↓↓*/
//     const useUserInfos = useAuthStore((state) => state.userData)
//     //*----------------------------------------------------
//     const loadUserInfos = async (userId) => {
//         try {
//             const route = 'auth/GETONEbyID/';
//             const id = userId;
//             const response = await getOneById(id, route);
//             const userInfos = response.data
//             if (response.status === 200) {
//                 addUserInfos(userInfos)
//                 navigate('/index');
//             }
//         } catch (error) {
//             console.error('Erreur lors de la récupération des infos utilisateur:', error);
//         }
//     };
//     const postCheckAndRedirect = async (inputValue) => {
//         const formValues = inputValue
//         const route = 'auth/LOGIN';
//         const result = await PostForm(formValues, route);
//         const userId = result.data.user.id;
//         if (result.status === 200 || 201) {
//             loadUserInfos(userId);
//         }
//         else {
//             navigate('index')
//             alert("LOGIN FAILED ");
//             console.log("LOGIN FAILED ==> reload login page ");
//         }
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (inputValue.loginName === "") {
//             alert("veuillez saisir un nom.");
//             return;
//         }
//         if (inputValue.password === "") {
//             alert("veuillez saisir un password.");
//             return;
//         }

//         postCheckAndRedirect(inputValue)
//     }
//     //*----------------------------------------------------
//     //*verif storage ok ↓↓↓*/
//     // 
//     useEffect(() => {
//         if (useUserInfos) {
//             console.log(`STORED ====>${JSON.stringify(useUserInfos)}`);
//         }
//     }, [useUserInfos])
//     //*----------------------------------------------------  
//     return (
//         <>
//             <div className="LoginDiv">
//                 <form>
//                     <label htmlFor="Login">Login :</label>
//                     <input
//                         label="loginName"
//                         type="text"
//                         name="loginName"
//                         className="input"
//                         value={inputValue.loginName}
//                         onChange={(e) => handleChange("loginName", e.target.value)}
//                     />
//                     <label htmlFor="noPasswordm">Password :</label>
//                     <input
//                         label="password"
//                         type="password"
//                         name="password"
//                         className="input"
//                         value={inputValue.password}
//                         onChange={(e) => handleChange("password", e.target.value)}
//                     />
//                     <button type="submit" onClick={handleSubmit}>
//                         → Connexion →
//                     </button>
//                 </form>
//             </div>
//         </>
//     );
// };

// export default SignIn