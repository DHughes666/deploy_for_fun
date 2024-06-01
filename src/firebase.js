// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCdes8bQ3tEcKONxXeZXHZ0NUZHCK9bNTw",
    authDomain: "timetablo2.firebaseapp.com",
    projectId: "timetablo2",
    storageBucket: "timetablo2.appspot.com",
    messagingSenderId: "1058659068971",
    appId: "1:1058659068971:web:8fa143ff196be7c317ce6e",
    measurementId: "G-3CLLPK704Q"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
