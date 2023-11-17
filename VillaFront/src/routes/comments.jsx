import React from 'react'
import CommentsBook from '../components/comments/commentsBook'
import CommentForm from '../components/comments/commentForm'
import { useState } from 'react';

function Comments() {
  const [writeComment, setWriteComment] = useState(true);
  const handleAction = function () {
    setWriteComment(!writeComment);
  };

  return (
    <>    <h1>Livre d'or</h1>
      <div id="sidebar">
        <button onClick={handleAction}>
          {writeComment ? "Laisser un Commentaire" : "Livre D'Or"}
        </button>
        {writeComment ? <CommentsBook /> : <CommentForm />}
      </div>
      <div id="root"
      // className={
      //     navigation.state === "loading" ? "loading" : ""
      // }
      >
      </div>
    </>

  )
}

export default Comments

/* <nav >
        <NavLink to="./">livre d'or</NavLink>
        <NavLink to="./commentForm">votre avis</NavLink>
      </nav> */