import React from 'react'

const CommentList = ({comments}) => {
    return (
        <div  style={{'width':'500px','margin':'auto'}}>
            <label>评论列表</label>
            <ul className="list-group">
                {
                    comments.map((item,index) => {
                        return <li key={index} className="list-group-item">{item}</li>
                    })
                }
            </ul>
        </div>
    )
};
export default CommentList;

/*
export default class CommentList extends Component {
  render() {
    return (
      <div className="">
        
      </div>
    )
  }
}
*/