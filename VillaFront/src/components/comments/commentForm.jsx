import React from 'react'
import { useState } from 'react'
import { PostComment } from '../api/comments.api';
import { useNavigate } from 'react-router-dom';

function CommentForm() {
  const [inputValue, setInputValue] = useState({
    firstName: "Sam",
    lastName: "Dem",
    comment: "J'ai adoré",
    note: "5"

  });
//   // État local pour déterminer si les données sont prêtes à être envoyées
  const [readyToSend, isReadyToSend] = useState(false);

  const handleChange = (data, value) => {
    setInputValue((prevState) => ({ ...prevState, [data]: value }));
  };
  const navigate = useNavigate();
  const commentPosted = async () => {
    const result = await PostComment();
    try {
      if (result === 200) {
        navigate("/comments");
        console.log("===> redirection comments");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // useEffect(() => {
  //   //Si "readyToSend" est true, alors appeler PostToApi
  //   readyToSend === false ? null : PostComment(inputValue);
  //   console.log("envoi inputValue envoyée à PostComment ↓↓↓");
  //   console.log(inputValue);
  // }, [readyToSend]);
//   // Fonction appelée lors de la soumission du formulaire
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
      alert("veuillez saisir un avis.");
      return;
    }
    if (inputValue.note === "") {
      alert("veuillez saisir une note")
      return;
    }
    isReadyToSend(true); // Définit l'état "readyToSend" sur true pour indiquer que les données sont prêtes à être envoyées au serveur

    PostComment(inputValue)

    commentPosted()

 };




  return (
    <>
   
      <form>
        <label>prenom:
          <input type="text" value={inputValue.firstName} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>nom:
          <input type="text" value={inputValue.lastName} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>Votre expérience:
          <input type="text" value={inputValue.comment} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>note:
          <input type="text" value={inputValue.note} onChange={handleChange} />
        </label>
        <button type='submit' onClick={handleSubmit}>POST</button>
      </form>
    </>

  )
};


export default CommentForm