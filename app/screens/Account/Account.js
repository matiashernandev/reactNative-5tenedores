import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
//import { auth } from "firebase"; no entiendo un choto

import Loading from "../../componets/Loading";
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

    if (login === null)
        return <Loading isVisible={true} text="C MATA POR UN RATO" />;

    return login ? <UserLogged /> : <UserGuest />;
}
