import React from 'react'
import Time from './Time'

const Comment = ({comment}) => {
 
    return (
      <div className='main-comment'>      
        <div className='user-name'>{comment.user.name}:</div> <br/> 
        {comment.content} <br/>
        <div className='data-hora'><Time timestamp={comment.createdAt} /></div>
        
      </div>
    )
  }

  export default Comment

  