import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="journal"
        options={{
          title: "Journal",
          tabBarIcon: ({ color }) => <TabBarIcon name="pencil" color={color} />,
        }}
      />
      <Tabs.Screen
        name="habit"
        options={{
          title: "Habits",
          tabBarIcon: ({ color }) => <TabBarIcon name="bullseye" color={color} />,
        }}
      />
      <Tabs.Screen
        name="newdiary"
        options={{
          title: "New Diary",
          tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: "Stats",
          tabBarIcon: ({ color }) => <TabBarIcon name="info" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <TabBarIcon name="gears" color={color} />,
        }}
      />
    </Tabs>
  );
}
