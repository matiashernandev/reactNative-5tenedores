import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { isEmpty } from "lodash";
import { validateEmail } from "../../utils/validations";

export default function LoginForm(props) {
    const { toastRef } = props;
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(defaultFormValue());

    const onChange = (e, type) => {
        setFormData({ ...formData, [type]: e.nativeEvent.text });
    };

    const onSubmit = () => {
        if (isEmpty(formData.email) || isEmpty(formData.password)) {
            toastRef.current.show(
                "Todos los campos son obligatorios, NO EHHH!"
            );
        } else if (!validateEmail(formData.email)) {
            toastRef.current.show("El email está mal, media pila");
        } else {
            console.log("OK MAIL");
        }
    };

    return (
        <View style={styles.formContainer}>
            <Input
                placeholder="Correo electrónico"
                containerStyle={styles.inputForm}
                onChange={(e) => onChange(e, "email")}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="at"
                        iconStyle={styles.iconRight}
                    />
                }
            />
            <Input
                placeholder="Contraseña"
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={showPassword ? false : true}
                onChange={(e) => onChange(e, "password")}
                rightIcon={
                    <Icon
                        type="material-community"
                        // debatible lo del ojo abierto y cerrado
                        name={showPassword ? "eye-outline" : "eye-off-outline"}
                        iconStyle={styles.iconRight}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
            />

            <Button
                title="Inicial sesión"
                containerStyle={styles.btnContainerLogin}
                buttonStyle={styles.btnLogin}
                onPress={onSubmit}
            />
        </View>
    );
}

function defaultFormValue() {
    return {
        email: "",
        password: "",
    };
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
    inputForm: {
        width: "100%",
        marginTop: 20,
    },
    btnContainerLogin: {
        marginTop: 20,
        width: "95%",
    },
    btnLogin: {
        backgroundColor: "blue",
    },
    iconRight: {
        color: "#c1c1c1",
    },
});
