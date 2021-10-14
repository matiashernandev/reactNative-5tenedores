import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// no usado ^

import React from "react";
import Navigation from "./app/navigations/Navigation";

export default function App() {
    return (
        // <View style={styles.container}>
        //     <Text>
        //         Hola mundo llorando mucho mucho un monton Y SE RECONTRA MATA
        //         para siempre aiuda porfa 15:07 15:16 15:46
        //     </Text>
        //     <StatusBar style="auto" />
        // </View>
        <Navigation />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
