import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/postlist';
import NewPostForm from './components/NewPostForm';
import { v4 } from 'uuid';
import {Switch, Route} from 'react-router-dom';
import Comments from './components/comments';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPostList: [
        { name: 'Ben', body: 'Hello', vote: 0, comments: [ {name:'Tae', body:'Static first'}, {name:'Tae', body:'Dynamic second'}], id: v4() }
      ],
      commentIndex: null
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

  handleCommentsLinkClick(index) {
    this.setState({commentIndex: index})
  }

  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path='/' render={() =>
          <div>
            <NewPostForm onNewPostCreation={this.handleAddingNewPostToList}/>
            <PostList postList={this.state.masterPostList} onVote={this.handleVote}/>
          </div>
        }/>
        <Route path='/comments' component={Comments} />
      </Switch>
      </div>
    );
  }
}

export default App;
