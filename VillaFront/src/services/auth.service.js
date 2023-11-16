import axios from "axios";

const API_URL = "http://localhost:3002/api/auth/";
const register = (username, email, password) => {
  return axios.post( API_URL+ "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

// Cette fonction supprime les détails de l'utilisateur stockés localement et envoie une requête POST à l'URL de déconnexion.
const logout = () => {
  localStorage.removeItem("user");
  return axios.post(API_URL + "signout").then((response) => {
    return response.data;
  });
};

//renvoie les détails de l'utilisateur stockés localement, s'il y en a.
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService;
