import React, {useContext, useState} from 'react'
import {AuthContext} from './auth'

////////////////////////////////////////////////////////////////////////
const UserInfo = () => {
    const auth = useContext(AuthContext)  
    const [alternativeDisplayName] = auth.user.email.split('@')
    const {displayName} = auth.user
    const [newDisplayName, setNewDisplayName] = useState(displayName) 
    const [alteraDisplay, setAlteraDisplay] = useState(false)      
    const dn = newDisplayName || alternativeDisplayName
    
    const onChange = (evt) => {
        setNewDisplayName(evt.target.value)
    }

    const save = () => {
        if(newDisplayName !== ''){            
            auth.user.updateProfile({displayName: newDisplayName})
            setAlteraDisplay(!alteraDisplay)    
        }
    }

    if(auth.user === null){
        return null
      }    
    
    return (
        <div className='userinfo'>            
           
            {   alteraDisplay?
                <div className='novo-nome'>
                    <div className='novo-nomeText'>Novo nome: </div>
                    <input type='text' value={newDisplayName} onChange={onChange} className='input-display' maxLength='18'/>
                    <button onClick={save} className='botao-salvar'>SALVAR</button>
                </div>  
                :     
                <div className='nome-display'>  
                    <div>Olá {dn}!</div>   
                    <button onClick={() => setAlteraDisplay(!alteraDisplay)} className='botao-alterarNome'>ALTERAR NOME</button>
                </div>
            }

            <button onClick={auth.signout} className='botao-sair'>SAIR</button>
        </div>
    )
}

export default UserInfo