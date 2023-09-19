import { Alert, Button, Text, View } from "react-native";
import { auth } from "../../firebase/config";
import { signOut } from "firebase/auth";

export default function HomeScreen({ navigation }) {
  const user = auth.currentUser;

  const handleLogout = async () => {
    await signOut(auth)
      .then((res) => {
        return Alert.alert("Success", "sesión cerrada");
      })
      .catch(() => {
        return Alert.alert("Error", "Huno un error al cerrar la sesión");
      });
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Bienvenido {user ? user?.email : ""}</Text>
      <Button title="Cerrar sesion" onPress={handleLogout} />
    </View>
  );
}
