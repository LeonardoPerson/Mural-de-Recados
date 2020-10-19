import React, {useState, useContext} from 'react'
import {useDatabaseActions} from './database'
import firebase from './firebase'
import { AuthContext } from './auth'

const NewComment = () => {
    const [, save] = useDatabaseActions('comments')
    const [comment, setComment] = useState('')
    const auth = useContext(AuthContext)
    //------------------------------------------------------------------
    if(auth.user === null){
      return null
    }

    const {displayName} = auth.user
    const [alternativeDisplayName] = auth.user.email.split('@')
    //------------------------------------------------------------------
    const createComment = () => {
      if(comment !== ''){
        save({
          content: comment,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
              user: {
                id: auth.user.uid,
                name: displayName || alternativeDisplayName
              }
            })
        setComment('')        
      }
    }
    //------------------------------------------------------------------
    return(
      <div className='main-newcomment'>
        <textarea type='text' className='caixa-comentario' rows='10' data-ls-module="charCounter" maxlength='150' value={comment} onChange={evt => setComment(evt.target.value)}></textarea>
        <br/>
        <button onClick={createComment} className='botao-comentar'>COMENTAR </button>
      </div>
    )
  }

  export default NewComment