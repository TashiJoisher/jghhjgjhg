const firebaseConfig = {
    apiKey: "AIzaSyCBbN7V6JIZqBObXeWL3vr0W3WR5_8Vs5U",
    authDomain: "coding-78a2f.firebaseapp.com",
    databaseURL: "https://coding-78a2f-default-rtdb.firebaseio.com",
    projectId: "coding-78a2f",
    storageBucket: "coding-78a2f.appspot.com",
    messagingSenderId: "272428798203",
    appId: "1:272428798203:web:d63444e2526191ab01605e"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
    Checking:"checking firebase"    
    });
}