import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNSS_jFglWwaqCTv135JsWm0XWXmEmrEM",
  authDomain: "mini-d52d9.firebaseapp.com",
  databaseURL: "https://mini-d52d9-default-rtdb.firebaseio.com",
  projectId: "mini-d52d9",
  storageBucket: "mini-d52d9.appspot.com",
  messagingSenderId: "1039090285490",
  appId: "1:1039090285490:web:eeef66279f4566dc3282ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getDatabase,ref,set, update,get,remove,child} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";
// import { RetryHandler } from "undici";
// import { update } from "lodash";
const db=getDatabase(app);

    // let useer=document.getElementById("user").value;
    // let name=document.getElementById("name").value;
    // let phoneno=document.getElementById("number").value;


    // CHecking  data  whether it is already or not
  function isempty(str){
    return str===null || str.match(/^ *$/)!==null;
  }




  function  validate(){
    const nameregex = /^[a-zA-Z\s]+$/;
    // const emailregex = /^[a-zA-Z0-9]+@(gmai|yahoo|outlook)\.com$/;
    const emailregex = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook)\.com$/;

    const userregex = /^[a-zA-Z0-9]{4,}$/;

    if(isempty(document.getElementById("name").value)||isempty(document.getElementById("gender").value) ||isempty(document.getElementById("email").value)||isempty(document.getElementById("age").value)||isempty(document.getElementById("rollnumber").value)||isempty(document.getElementById("department").value)||isempty(document.getElementById("phone").value)){
        alert("you can't left any field empty");
        return false;
    }










                if(!nameregex.test(document.getElementById("name").value)){
                      alert("the name should only conatin alphabets");
                      return false;
                    }
                if(!emailregex.test(document.getElementById("email").value)){
                    alert("enter the valid email");
                    return false;
                }
//   this for user name==>            if(!nameregex.test(document.getElementById("name").value)){
//                 alert("the name should only conatin alphabets")
//   }
    return true;
    }



     const submit=document.getElementById("submit");
     submit.addEventListener("click",function(event){
        event.preventDefault();
        if(!validate()){
            return;
        }



        const dbref=ref(db);
                    get(child(dbref,'user/'+document.getElementById("rollnumber").value)).then((snapshot)=>{
                        if(snapshot.exists()){
                            alert("the user already exisit");
    
                        }
                        else{
                            set(ref(db,'user/'+document.getElementById("rollnumber").value),{
                                Name:document.getElementById("name").value,
                                // Name:  encryptPassword(),
                                Email:document.getElementById("email").value,
                                Age:document.getElementById("age").value,
                                Rollno: document.getElementById("rollnumber").value,
                                Department:document.getElementById("department").value,
                                Gender:document.getElementById("gender").value,
                                PhoneNumber :document.getElementById("phone").value
                            }).then(()=>{
                                 alert("data saved successfully");
                                 
                                  window.location.href="index4.html";
                                //  form.submit();
                                // document.getElementById("myForm").reset();
                                window.onbeforeunload = function() {
                                    document.getElementById("myForm").reset();
                                };
                            }).catch((error)=>{
                                alert("error"+error);
                            })
    
                        }
                    })
                    // .catch((error)=>{
                    //     alert("not exisit");
                    // })





          
        // set(ref(db,'user/'+document.getElementById("rollnumber").value),{
        //     Name:document.getElementById("name").value,
        //     Email:document.getElementById("email").value,
        //     Age:document.getElementById("age").value,
        //     Rollno: document.getElementById("rollnumber").value,
        //     Department:document.getElementById("department").value,
        //     Gender:document.getElementById("gender").value,
        //     PhoneNumber :document.getElementById("phone").value
        // }).then(()=>{
        //      alert("data saved successfully");
             
        //       window.location.href="index4.html";
        //     //  form.submit();
        //     // document.getElementById("myForm").reset();
        //     window.onbeforeunload = function() {
        //         document.getElementById("myForm").reset();
        //     };
        // }).catch((error)=>{
        //     alert("error");
        // })
     });

    //  encription process
    // function encryptPassword() {
    //     var nameElement = document.getElementById("name").value;
    //     var encryptedPassword = CryptoJS.AES.encrypt(nameElement, nameElement).toString();
    //     return encryptedPassword;
    // }







    //  const getit=document.getElementById("getit");
    //  getit.addEventListener("click",function(event){
    //     event.preventDefault();
    //             alert("all ok");

    //             const dbref=ref(db);
    //             get(child(dbref,'user/'+document.getElementById("name1").value)).then((snapshot)=>{
    //                 if(snapshot.exists()){
    //                     alert(snapshot.val().username);
    //                     alert(snapshot.val().phoneno);

    //                 }
    //                 else{
    //                     alert("not exisit");

    //                 }
    //             })
    //             .catch((error)=>{
    //                 alert("not exisit");
    //             })
    //  });


     
    //  const updateit=document.getElementById("update");
    //  updateit.addEventListener("click",function(event){
    //     event.preventDefault();
  
    // // console.log(event.target);
    // // console.log(document.getElementById("user").value);
    // // console.log('Phone Number:', phoneno);
    //         console.log(document.getElementById("name2").value)
    //     update(ref(db,'user/'+document.getElementById("name2").value),{
    //         username:document.getElementById("user").value,
    //         // Name:document.getElementById("name").value,
    //         phoneno:document.getElementById("number").value
    //     }).then(()=>{
    //          alert("data updated nvp");
    //     }).catch((error)=>{
    //         alert(" sorry hari");
    //     })
    //  });
    

    //  const del=document.getElementById("del");
    //  del.addEventListener("click",function(event){
    //     event.preventDefault();
  
    // // console.log(event.target);
    // // console.log(document.getElementById("user").value);
    // // console.log('Phone Number:', phoneno);
    //         console.log(document.getElementById("name3").value)
    //     remove(ref(db,'user/'+document.getElementById("name3").value),{
    //         // username:document.getElementById("user").value,
    //         // // Name:document.getElementById("name").value,
    //         // phoneno:document.getElementById("number").value
    //     }).then(()=>{
    //          alert("data deleted nvp");
    //     })
    //     .catch((error) => {
    //         console.error("Error removing user: ", error);
    //       });
    //  });
    