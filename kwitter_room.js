
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAsoxF0YexRx9jctZCOKCFxN9B7oaK08_Y",
      authDomain: "kwitter-89c1d.firebaseapp.com",
      databaseURL: "https://kwitter-89c1d-default-rtdb.firebaseio.com",
      projectId: "kwitter-89c1d",
      storageBucket: "kwitter-89c1d.appspot.com",
      messagingSenderId: "407554900924",
      appId: "1:407554900924:web:13fc5536719eaa69d821b9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("user_name")

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      });});}
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}


