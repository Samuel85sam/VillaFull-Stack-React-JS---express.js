
import { React, useState } from "react";
import { PostForm } from '../../api/CRUD.api';
import { useNavigate } from 'react-router-dom';

function CommentForm() {
  const [inputValue, setInputValue] = useState({
    firstName: "Sam",
    lastName: "Dem",
    comment: "J'ai adoré",
    note: "5",
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
    if (inputValue.comment === "") {
      alert("veuillez saisir un comentaire.");
      return;
    }
    if (inputValue.note === "") {
      alert("veuillez saisir une note")
      return;
    };

    isReadyToSend(true); // Définit l'état "readyToSend" sur true pour indiquer que les données sont prêtes à être envoyées au serveur

    //call API
    const route = 'avis/POST';
    PostForm(inputValue, route);

    //redirection
    redirect()
  };

  // !useEffect(() => {
  // !  // Si "readyToSend" est true, alors appelez PostToApi
  // !  readyToSend === false ? null : PostToApi(inputValue);
  // !}, [readyToSend]);

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
        <br />
        <br />
        <button type='submit' onClick={handleSubmit}>POST</button>
      </form>
    </>
  )
};

export default CommentForm