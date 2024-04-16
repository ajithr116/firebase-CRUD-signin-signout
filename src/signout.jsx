
import { getAuth, signOut } from "firebase/auth";


function signout(){


    return(
        <button className="App" onClick={() => {
            const auth = getAuth();
            signOut(auth).then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error);
            });

        }}>Signout</button>
    )
}

export default signout;