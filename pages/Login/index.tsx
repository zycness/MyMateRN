import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import React from "react";

const Login = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [number, onChangeNumber] = React.useState("");

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 128, 251, 0.26)",
      }}
    >
      <Image
        source={require("../../assets/logo.png")}
        style={{ width: 100, height: 100 }}
      />
      <Image
        source={require("../../assets/HomeBackground/background1.png")}
        style={{
          position: "absolute",
          bottom: 300,
          right: 0,
        }}
      />
      <Image
        source={require("../../assets/HomeBackground/background2.png")}
        style={{
          position: "absolute",
          bottom: -100,
        }}
      />
      <View style={styles.card}>
        <SafeAreaView>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setUser((old) => ({ ...old, email: text }))}
            value={number}
            placeholder="pablo.gomez@adviters.com"
            keyboardType="email-address"
            inputMode="email"
            autoComplete="email"
            aria-label="Ingrese su correo"
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) =>
              setUser((old) => ({ ...old, password: text }))
            }
            value={number}
            autoComplete="password"
            aria-label="Ingrese su contraseña"
            secureTextEntry
          />
          <View
            style={{
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Text style={{ ...styles.label, textDecorationLine: "underline" }}>
              Forgot password
            </Text>
            <Button title="Login" color={"#0080FB"} />
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#F3F3F3",
    borderRadius: 2,
    height: 30,
    borderColor: "#0080FB",
    borderWidth: 0.2,
    padding: 5,
  },
  label: {
    color: "#0080FB",
  },
  card: {
    marginTop: 20,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 30,
    paddingTop: 80,
    paddingBottom: 40,
    borderRadius: 25,
    display: "flex",
    justifyContent: "center",
    height: "50%",
    width: "70%",
    shadowColor: "rgb(0, 0, 0)",
    shadowOffset: {
      height: 4,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
