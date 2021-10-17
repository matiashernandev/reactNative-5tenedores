import React from "react";
import { Text, View, Button } from "react-native";
import * as firebase from "firebase";

export default function UserLogged() {
    return (
        <View>
            <Text>
                UserLogged... VAMOOOO TE RE LOGGEASTE...algún día va a haber
                algo re copado acá 17/10/21
            </Text>
            <Button
                title="Cerrar sesión"
                onPress={() => firebase.auth().signOut()}
            />
        </View>
    );
}
