import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBJVnEJgNMQEN0ElhC7nX1enYNOJtyOwrA",
  authDomain: "restaurantapp-2a0e4.firebaseapp.com",
  databaseURL: "https://restaurantapp-2a0e4-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-2a0e4",
  storageBucket: "restaurantapp-2a0e4.appspot.com",
  messagingSenderId: "1089063332416",
  appId: "1:1089063332416:web:a0795b641bf109b6fe0da5"
};

const app = getApps.Length >0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage = getStorage(app)

export {app,firestore,storage}