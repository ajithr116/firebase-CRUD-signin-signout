import { getFirestore, updateDoc, doc } from 'firebase/firestore';
import { Firebase } from './Firebase/config.js';


function deleting(){
    const db = getFirestore(Firebase);

    return (
        <button onClick={()=>{
            const docRef = doc(db, 'products', 'mUeOqZxefoMY9AwufOBW');
                updateDoc(docRef, {
                price: '11111'
                });
                console.log("Document successfully updated!");     
        }}>Update</button>
    )
}

export default deleting;