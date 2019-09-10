import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {

  function increment() {
    console.log('Hey')
    props.toPost.vote++;
    console.log(props.toPost.vote);

  }

  function decrement() {
    if (props.toPost.vote > 0) {
      props.toPost.vote--;
    }
  }

  return (
    <div>
      <h3>{props.toPost.name}</h3>
      <p>{props.toPost.body}</p>
      <h5>{props.toPost.vote}</h5>
      <h5>{props.toPost.comment}</h5>
      <button onClick={increment}>Up vote</button>
      <button onClick={decrement}>Down vote</button>
      <hr/>
    </div>
  );
}

Post.propTypes = {
  toPost: PropTypes.object.isRequired
}

export default Post;
