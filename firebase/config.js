import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB6_4-6lpAuKMcph4TxJKw0zYiLyIW6hEM",
  authDomain: "mymate-rn.firebaseapp.com",
  projectId: "mymate-rn",
  storageBucket: "mymate-rn.appspot.com",
  messagingSenderId: "1036028886904",
  appId: "1:1036028886904:web:293a4065255b3350c7528d",
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth, app };
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
