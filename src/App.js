import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/postlist';

class App extends React.Component {
  return (
    <div className="App">
      <PostList postList={this.state.postList}/>
    </div>
  );
}

export default App;
