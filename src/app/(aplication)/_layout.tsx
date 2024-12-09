import colors from '@/src/styles/color';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarIconStyle: { flex: 1 },
      tabBarInactiveBackgroundColor: colors.primary,
      tabBarActiveBackgroundColor: colors.backgroundRemove,
      tabBarActiveTintColor: colors.accent,
    }}>

      <Tabs.Screen
        name="home/index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="search/index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="create/index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus" color={color} />,
        }}
      />
      <Tabs.Screen
        name="store/index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="bookmark-o" color={color} />,
        }}
      />
    </Tabs>
  );
}

