import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import api from '../service/api'


import './Login.css';

export default function Login({history}){
    const [username, setUsername] = useState('');

   async function logar(e){
        e.preventDefault();

        const resp = await api.post('/devs', {
            username
        })

        const { _id } = resp.data

        history.push(`/dev/${_id}`)

    }

    return (
        <div className="login-container">
            <form onSubmit={logar}>
            <img src={logo} alt="Tindev"/>
            <input placeholder="Informe seu usuário do GitHub"
            value={username}
            onChange={e => setUsername(e.target.value)}
            />
            <button type="submit">Entrar</button>
            </form>
        </div>    
    )
}

