import React from 'react'
import firebase from '../utils/FirebaseConfig'
import Creat from './Creat'
import Read from './Read'
const Main = ()=>{

return(

<main>
    <nav>
        <h1>React Crud</h1>
        <h4>bonjour {firebase.auth().currentUser.displayName}</h4>
        <div onClick={()=> firebase.auth().signOut()}> se deconnecter</div>

    </nav>
<Creat/>
<Read/>
</main>

)

}

export default Main