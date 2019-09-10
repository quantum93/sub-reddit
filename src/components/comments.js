import React from 'react';
import {Link} from 'react-router-dom';

class Comments extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    console.log(this.props);
    if (this.props.location.state){
      const { post } = this.props.location.state
      // let post = { name: 'Ben', body: 'Hello', vote: 0, comments: [ {name:'Tae', body:'Static first'}, {name:'Tae', body:'Dynamic second'}]};
      return(
        <div>
        <h1>Comments</h1>
        <Link to='/'>Home</Link>
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
}

export default Comments;
