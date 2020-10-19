import React, {useContext, useState} from 'react'
import { AuthContext } from './auth'
import { Link } from 'react-router-dom'

const SignInUser = () => {
    const auth = useContext(AuthContext)
    const [form, setForm] = useState({email: '', passwd: ''})

    const onChange = (campo) => (evt) => {
        setForm({...form, [campo]: evt.target.value})
    }

    if(auth.user !== null){
        return null
    }

    return (
        <div className='tela-login'>
            <Link to='/' className='link'>
                <div className='voltar'>Voltar</div>
            </Link>
            <h3>Entrar na sua conta:</h3>        

            <input type='text' placeholder='Seu e-mail' value={form.email} onChange={onChange('email')} className='input-email'/>
            <input type='password' placeholder='Sua senha' value={form.passwd} onChange={onChange('passwd')} className='input-senha'/>
            {/*
                auth.signInUser.signInUserState.error !== ''&&            
                <p>Email ou senha inválidos</p>                     
            */}
            
            <Link to='/'>
                <button onClick={() => {auth.signInUser.signInUser(form.email, form.passwd)}} 
                        className='botao-confirmarLogin'>
                        {console.log(auth.user)}
                        ENTRAR
                </button>
            </Link>         
            
        </div>
    )
}

export default SignInUser