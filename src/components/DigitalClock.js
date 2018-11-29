import React, { Component } from 'react'

export default class DigitalClock extends Component {
    constructor(props){
        super(props);
        this.state = {
            date:new Date()
        }
    }
    render() {
        return (
            <div className="text-center">
                <p className="text-center">React 生命周期函数</p>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
    componentDidMount(){
        //react生命周期函数: 初始化
        this.timer = setInterval(()=>{
            this.setState({
                date:new Date()
            });
        },1e3);
    }
    componentDidUpdate(currentProps,currentState){
        //react生命周期函数: 更新 
        //console.log(currentProps,currentState);
    }
    componentWillUnmount(){
        //react生命周期函数: 销毁
        clearInterval(this.timer);
    }
}
