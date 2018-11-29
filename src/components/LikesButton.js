import React, { Component } from 'react'

export default class LikesButton extends Component {
  constructor(props){
      super(props);
      this.state = {
          likes:0
      }
      this.increaseLikes = this.increaseLikes.bind(this);//解决this指向的办法一
  }
  render() {
    return (
      <div className="likes-bottom-component text-center">
        <p className="btn btn-info" onClick={this.increaseLikes}>
           👍 {this.state.likes} {/* 百度一下：点赞手指怎么打出来。使用这个点赞，控制台输出会警告，请忽略警告！ */}
        </p>

        {/* <p className="btn btn-info" onClick={()=>{this.increaseLikes()}}>
           👍 {this.state.likes} {解决this指向的办法二 }
        </p>*/}

      </div>
    )
  }
  increaseLikes(){
      //点赞 console.log(this);
      this.setState({
        likes: ++this.state.likes
      })
  }
  /*解决this指向的办法三
  increaseLikes = ()=>{
      console.log(this)
  }*/
}
