import React from 'react';
import {Link} from 'react-router-dom';
import NewCommentForm from './NewCommentForm';

function Comments(props) {
    console.log("comments props", props);
    if (props.post)  {
      const post = props.post
      return(
        <div>
        <h1>Comments</h1>
        <Link to='/'>Home</Link>
        <NewCommentForm
          onNewCommentCreation={props.onNewCommentCreation}
          postIndex={props.postIndex}/>
        <hr />
        {post.comments.map((comment, i) =>
          <div>
          <p>{comment.name}</p>
          <p>{comment.body}</p>
          <hr />
          </div>
        )}
        </div>
      );
    } else {
      return(
        <Link to='/'>Home</Link>
      );
    }
  }

export default Comments;
