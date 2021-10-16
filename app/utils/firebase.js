import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDttStoW9BHLcM1l-BN-D329vHR-ANuhrI",

    authDomain: "tenedores-2dda3.firebaseapp.com",

    projectId: "tenedores-2dda3",

    storageBucket: "tenedores-2dda3.appspot.com",

    messagingSenderId: "674793792921",

    appId: "1:674793792921:web:ffac4839731900d2721f08",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
