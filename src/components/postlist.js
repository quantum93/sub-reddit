import React from 'react';
import Post from './post';
import PropTypes from 'prop-types';

function PostList(props) {
  return (
    <div>
    <hr/>
    {props.postList.map((post) =>
      <Post name={post.name}
        body={post.body}
        vote={post.vote}
        comment={post.comment}
        key={post.id} />
    )}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.array.isRequired,
}

export default PostList;
