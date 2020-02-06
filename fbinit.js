import * as firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAO3_s_8TyhgJ2l8QjpA-4ATPi2JUQ1Gtw",
    authDomain: "pothole-app-bda25.firebaseapp.com",
    databaseURL: "https://pothole-app-bda25.firebaseio.com",
    projectId: "pothole-app-bda25",
    storageBucket: "pothole-app-bda25.appspot.com",
    messagingSenderId: "13731623061",
    appId: "1:13731623061:web:e9deade99d7de352c6eb9c"
};
let app = firebase.initializeApp(firebaseConfig);
export default auth = firebase.auth();