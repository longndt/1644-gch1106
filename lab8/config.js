const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

//config firestore database
const firebaseConfig = {
   apiKey: "AIzaSyA_JlIhuKGb-Ks6qhA0Xuw9thDynz7wIo4",
   authDomain: "gch1106-13954.firebaseapp.com",
   projectId: "gch1106-13954",
   storageBucket: "gch1106-13954.appspot.com",
   messagingSenderId: "325328059042",
   appId: "1:325328059042:web:d1ca729da27a06e0d135fb",
   measurementId: "G-9B00RPHERL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = db;