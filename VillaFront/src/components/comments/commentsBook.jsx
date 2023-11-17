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
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};






export default CommentsBook