import React from 'react';
import Post from './post';
import PropTypes from 'prop-types';

function PostList(props) {
  return (
    <div>
    <hr/>
    {props.postList.map((post, i) =>
      <Post toPost={post}
      index={i}
      key={post.id}
      onVote={props.onVote}
      />
    )}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.array.isRequired,
  onVote: PropTypes.func.isRequired
}

export default PostList;
