import { useState,React } from 'react';
import CommentsBook from '../components/comments.components/commentsBook'
import CommentForm from '../components/comments.components/commentForm'
import Button from '@mui/material/Button';

function Comments() {
  const [writeComment, setWriteComment] = useState(true);
  const handleAction = function () {
    setWriteComment(!writeComment);
  };

  return (
    <div className='Comments'>
      <div id="sidebar">
        <Button 
        variant="contained"
        onClick={handleAction}
        color = 'primary' 
        fullWidth= {true}
        size = 'large'>
          {writeComment ? "Laisser un Commentaire" : "Livre D'Or"}
        </Button>
        {writeComment ? <CommentsBook /> : <CommentForm />}
      </div>
    </div>

  )
}

export default Comments

