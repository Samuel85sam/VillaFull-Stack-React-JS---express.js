import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";


import AuthService from "../../services/auth.service";




const Login = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const required = (value) => {
    if (!value) {
      return (
        <div className="invalid-feedback d-block">
          This field is required!
        </div>
      );
    }
  };
  //---------------------------------------------
  
  //Ces fonctions mettent à jour les états locaux en fonction des changements dans les champs du nom d'utilisateur et du mot de passe.

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  //----------------------------------------------


  // Cette fonction est appelée lorsqu'un utilisateur tente de se connecter. Elle commence par réinitialiser le message d'erreur, activer le chargement, puis effectuer une validation du formulaire.


  const handleLogin = (e) => {
    e.preventDefault();
    // ↑↑↑ Cette ligne empêche le comportement par défaut du formulaire, c'est-à-dire le rechargement de la page lors de la soumission du formulaire. Cela permet de gérer la soumission du formulaire de manière asynchrone à l'aide de JavaScript.
    setMessage("");
    setLoading(true);
    //↑↑↑Ces lignes réinitialisent le message d'erreur à une chaîne vide et définissent l'état de chargement sur vrai. Cela prépare l'interface utilisateur pour une nouvelle tentative de connexion en effaçant les messages d'erreur précédents et en montrant un indicateur de chargement.

    form.current.validateAll();
    //↑↑↑ effectue la validation de tous les champs du formulaire. Les messages d'erreur sont affichés à l'utilisateur si la validation échoue.
    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          navigate("/profile");
          window.location.reload();
        },

        //↓↓↓ En cas d'échec, elle gère les erreurs en extrayant le message d'erreur à partir de la réponse HTTP, ou en utilisant un message générique en cas d'erreur non liée à la réponse HTTP. Ensuite, elle met à jour l'état de chargement à faux et affiche le message d'erreur.
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);// ← Si la validation échoue, cela signifie que des erreurs de validation sont présentes. L'état de chargement est simplement mis à faux, car l'utilisateur ne sera pas redirigé dans ce cas.
    }
  };
  //----------------------------------------------
   return (
   <>
          <h1>Login / Register</h1>
          <div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form onSubmit={handleLogin} ref={form}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={onChangeUsername}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChangePassword}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-block" disabled={loading}>
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
        </div>
      </div>

          </>
   )
};

export default Login;
