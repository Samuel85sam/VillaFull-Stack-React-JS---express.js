import React, { useEffect, useState } from 'react'
import { getAll } from '../../api/CRUD.api'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const CommentsBook = () => {
  const [comments, setComments] = useState([])
  const route = 'avis/GETALL'


  useEffect(() => {
    getAll(route)
    .then(result => setComments(result.data));
  }, [])


  return (
    <>
      <div>

        <ul>
          {comments.map(comment => (
            <React.Fragment>

            <CssBaseline />
            <Container
            maxWidth="xs"
            >
            <li
              id="zero-state"
              key={comment.id}
              
              >
              <a>
                <p>{comment.firstName}</p>
                <p>{comment.lastName}</p>
                <p>{comment.comment}</p>
                <p>{comment.note}</p>
              </a>
            </li>
                </Container>
                </React.Fragment>

          ))}
        </ul>
      </div>
    </>
  );
};






export default CommentsBook