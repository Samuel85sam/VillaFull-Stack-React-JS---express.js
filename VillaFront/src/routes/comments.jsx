import { useState,React } from 'react';
import CommentsBook from '../components/comments.components/commentsBook'
import CommentForm from '../components/comments.components/commentForm'

function Comments() {
  const [writeComment, setWriteComment] = useState(true);
  const handleAction = function () {
    setWriteComment(!writeComment);
  };

  return (
    <>
      <h1>Livre d'or</h1>
      <div id="sidebar">
        <button onClick={handleAction}>
          {writeComment ? "Laisser un Commentaire" : "Livre D'Or"}
        </button>
        {writeComment ? <CommentsBook /> : <CommentForm />}
      </div>
    </>

  )
}

export default Comments

