import React, { Component } from 'react'


//context是React V16.3版本才有的，它是方便同级的兄弟或父父级组件的之间传递参数
const themes = {
    light:{
        className:'btn btn-primary',
        bgColor:'#eee',
        color:'#000'
    },
    dark:{
        className:'btn btn-light',
        bgColor:'#222',
        color:'#fff'
    }
}

export default class Context extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
        <div className="">
            <div className="text-center">
                <a href="javascript:" className="btn btn-default">浅色主题</a>
                <a href="javascript:" className="btn btn-primary">深色主题</a>
            </div>
        </div>
        )
    }
}
