import React, { useEffect, useState } from 'react'
import { getAll } from '../../api/CRUD.api'

const CommentsBook = () => {
  const [comments, setComments] = useState([])
  const route = 'avis/GETALL'


  useEffect(() => {
    getAll(route)
    .then(result => setComments(result.data));
    //console.log(result))

  }, [comments])


  return (
    <>
      <div>

        <ul>
          {comments.map(comment => (
            <li
              id="zero-state"
              key={comment.id}>
              <a>
                <p>{comment.firstName}</p>
                <p>{comment.lastName}</p>
                <p>{comment.comment}</p>
                <p>{comment.note}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};






export default CommentsBook