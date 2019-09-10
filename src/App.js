import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/postlist';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPostList: [
        {name: 'Ben', body: 'Hello world one!', vote: 0, comment: []},
        {name: 'Tae', body: 'Hello world two!', vote: 0, comment: []},
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <PostList postList={this.state.masterPostList}/>
      </div>
    );
  }
}

export default App;
