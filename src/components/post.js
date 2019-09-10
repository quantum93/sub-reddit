import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Post(props) {

  function increment() {
    props.onVote(props.index, true)
  }

  function decrement() {
    props.onVote(props.index, false)
  }

  return (
    <div>
      <h3>{props.toPost.name}</h3>
      <p>{props.toPost.body}</p>
      <h5>{props.toPost.vote}</h5>
      <button onClick={increment}>Up vote</button>
      <button onClick={decrement}>Down vote</button>
      <Link to={{
        pathname: '/comments',
        state: { post: props.toPost }
      }}>Comments</Link>
      <hr/>
    </div>
  );
}

Post.propTypes = {
  toPost: PropTypes.object.isRequired,
  onVote: PropTypes.func.isRequired
}

export default Post;
