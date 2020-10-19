import React, { useContext } from 'react'
import {useDatabase, useDatabaseActions} from './database'
import Comment from './Comment'
import { AuthContext } from './auth'

const Comments = () => {  
    const auth = useContext(AuthContext)
    const data = useDatabase('comments')  
    const [status, save, exclude] = useDatabaseActions('comments') 
     
    //--------------------------------------------------------
    if(!data){
      return <p className='aviso-comentario'>Nenhum comentário enviado até o momento.</p>
    }
    //--------------------------------------------------------
    const ids = Object.keys(data)
    
    //--------------------------------------------------------
    if(ids.length === 0){
      return <p className='carregando'>Carregando . . .</p>
    }  
    
    //--------------------------------------------------------
      return ids.map(id => {     
        return (         
          <div className='main-comments' key={id}>
            <Comment key={id} comment={data[id].data} />          
            
            {              
              auth.user && auth.user.uid === data[id].data.user.id &&
              <button onClick={() => exclude(id)} className='botao-excluir'>EXCLUIR</button>            
            }       
          </div>      
        )        
      })
  }

  export default Comments