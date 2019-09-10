import React from 'react';
import Post from 'post';

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

export default PostList;
