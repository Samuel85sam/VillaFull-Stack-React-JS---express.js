import { React, useState } from 'react';
import { PostForm } from '../../api/CRUD.api';
import { useNavigate } from 'react-router-dom';

function ResaForm() {
  const [inputValue, setInputValue] = useState({
    firstName: "Sam",
    lastName: "Dem",
    dateIn: "5/1/2024",
    dateOut: "15/2/2024",
    mail: "samueldemees@gmail.com",
    residentQty: "3",
  });
 
    const navigate = useNavigate 
  //gestion form.
  const handleChange = (name, value) => {
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
  };

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

    //call API
    const route = 'reservation/POST';
    PostForm(inputValue, route);
    navigate('index')

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
        <br />
        <br />
        <button type='submit' onClick={handleSubmit}>POST</button>
      </form>
    </>
  )
}

export default ResaForm