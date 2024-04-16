
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function signin(){

    const auth = getAuth();

    return(
        <button className="App" onClick={() => {

            createUserWithEmailAndPassword(auth, "ajithasd111@gmail.com", "12345678")
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

        }}>Sign in</button>
    )
}

export default signin;