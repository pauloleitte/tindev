import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import './Main.css';
import api from '../service/api';
import {Link} from 'react-router-dom'

export default function Main({match}){

const [users, setUsers] = useState([]);

useEffect(() => {
    async function loadUsers(){
        const response = await api.get('/devs',{
            headers: {user: match.params.id}
        })

        setUsers(response.data)
    }
    loadUsers();
}, [match.params.id])

async function onLike(id){
    await api.post(`devs/${id}/likes`, null, {
        headers: {
            user: match.params.id
        }
    })
    setUsers(users.filter(user => user._id !== id))
}

async function onDislike(id){
    await api.post(`devs/${id}/dislikes`, null, {
        headers: {
            user: match.params.id
        }
    })
    setUsers(users.filter(user => user._id !== id))
}
    return (
        <div className="main-container">
            <Link to="/">  
            <img src={logo} alt="Tindev"/>
            </Link>
                {users.length > 0 ? (
                     <ul>
                      {users.map(user =>(
                        <li key={user._id}>
                        <img src={user.avatar} alt="Avatar"/>
                        <footer>
                            <strong>{user.name}</strong>
                            <p>{user.bio}</p>
                        </footer>
                        <div className="buttons">
                            <button type="button" onClick={() => onLike(user._id)}>
                            <img src={like} alt="Like"/>
                            </button>
                            <button type="button" onClick={() => onDislike(user._id)}>
                            <img src={dislike} alt="Dislike"/>
                            </button>
                        </div>
                    </li>       
                  ))}
                  </ul>
                ) : (
                    <div className="empty">
                        Acabou ):
                        </div>
                )}             
        </div>
    )
}