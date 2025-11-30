// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGhKiQ8S2TysYRphFyVY3lhFgYfI9Ju-U",
  authDomain: "marketingapp-e5c7b.firebaseapp.com",
  projectId: "marketingapp-e5c7b",
  storageBucket: "brejxx02.appspot.com",
  messagingSenderId: "476873162864",
  appId: "1:476873162864:web:401b85d657a14480c574b5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Join button function
function joinNow() {
  db.collection("users").add({
    joinedAt: new Date().toISOString()
  })
  .then(() => {
    document.getElementById("welcome").style.display = "block";
    alert("🎉 Successfully Joined!");
  })
  .catch((err) => {
    alert("❌ Error: " + err.message);
  });
}
