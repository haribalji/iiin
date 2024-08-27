  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  

  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
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
var s;




const submit=document.getElementById("submit");
submit.addEventListener("click",function(event){
        event.preventDefault();
      

        const email=document.getElementById("email").value;
          const password=document.getElementById("password").value;
             s=email;
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("creating a Account");


    
    window.location.href="data.html";
    //...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
});



