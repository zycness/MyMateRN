import { Button, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        title="Ir al login"
        onPress={() => navigation.navigate("login")}
      />
      <Text>Home Screen</Text>
    </View>
  );
}
