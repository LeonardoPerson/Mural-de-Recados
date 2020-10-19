import React, {useContext, useState} from 'react'
import { AuthContext } from './auth'
import { Link } from 'react-router-dom'

const CreateUser = () => {
    const auth = useContext(AuthContext)
    const [form, setForm] = useState({email: '', passwd: ''})

    const onChange = (campo) => (evt) => {
        setForm({
            ...form,
            [campo]: evt.target.value
        })
    }

    if(auth.user !== null){
        return null
    }

    return (
        <div className='tela-criarConta'>
            <Link to='/' className='link'>
                <div className='voltar'>Voltar</div>
            </Link>
            <h3>Criar nova conta:</h3>
            {/*
                auth.createUser.createUseState.error !== '' &&
                <p>{auth.createUser.createUseState.error}</p>
            */}

            <input type='text' placeholder='Seu e-mail' value={form.email} onChange={onChange('email')} className='input-email-criar'/>
            <input type='password' placeholder='Sua senha' value={form.passwd} onChange={onChange('passwd')} className='input-senha-criar'/>
            <Link to='/'>
                <button onClick={() => {
                    auth.createUser.createUser(form.email, form.passwd)
                }} className='botao-criar-conta'>CRIAR CONTA</button>
            </Link>
        </div>
    )
}

export default CreateUser