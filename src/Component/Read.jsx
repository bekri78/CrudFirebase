import React, { useEffect, useState } from 'react'
import firebase from '../utils/FirebaseConfig'
import UpdateDelete from './UpdateDelete'

const Read =()=>{

    const [quoteList, setQuotelist] = useState([])

    useEffect( ()=>{
        const quotesDB = firebase.database().ref('quotesDB')

        quotesDB.on('value', (snapshot) =>{
           let previousList = snapshot.val();
           let list =[];
           for(let id in previousList){
               list.push({id, ...previousList[id]})
           }
           setQuotelist(list);
        })
        },[])
        return(
            <div className="red">
<ul>
    {quoteList &&
    quoteList.map((item, index)=>(
        <UpdateDelete item={item} key={index}/>

    ))}
    
</ul>
        </div>
    )
}

export default Read;
// quoteList.map((item)=>{
//     return <p>{item.text} from {item.author}</p>