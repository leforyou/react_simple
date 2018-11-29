import React, { Component } from 'react'

export default class NameCard extends Component {
  render() {
    const {name, number,isHuman , tags} = this.props;
    return (
      <div className="alert alert-success">
        <p className="text-center">React 属性</p>
        <h1 className="alert-heading">{name}</h1>
        <ul>
            <li>电话：{number}</li>
            <li>
                {
                    isHuman?'人类':'外星生物'
                }
            </li>
            <p>
                {
                    tags.map((item,index)=>{
                        return <span className="badge" key={index} style={{'margin':'5px'}}>{item}</span>
                    })
                }
            </p>
        </ul>
      </div>
    )
  }
}



//函数式的写法：不支持修改name,number等props的值
/*const NameCard = (props) => {
    const {name, number,isHuman , tags} = props;
    return (
      <div className="alert alert-success">
        <h1 className="alert-heading">{name}</h1>
        <ul>
            <li>电话：{number}</li>
            <li>
                {
                    isHuman?'人类':'外星生物'
                }
            </li>
            <p>
                {
                    tags.map((item,index)=>{
                        return <span className="badge badge-pill badge-primary" key={index}>{item}</span>
                    })
                }
            </p>
        </ul>
      </div>
    )
};
export default NameCard;
*/



/*
知识点1：纯函数
function (a,b){
    return a + b;
}

知识点2：非纯函数
function (a,b){
    a = a + b;
    return a;
}

*/