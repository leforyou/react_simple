import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';

import NameCard from './components/NameCard';//人物名片
import LikesButton from './components/LikesButton';//点赞
import DigitalClock from './components/DigitalClock';//时钟
import CommentBox from './components/CommentBox';//表单
import CommentList from './components/CommentList';//评论列表

import Context from './components/Context';//评论列表

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      comments: ['this is my first reply!']
    }
    this.addComment = this.addComment.bind(this);
  }
  render() {
    let tags = ['恐龙','足球小子'];
    const { comments } = this.state;
    return (
      <div className="App">

        <NameCard name="King" number={13800138000+8} isHuman tags={tags}/>

        

        <LikesButton/>

        <hr/>

        <DigitalClock/>

        <hr/>

        <CommentBox commentsLength={comments.length} onAddComment={this.addComment}/>

        <hr/>

        <CommentList comments={comments}/>

        <hr/>

        <Context/>

      </div>
    );
  }
  addComment(comment){
    this.setState({
      comments:[...this.state.comments,comment]
    })
  }
}

export default App;
