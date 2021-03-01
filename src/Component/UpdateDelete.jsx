import { queryByRole } from "@testing-library/react";
import React, { useContext, useState } from "react";
import firebase from "../utils/FirebaseConfig";
import {UidContext} from './UidContext'

const UpdateDelete = ({ item }) => {
  const [update, setUpdate] = useState(false);
  const [authorUpdate, setAuthorUpdate] = useState(null);
  const [textUpdate, setTextUpdate] = useState(null);
  const uid = useContext(UidContext)

const authorCheck = ()=>{
    if(item.uid === uid){
        return true
    }else{
        return false
    }
}
authorCheck();

  // update
  const updateItem = () => {
    let quote = firebase.database().ref("quotesDB").child(item.id);

    if (authorUpdate !== null) {
      quote.update({
        author: authorUpdate,
        // author prend la valeur de author update ( inpur quon modifie)
      });
    }
    if (textUpdate !== null) {
      quote.update({
        text: textUpdate,
        // author prend la valeur de author update ( inpur quon modifie)
      });
    }
    setUpdate(false);
  };

  const deleteItem = () =>{
      let quote = firebase.database().ref('quotesDB').child(item.id)
      quote.remove()
  }
  return (
    <li>
      {update === false && (
         
          <div className="item-container">
            <p>{item.text}</p>
            <h6>{item.author}</h6>
          {authorCheck() &&(
              <div>
            <button onClick={() => setUpdate(!update)}>Update</button>
            <button onClick = {deleteItem}>Delete</button>
          </div>
          )}
          </div>
      )}
      {update &&
      <div className="item-container-update">
          <textarea 
          defaultValue={item.text}
          onChange={(e)=> setTextUpdate(e.target.value)}
         /> 
         <input type="text"
         defaultValue={item.author}
         onChange={(e) => setAuthorUpdate(e.target.value)}/>
         <button onClick ={updateItem}>valider </button> 
      </div>
      }
    </li>
  );
};

export default UpdateDelete;
