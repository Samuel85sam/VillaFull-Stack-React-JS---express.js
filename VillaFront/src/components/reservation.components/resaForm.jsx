import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostForm } from '../../api/CRUD.api';

function ResaForm() {
  const [inputValue, setInputValue] = useState({
    firstName: "Sam",
    lastName: "Dem",
    dateIn: "5/1/2024",
    dateOut: "15/2/2024",
    mail: "samueldemees@gmail.com",
    residentQty: "3",
  });

  // État local pour déterminer si les données sont prêtes à être envoyées
  const [readyToSend, isReadyToSend] = useState(false);

  //gestion form.
  const handleChange = (name, value) => {
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
  };

  //redirection after-POST
  const navigate = useNavigate();
  const redirect = async () => {
    const result = await PostForm()
    try {
      if (result === 200 || 201) {
        navigate("");

        window.location.reload();
      }
    } catch (err) {
      console.error(err);
    }
  }

  //call API
  const route = 'reservation/ADD'


  //call de la fct à la soumission du form. 
  const handleSubmit = (e) => {
    e.preventDefault();

    //1st Validation 
    if (inputValue.firstName === "") {
      alert("veuillez saisir un prenom.");
      return;
    }
    if (inputValue.lastName === "") {
      alert("veuillez saisir un nom.");
      return;
    }
    if (inputValue.dateIn === "") {
      alert("veuillez saisir une date de début.");
      return;
    }
    if (inputValue.dateOut === "") {
      alert("veuillez saisir une date de fin")
      return;
    }
    if (inputValue.mail === "") {
      alert("veuillez saisir une adresse mail")
      return;
    }
    if (inputValue.residentQty === "") {
      alert("veuillez indiquer le nombre d'occupant")
      return;
    }

    isReadyToSend(true); // Définit l'état "readyToSend" sur true pour indiquer que les données sont prêtes à être envoyées au serveur

    //call API
    const route = 'reservation/POST';
    PostForm(inputValue, route);


    //redirection
    redirect()


  };

  //! useEffect(() => {
  //!   // Si "readyToSend" est true, alors appeler PostToApi
  //!   readyToSend === false ? null : postLogin(inputValue);
  //!   console.log("envoi inputValue envoyée à postToApi ↓↓↓");
  //!   console.log(inputValue);
  //! }, [readyToSend]);



  return (
    <>
      <div>Votre Réservation:</div>
      <form>
        <label>prenom:
          <input
            type="text"
            value={inputValue.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            label="firstName"
            name="firstName"
            className='input' />
        </label>
        <br />
        <br />
        <label>nom:
          <input
            type="text"
            value={inputValue.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            label="lastName"
            name="lastName"
            className='input' />
        </label>
        <br />
        <br />
        <label>DateIn:
          <input
            type="text"
            value={inputValue.dateIn}
            onChange={(e) => handleChange("dateIn", e.target.value)}
            label="dateIn"
            name="dateIn"
            className='input' />
        </label>
        <br />
        <br />
        <label>DateOut:
          <input
            type="text"
            value={inputValue.dateOut}
            onChange={(e) => handleChange("dateOut", e.target.value)}
            label="dateOut"
            name="dateOut"
            className='input' />
        </label>
        <br />
        <br />
        <label>mail:
          <input
            type="text"
            value={inputValue.mail}
            onChange={(e) => handleChange("mail", e.target.value)}
            label="mail"
            name="mail"
            className='input' />
        </label>
        <br />
        <br />
        <label>residentQty:
          <input
            type="text"
            value={inputValue.residentQty}
            onChange={(e) => handleChange("residentQty", e.target.value)}
            label="residentQty"
            name="residentQty"
            className='input' />
        </label>
        <br />
        <br />
        <button type='submit' onClick={handleSubmit}>POST</button>
      </form>
    </>
  )
}

export default ResaForm