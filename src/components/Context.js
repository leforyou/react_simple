import React, { Component } from 'react';
import ThemeContext from '../themeContext';
import ThemeBar from './ThemeBar';


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
        this.state = {
            theme:'light'
        }
    }
    render() {
        return (
            <ThemeContext.Provider value={themes[this.state.theme]}>
                <div className="text-center">
                    <p className="text-center">React Context API的使用</p>
                    <div className="text-center btn-group">
                        <button type="button" className="btn btn-default" onClick={this.changeTheme.bind(this,'light')}>浅色主题</button>
                        <button type="button" className="btn btn-primary" onClick={this.changeTheme.bind(this,'dark')}>深色主题</button>
                    </div>
                    <ThemeBar/>
                </div>
            </ThemeContext.Provider>
        )
    }
    changeTheme(theme){
        /*console.log(theme);
        this.setState({
            theme:theme
        });*/
        this.setState({
            theme
        });
    }
}
