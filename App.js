import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./pages/Home";
import Login from "./pages/Login";
import auth from "@react-native-firebase/auth";

const Stack = createNativeStackNavigator();

function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen
            name="home"
            options={{
              title: "Inicio",
            }}
            component={HomeScreen}
          />
        ) : (
          <Stack.Screen
            name="login"
            options={{
              title: "Inicio de sesion",
            }}
            component={Login}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
