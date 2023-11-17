import React, { useEffect, useState } from 'react'
import { getAll } from '../../api/CRUD.api'

const CommentsBook = () => {
  const [comments, setComments] = useState([])
  const route = 'avis/GETALL'
  
  useEffect(() => {
    getAll(route)
      .then(result => setComments(result.data));

  }, [])
  
 
  return (
    <div>
      <h2>Tous Les Commentaires:</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <p>{comment.firstName}</p>
            <p>{comment.lastName}</p>
            <p>{comment.comment}</p>
            <p>{comment.note}</p>
           </li>
        ))}
      </ul>
    </div>
  );
};






export default CommentsBook