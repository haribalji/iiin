  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  

  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDNSS_jFglWwaqCTv135JsWm0XWXmEmrEM",
    authDomain: "mini-d52d9.firebaseapp.com",
    projectId: "mini-d52d9",
    storageBucket: "mini-d52d9.appspot.com",
    messagingSenderId: "1039090285490",
    appId: "1:1039090285490:web:eeef66279f4566dc3282ab"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
//   get the input 

const submit2=document.getElementById("submit2");
submit2.addEventListener("click",function(event){
        event.preventDefault();
        // alert(0);
        // console.log(email);
        const email=document.getElementById("email2").value;
          const password=document.getElementById("Password2").value;

          signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("loging in");
    window.location.href="view.html";
    //...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
});


