import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostForm } from '../../api/CRUD.api';

function ResaForm() {



  const [inputValue, setInputValue] = useState({
    firstName: "Sam",
    lastName: "Dem",
    dateIn: "5/1/2024",
    dateOut: "15/2/2024",
    mail: "samueldemees@gmail.com",
    residenQty: "3",

  });

  const handleChange = (name, value) => {
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
  };

  const navigate = useNavigate();

  const resaRegistered = async () => {
    const result = await PostForm();
    try {
      if (result === 200||201) {
        navigate("./agenda");
        console.log("===> redirection agenda");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.firstName === "") {
      alert("veuillez saisir un prenom.");
      return;
    }
    if (inputValue.lastName === "") {
      alert("veuillez saisir un nom.");
      return;
    }
    if (inputValue.dateIn === "") {
      alert("veuillez saisir un comentaire.");
      return;
    }
    if (inputValue.dateOut === "") {
      alert("veuillez saisir une note")
      return;
    }
    if (inputValue.mail === "") {
      alert("veuillez saisir une note")
      return;
    }
    if (inputValue.residentQty === "") {
      alert("veuillez saisir une note")
      return;
    }

    const route = 'reservation/ADD'
    
    PostForm(inputValue, route)

    resaRegistered()

  };

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
        <button type='submit' onClick={handleSubmit}>POST</button>
      </form>
    </>
  )
}

export default ResaForm