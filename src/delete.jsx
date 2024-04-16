import { getFirestore, deleteDoc, doc } from 'firebase/firestore';
import { Firebase } from './Firebase/config.js';


function deleting(){
    const db = getFirestore(Firebase);

    return (
        <button onClick={()=>{
            deleteDoc(doc(db, 'products','oGgwo2Gj1dj3qVc5W5yp'))   // need o change the data
            console.log("Success fully deleted ")       
        }}>Delete</button>
    )
}

export default deleting;