import React, { useRef } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import LoginForm from "../../componets/Account/LoginForm";

export default function Login() {
    const toastRef = useRef();
    return (
        <ScrollView>
            <Image
                source={require("../../../assets/img/logoShield.png")}
                resizeMode="contain"
                style={styles.logo}
            />
            <View style={styles.viewContainer}>
                <LoginForm toastRef={toastRef} />
                <CreateAccount />
            </View>
            <Divider style={styles.divider} />
            <Text>Social login c toma un ferne con pepsi ............</Text>
            <Toast ref={toastRef} position="center" opacity={0.9} />
        </ScrollView>
    );
}

function CreateAccount() {
    const navigation = useNavigation();

    return (
        <Text style={styles.textRegister}>
            Aún no tenés una cuenta gilastrún?{" "}
            <Text
                style={styles.btnRegister}
                onPress={
                    () => navigation.navigate("register")
                    /* console.log("C toma un ferne con pepsi 17/10/21 1:18") */
                }
            >
                {" "}
                Registrate
            </Text>
        </Text>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: "100%",
        height: 150,
        marginTop: 20,
    },
    viewContainer: {
        marginRight: 40,
        marginLeft: 40,
    },
    textRegister: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
    },
    btnRegister: {
        color: "blue",
        fontWeight: "bold",
    },
    divider: {
        backgroundColor: "blue",
        margin: 40,
    },
});
