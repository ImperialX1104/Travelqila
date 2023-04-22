import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, child, set } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyDItppAt6qPLB-Ci7mQyA8CZjWZBHsmhF8",
    authDomain: "travelqila-181e6.firebaseapp.com",
    projectId: "travelqila-181e6",
    storageBucket: "travelqila-181e6.appspot.com",
    messagingSenderId: "247673942343",
    appId: "1:247673942343:web:bcd72dc7886e38e0849c62",
    measurementId: "G-T226NC8D56"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase();
  const dbRef = ref(db);
  getAnalytics(app);

  function setData(phoneNumber){
    return set(child(dbRef, `Users/${phoneNumber}`)).then((snapshot) => {
        if (snapshot.exists()) {
            return snapshot.val();
          } else {
            return false;
          }
        }).catch((error) => {
          return (error);      
  });
  }

  export default setData();

