import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';

import NameCard from './components/NameCard';//人物名片
import LikesButton from './components/LikesButton';//点赞
import DigitalClock from './components/DigitalClock';//时钟
import CommentBox from './components/CommentBox';//

class App extends Component {
  render() {
    let tags = ['恐龙','足球小子'];
    return (
      <div className="App">

        <NameCard name="King" number={13800138000+8} isHuman tags={tags}/>

        <br/>

        <LikesButton/>

        <hr/>

        <DigitalClock/>

        <hr/>

        <CommentBox/>

      </div>
    );
  }
}

export default App;
