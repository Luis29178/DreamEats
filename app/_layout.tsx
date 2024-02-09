import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "@/constants/Redux/ReduxStore";
import React from "react";
import { Colors } from "@/constants/Colors";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <RootLayoutNav />
      <StatusBar style="dark" />
    </Provider>
  );
}

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/*Modal's (accountTabs)*/}
      <Stack.Screen
        name="(accountTabs)/editprofile"
        options={{ presentation: "modal", headerTitle: "Edit Profile", headerShown: false }}
      />
      <Stack.Screen
        name="(accountTabs)/paymentmethods"
        options={{ presentation: "modal", headerTitle: "Payment Methods" }}
      />
      <Stack.Screen
        name="(accountTabs)/savedadresses"
        options={{ presentation: "fullScreenModal", headerTitle: "Saved Adresses", headerShown: false }}
      />
    </Stack>
  );
}
