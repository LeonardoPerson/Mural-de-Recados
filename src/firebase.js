import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDcrK4szsEL0XTBN3ZUTiJmE3WWWBGaXlQ",
  authDomain: "mural-recados-advanced.firebaseapp.com",
  databaseURL: "https://mural-recados-advanced.firebaseio.com",
  projectId: "mural-recados-advanced",
  storageBucket: "mural-recados-advanced.appspot.com",
  messagingSenderId: "387715609416",
  appId: "1:387715609416:web:ca8731678ae53fd58c397d"
}

  firebase.initializeApp(firebaseConfig)
  export default firebase