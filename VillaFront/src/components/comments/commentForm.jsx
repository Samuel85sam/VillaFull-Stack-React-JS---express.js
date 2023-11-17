import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { PostForm } from '../../api/CRUD.api';

function CommentForm() {
  const [inputValue, setInputValue] = useState({
    firstName: "Sam",
    lastName: "Dem",
    comment: "J'ai adoré",
    note: "5",
  });

  //   // État local pour déterminer si les données sont prêtes à être envoyées
  //!const [readyToSend, isReadyToSend] = useState(false);

// Fonction de gestion des changements dans les champs du formulaire
  const handleChange = (name, value) => {
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
  };

  //fonction de redirrection après soumission du formulaire
  const navigate = useNavigate();
  const commentPosted = async () => {
    const result = await PostForm();
    try {
      if (result === 200||201) {
        navigate("/comments");
        console.log("===> redirection comments");
      }
    } catch (err) {
      console.error(err);
    }
  };
  
 // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)

    
    //Validations et  contrôles de saisie pour garantir que les données sont correctes avant l'envoi
    if (inputValue.firstName === "") {
      alert("veuillez saisir un prenom.");
      return;
    }
    if (inputValue.lastName === "") {
      alert("veuillez saisir un nom.");
      return;
    }
    if (inputValue.comment === "") {
      alert("veuillez saisir un comentaire.");
      return;
    }
    if (inputValue.note === "") {
      alert("veuillez saisir une note")
      return;
    }
    //!isReadyToSend(true); // Définit l'état "readyToSend" sur true pour indiquer que les données sont prêtes à être envoyées au serveur
    
    
    const route = 'avis/POST'
    
    PostForm(inputValue, route)

    commentPosted()

  };

  //!Si "readyToSend" est true, alors appeler PostForm depuis CRUD.api
  //! useEffect(() => {
  //!   readyToSend === false ? null : PostForm(inputValue);
  //!   console.log(`inputValue ===> ${inputValue}`)
  //! }, [readyToSend]);




  return (
    <>

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
        <label>commentaire:
          <input
            type="text"
            value={inputValue.comment}
            onChange={(e) => handleChange("comment", e.target.value)}
            label="comment"
            name="comment"
            className='input' />
        </label>
        <br />
        <br />
        <label>note:
          <input
            type="text"
            value={inputValue.note}
            onChange={(e) => handleChange("note", e.target.value)}
            label="note"
            name="note"
            className='input' />
        </label>
        <button type='submit' onClick={handleSubmit}>POST</button>
      </form>
    </>

  )
};


export default CommentForm