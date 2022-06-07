import firebase from "firebase/compat/app"
import "firebase/compat/database"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCweINSPZpX6nXWfs4x1kEpaFmm2aHrVOM",
    authDomain: "fir-bcfcb.firebaseapp.com",
    databaseURL: "https://fir-bcfcb-default-rtdb.firebaseio.com",
    projectId: "fir-bcfcb",
    storageBucket: "fir-bcfcb.appspot.com",
    messagingSenderId: "1049897495426",
    appId: "1:1049897495426:web:1899a6c9bd0df2eab47d9b"
};

const firebaseDB = firebase.initializeApp(firebaseConfig)
export const db = firebaseDB.database().ref();
export const auth = firebase.auth();