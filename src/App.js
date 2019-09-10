import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/postlist';
import NewPostForm from './components/NewPostForm';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPostList: []
    };
    this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
  }

  handleAddingNewPostToList(newPost) {
    var newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList})
  }

  render() {
    return (
      <div className="App">
        <NewPostForm onNewPostCreation={this.handleAddingNewPostToList}/>
        <PostList postList={this.state.masterPostList}/>
      </div>
    );
  }
}

export default App;
