import React, { useContext, useState } from 'react'
import firebase from '../utils/FirebaseConfig'
import {UidContext} from './UidContext'

const Creat = () =>{

    const [author, setAuthor] =useState('');
    const [text, setText]= useState('');
    const uid = useContext(UidContext)
// envoie a firebase
    const createQuote = () =>{
        const quotesDB = firebase.database().ref("quotesDB");
        const quote = {
            uid,
            author,
            text,
        };
        quotesDB.push(quote)

        setAuthor('')
        setText('')
    }
    return(

        <div className='create'>
            <h4>deposer une citation</h4>
            <div className="form">
                <input 
                type="text"
                placeholder="auteur"
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}
                
                />
                <textarea
                placeholder="citation"
                value={text}
                onChange={(e)=>setText(e.target.value)} />
(<button onClick={createQuote}>Create</button>
            </div>
        </div>
    )
}

export default Creat