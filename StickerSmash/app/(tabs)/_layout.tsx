import { Tabs } from 'expo-router';
import Iconicons from '@expo/vector-icons/Ionicons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    return (
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: '#ffd33d'
          }}
        >
            <Tabs.Screen
            name='index'
            options={{
                title: 'Home',
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                )
            }}
            />
            <Tabs.Screen 
                name='about'
                options={{
                    title: 'About',
                    tabBarIcon: ({ color, focused }) => (
                        <Iconicons name={focused? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                }}
            />
        </Tabs>
    )
}