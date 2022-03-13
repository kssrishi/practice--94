
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB3KgD4k_YN658XwAIKVXM7ROJgU3_62Ko",
  authDomain: "kwitter-ad394.firebaseapp.com",
  databaseURL: "https://kwitter-ad394-default-rtdb.firebaseio.com",
  projectId: "kwitter-ad394",
  storageBucket: "kwitter-ad394.appspot.com",
  messagingSenderId: "1022313443054",
  appId: "1:1022313443054:web:3eb4be21066e5500488dff"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user name"
    })
    
}