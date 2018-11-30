import React, { Component } from 'react'
import ThemeContext from '../themeContext'

/*
const ThemeBar = ()=>{
    return(
        <ThemeContext.Consumer>
            {
                (theme) => {
                    //console.log(theme);
                    return(
                        <div className="alert" style={{"backgroundColor":theme.bgColor,"color":theme.color}}>
                            样式区域
                            <br/>
                            <button className={theme.className}>样式按钮</button>
                        </div>
                    )
                }
            }
        </ThemeContext.Consumer>
    )
}
export default ThemeBar;
*/


export default class ThemeBar extends Component {
  render() {
    return (
        <ThemeContext.Consumer>
            {
                (theme) => {
                    //console.log(theme);
                    return(
                        <div className="alert" style={{"backgroundColor":theme.bgColor,"color":theme.color}}>
                            样式区域
                            <br/>
                            <button className={theme.className}>样式按钮</button>
                        </div>
                    )
                }
            }
        </ThemeContext.Consumer>
    )
  }
}
