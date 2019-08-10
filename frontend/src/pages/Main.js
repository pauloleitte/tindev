import React from 'react'
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import './Main.css';

export default function Main({match}){
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev"/>
            <ul>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/31547227?v=4"alt="Avatar"/>
                    <footer>
                        <strong>Paulo Leite</strong>
                        <p>Bla Bla Bla Bla</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                        <img src={like} alt="Like"/>
                        </button>
                        <button type="button">
                        <img src={dislike} alt="Dislike"/>
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/31547227?v=4"alt="Avatar"/>
                    <footer>
                        <strong>Paulo Leite</strong>
                        <p>Bla Bla Bla Bla</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                        <img src={like} alt="Like"/>
                        </button>
                        <button type="button">
                        <img src={dislike} alt="Dislike"/>
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/31547227?v=4"alt="Avatar"/>
                    <footer>
                        <strong>Paulo Leite</strong>
                        <p>Bla Bla Bla Bla</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                        <img src={like} alt="Like"/>
                        </button>
                        <button type="button">
                        <img src={dislike} alt="Dislike"/>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}