import React, { Component } from 'react'

//非受控组件的写法
export default class CommentBox extends Component {
    constructor(props){
        super(props);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
        <div style={{'width':'500px','margin':'auto'}}>
            <p className="text-center">React 受控组件与非受控组件</p>
            <form className="">
                <div className="form-group">
                    <label>Form留言内容</label>
                    <input className="form-control" type="text" placeholder="请输入内容"  ref={(textInput)=>{this.textInput = textInput}}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>留言</button>
            </form>
        </div>
        )
    }
    handleSubmit(event){
        alert(this.textInput.value);
        event.preventDefault();
    }
}





/**
 * 受控组件--输入框多时，代码就会变得繁锁。
export default class CommentBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:''
        }
        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
        <div style={{'width':'500px','margin':'auto'}}>
            <form className="">
                <div className="form-group">
                    <label>Form留言内容</label>
                    <input className="form-control" type="text" placeholder="请输入内容" value={this.state.value} onChange={this.handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>留言</button>
            </form>
        </div>
        )
    }
    handleChange(event){
        //受控组件，由onchange事件来改变，与vue的双向数据绑定相比复杂
        this.setState({
            value:event.target.value
        });
    }
    handleSubmit(event){
        alert(this.state.value);
        event.preventDefault();
    }
}
 */