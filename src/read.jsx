import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Firebase } from './Firebase/config.js';


function create(){

    const db = getFirestore(Firebase);

    return(
        <button className="App" onClick={() => {
            getDocs(collection(db, 'products')).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.data(), doc.id);
            });
            })
            .catch((error) => {
            console.error("Error fetching data: ", error);
            });
        }}>Read</button>
    )
}

export default create;