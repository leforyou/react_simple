import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';

import NameCard from './components/NameCard';


import LikesButton from './components/LikesButton';
class App extends Component {
  render() {
    let tags = ['恐龙','足球小子'];
    return (
      <div className="App">

        <NameCard name="King" number={13800138000+8} isHuman tags={tags}/>

        <br/>

        <LikesButton/>

        <hr/>

      </div>
    );
  }
}

export default App;
