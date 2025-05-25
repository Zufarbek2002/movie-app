import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="home"
        options={{ headerShown: false, title: "Bosh sahifa" }}
      />
      <Stack.Screen
        name="movieDetail"
        options={{ headerShown: false, title: "Movie detail" }}
      />
    </Stack>
  );
}
