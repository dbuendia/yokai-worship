import firebase from "firebase/app";
import "firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyCGisCJCkzYhQFDs0_WS2Bk1fvxyV1emWo",
  authDomain: "proyecto-javier-prueba-a36c0.firebaseapp.com",
  projectId: "proyecto-javier-prueba-a36c0",
  storageBucket: "proyecto-javier-prueba-a36c0.appspot.com",
  messagingSenderId: "505607371076",
  appId: "1:505607371076:web:f32f2806978765d8b8bf11",
};
// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
// Exporta la funcionalidad de la base de datos
export const firestore = firebase.firestore();

// Exporta el paquete firebase para otros usos
export default firebase;
