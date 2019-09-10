import React from 'react';
import Post from 'post';
import PropTypes from 'prop-types' ;

function PostList(props) {
  return (
    <div>
    <hr/>
    {props.postList.map((post) =>
      <Post names={post.names}
        body={post.body}
        vote={post.vote}
        comment={post.comment}
        key={post.id} />
    )}
    </div>
  );
}

export default PostList;
