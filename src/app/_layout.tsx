import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ToastProvider } from "react-native-toast-notifications";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <ToastProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(shop)" options={{ title: "Shop Dash" }} />
            <Stack.Screen name="categories" options={{ title: "Categories" }} />
            <Stack.Screen name="product" options={{ title: "Product" }} />
            <Stack.Screen
              name="cart"
              options={{
                presentation: "modal",
                title: "Shopping Cart",
              }}
            />
            <Stack.Screen name="auth" options={{ headerShown: true }} />
          </Stack>
        </SafeAreaView>
      </ToastProvider>
    </>
  );
}
