import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/postlist';
import NewPostForm from './components/NewPostForm';
import { v4 } from 'uuid';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPostList: [
        { name: 'Ben', body: 'Hello', vote: 0, comments: [], id: v4() }
      ]
    };
    this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }

  handleAddingNewPostToList(newPost) {
    let newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList})
  }

  handleVote(index, increment) {
    let newMasterPostList = this.state.masterPostList.slice();
    let post = newMasterPostList[index]
    console.log(post)
    if (increment){
      post.vote++;
    } else {
      post.vote--;
    }
    this.setState({masterPostList: newMasterPostList})
  }

  render() {
    return (
      <div className="App">
        <NewPostForm onNewPostCreation={this.handleAddingNewPostToList}/>
        <PostList postList={this.state.masterPostList} onVote={this.handleVote}/>
      </div>
    );
  }
}

export default App;
