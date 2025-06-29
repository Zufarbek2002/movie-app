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
      <Stack.Screen
        name="actorDetail"
        options={{ headerShown: false, title: "Actor detail" }}
      />
      <Stack.Screen
        name="search"
        options={{
          headerShown: true,
          title: "Search",
          headerStyle: { backgroundColor: "#081227" },
        }}
      />
    </Stack>
  );
}
