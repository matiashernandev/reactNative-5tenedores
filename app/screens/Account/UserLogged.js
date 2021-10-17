import React from "react";
import { Text, View, Button } from "react-native";
import * as firebase from "firebase";

export default function UserLogged() {
    return (
        <View>
            <Text>UserLogged...</Text>
            <Button
                title="Cerrar sesión"
                onPress={() => firebase.auth().signOut()}
            />
        </View>
    );
}
