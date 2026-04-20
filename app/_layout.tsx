import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function RootLayout() {
  const [FontsLoaded, error] = useFonts({
    "Inter-Bold": require("../assets/fonts/Roboto/static/Roboto-Bold.ttf"),
    "Inter-Regular": require("../assets/fonts/Roboto/static/Roboto-Regular.ttf"),
    "Inter-Medium": require("../assets/fonts/Roboto/static/Roboto-Medium.ttf"),
    "Inter-Light": require("../assets/fonts/Roboto/static/Roboto-Light.ttf"),
    "Inter-Black": require("../assets/fonts/Roboto/static/Roboto-Black.ttf"),
    "Inter-Italic": require("../assets/fonts/Roboto/static/Roboto-Italic.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Roboto/static/Roboto-SemiBold.ttf"),
    "Inter-ExtraBold": require("../assets/fonts/Roboto/static/Roboto-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (FontsLoaded) {
      SplashScreen.hideAsync();
      console.warn("Fonts loaded successfully");
    } else if (error) {
      console.error("Error loading fonts:", error);
    }
  }, [FontsLoaded, error]);

  if (!FontsLoaded) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
