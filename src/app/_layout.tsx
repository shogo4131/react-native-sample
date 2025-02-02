import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#467FD3" },
        headerTintColor: "#fff",
        headerTitle: "Memo App",
        headerBackTitle: "Back",
        headerTitleStyle: { fontSize: 22, fontWeight: "bold" },
      }}
    />
  );
}
