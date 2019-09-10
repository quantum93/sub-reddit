import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.body}</p>
      <h5>{props.vote}</h5>
      <h5>{props.comment}</h5>
      <hr/>
    </div>
  );
}

Post.PropTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  comment: PropTypes.array.isRequired,
}

export default Post;
