import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { theme } from "@/constants/theme";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={24} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.accent,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.border,
        },
        headerStyle: {
          backgroundColor: theme.colors.surface,
        },
        headerTintColor: theme.colors.text,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Karte",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="map" color={color} />,
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: "Liste",
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        }}
      />
    </Tabs>
  );
}
