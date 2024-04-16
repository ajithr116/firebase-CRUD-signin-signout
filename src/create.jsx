import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { Firebase } from './Firebase/config.js';


function create(){

    const db = getFirestore(Firebase);

    return(
        <button className="App" onClick={() => {
            addDoc(collection(db, 'products'), {
            type: 'Laptop',
            price: '400',
            name: 'ASUS'
        });
        }}>Create</button>
    )
}

export default create;