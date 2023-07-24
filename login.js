
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBwto_ZH7HFza1VbmshgDGtDUk8oTtAbGY",
  authDomain: "auth-form-ed2cd.firebaseapp.com",
  projectId: "auth-form-ed2cd",
  storageBucket: "auth-form-ed2cd.appspot.com",
  messagingSenderId: "753408006937",
  appId: "1:753408006937:web:00e6fba00c6aded0b2c388",
  measurementId: "G-YQRTCB32R6"
 });
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

//singup
const signUp= () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
        // Signed in 
        document.write("You are Signed Up")
        window.location="new.html";
        console.log(result)
        // ...
    })
    .catch((error) => {
        console.log(error.code);
        console.log(error.message)
        // ..
    });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            window.location="new.html";
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}