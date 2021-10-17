import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
//import { auth } from "firebase"; no entiendo un choto
import { View, Text } from "react-native";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";

export default function Account() {
    const [login, setLogin] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log("C RECONTRA MATA PARA SIEMPRE");
            !user ? setLogin(false) : setLogin(true);
        });
    }, []);

    if (login === null) return <Text>AIUDA</Text>;

    return login ? <UserLogged /> : <UserGuest />;
}
