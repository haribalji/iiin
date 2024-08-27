import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
   
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
// import { getAll } from "@firebase/remote-config";
  import { getDatabase,ref,set, update,get,remove,child,onValue} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";
// import { forEach } from "lodash";
  // import { update } from "lodash";
  const db=getDatabase(app);
  var array=[];
     
 

     const getit=document.getElementById("getit");
     getit.addEventListener("click",function(event){
        event.preventDefault();
        sn=0;
                // alert("all ok");
                
                const dbref=ref(db);
                // array=[];
                // app.getdatabase().ref("user").once('value',function(snapshot){
                //     snapshot.forEach(childSnapshot=>{
                //         array.push(childSnapshot.val());
                //     })
                //     addall(array);
                // })

                get(child(dbref,'user/')).then((snapshot)=>{
                    
                     array=[];
                    if(snapshot.exists()){
                        console.log(snapshot);
                            snapshot.forEach(childSnapshot=>{
                                array.push(childSnapshot.val());
                            })
                            addall(array);

                    }
                    else{
                        alert("not exisit");

                    }
                })
                .catch((error)=>{
                    alert("not exisit");
                })
     });

     var sn=0;
     var studentlis=[];
     const tBody = document.getElementById("tbody");





    function addrow(rollno,name,dept,age,email,gen,phno){
        let newRow = document.createElement("tr");
        let td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        const td6 = document.createElement("td");
        const td7 = document.createElement("td");
        const td8 = document.createElement("td");
        studentlis.push([rollno,name,age,dept,email,gen,phno]);
        console.log(studentlis[0]);
              td1.innerHTML=++sn;
              td2.innerHTML=rollno;
              td3.innerHTML=name;
              td4.innerHTML=age;
              td5.innerHTML=dept;
              td6.innerHTML=email;
              td7.innerHTML=gen;
              td8.innerHTML=phno;

// now adding all this cell to the row
newRow.appendChild(td1);
newRow.appendChild(td2);
newRow.appendChild(td3);
newRow.appendChild(td4);
newRow.appendChild(td5);

newRow.appendChild(td6);

newRow.appendChild(td7);
newRow.appendChild(td8);




var controldiv = document.createElement("div");

const addButton = document.createElement("button");
addButton.type = "button";
addButton.className = "btn btn-primary my-2 mx-2";
addButton.setAttribute("data-bs-toggle", "modal");
addButton.setAttribute("data-bs-target", "#staticBackdrop");
addButton.innerText = "add it";
addButton.addEventListener("click", function() {
    filltboxes(null);
});

const editButton = document.createElement("button");
editButton.type = "button";
editButton.className = "btn btn-primary my-2 mx-2 ml-2";
editButton.setAttribute("data-bs-toggle", "modal");
editButton.setAttribute("data-bs-target", "#staticBackdrop");
editButton.innerText = "edit it";
editButton.dataset.sn = sn;
editButton.addEventListener("click", function() {
    // console.log(editButton.dataset);
    filltboxes(this.dataset.sn);
});

controldiv.appendChild(addButton);
controldiv.appendChild(editButton);

newRow.appendChild(controldiv);
// tBody.appendChild(newRow);


















// var controldiv=document.createElement("div");
// controldiv.innerHTML='<button id="aa" type="button" class="btn btn-primary my-2 " data-bs-toggle="modal" data-bs-target="#staticBackdrop"  onclick="filltboxes(null)">add it</button>'
// controldiv.innerHTML+='<button id="aaa" type="button" class="btn btn-primary my-2 ml-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="filltboxes(' + sn +')"> edit it</button>'
// newRow.appendChild(controldiv);
// tBody.appendChild(newRow);
//  var s=document.getElementById("aa");
//  var s1=document.getElementById("aaa");

// console.log(s);
// console.log(s1);
// // s.addEventListener("click",filltboxes);
// console.log(sn);
// // s1.addEventListener("click",filltboxes(sn));













// now i am adding  one to the table
    
tBody.appendChild(newRow);

    }
    

    function addall(array1){
        var std=0;
        tBody.innerHTML="";
        array1.forEach(element => {

            addrow(element.Rollno, element.Name,  element.Department,  element.Age,      element.Email, element.Gender,   element.PhoneNumber);

        });
    }

    // window.onload= addall;


//
var ename=document.getElementById("ename");
var eROLLNUMBER=document.getElementById("eROLLNUMBER");
var eage=document.getElementById("eage");
var eDepartment=document.getElementById("eDepartment");
var eemail=document.getElementById("eemail");
var eGender=document.getElementById("eGender");
var ePhoneNumber=document.getElementById("ePhoneNumber");

var eadd=document.getElementById("eadd");
var eupdate=document.getElementById("eupdate");
var edelete=document.getElementById("edelete");


function filltboxes(index){
    // alert("hello");
    console.log(index);
if(index===null){
 ename.value="";
 eROLLNUMBER.value="";
 eage.value="";
 eDepartment.value="";
 eemail.value="";
 eGender.value="";
 ePhoneNumber.value="";
 eadd.style.display='inline-block';
 eupdate.style.display='none';
 edelete.style.display='none';
}
else{
    --index;
    console.log(index);
    ename.value=studentlis[index][1];
    eROLLNUMBER.value=studentlis[index][0];
    eage.value=studentlis[index][2];
    eDepartment.value=studentlis[index][3];
    eemail.value=studentlis[index][4];
    eGender.value=studentlis[index][5];
    ePhoneNumber.value=studentlis[index][6];
    eROLLNUMBER.disabled=true;

    eadd.style.display='none';
    eupdate.style.display='inline-block';
    edelete.style.display='inline-block';
}
}

eupdate.addEventListener("click",updad);
function updad(){
    
    set(ref(db,'user/'+document.getElementById("eROLLNUMBER").value),{
        // username:document.getElementById("user").value,
        // Name:document.getElementById("name").value,
        // phoneno:document.getElementById("number").value

        Name: ename.value,
        Email:  eemail.value,
        Age:eage.value,
        Rollno: eROLLNUMBER.value,
        Department:eDepartment.value,
        Gender:  eGender.value,
        PhoneNumber :    ePhoneNumber.value

    }).then(()=>{
         alert("updated sucessfully");
         sn=0;
         getit.click();
    }).catch((error)=>{
        alert("error");
    })
 
}
edelete.addEventListener("click",delit);

function delit(){
    remove(ref(db,'user/'+document.getElementById("eROLLNUMBER").value),{
        // username:document.getElementById("user").value,
        // // Name:document.getElementById("name").value,
        // phoneno:document.getElementById("number").value
    }).then(()=>{
         alert("data deleted ");

    document.getElementById('staticBackdrop').style.display = 'none';

         getit.click();


    })
    .catch((error) => {
        alert(error);

        // console.error("Error removing user: ", error);
      });
}

eadd.addEventListener("click",addnew);

function addnew(){
    set(ref(db,'user/'+document.getElementById("eROLLNUMBER").value),{
        Name: ename.value,
        Email:  eemail.value,
        Age:eage.value,
        Rollno: eROLLNUMBER.value,
        Department:eDepartment.value,
        Gender:  eGender.value,
        PhoneNumber :  ePhoneNumber.value
    }).then(()=>{
      
         alert("data added sucessfully");
         getit.click();
    }).catch((error)=>{
        alert("something went wrong");
    })
}