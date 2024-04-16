
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function signup(){

    const auth = getAuth();

    return(
        <button className="App" onClick={() => {

            createUserWithEmailAndPassword(auth, "ajith111@gmail.com", "12345678")
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("error " + errorCode + "------" + errorMessage )
                // ..
            });

        }}>Signup</button>
    )
}

export default signup;