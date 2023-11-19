import React from 'react'

const CommentDetail = (id) => {
  const [comments, setComments] = useState([])
  const route = 'avis/GETONE'
  useEffect(() => {
    getOne(route, id)
      .then(result => setComments(result.data));

  }, [])


  return (
    <div>
      <h2>Un commentaire:</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <p>{comment.firstName}</p>
            <p>{comment.lastName}</p>
            <p>{comment.comment}</p>
            <p>{comment.note}</p>
           </li>
        ))}
        <div>
          <button>DELETE</button>
          <button>EDIT</button>
        </div>
      </ul>
    </div>
  )

}

export default CommentDetail