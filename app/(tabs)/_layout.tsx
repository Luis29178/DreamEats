import { MaterialCommunityIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import React from 'react';



/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
export default function TabLayout() {


  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name='food-fork-drink' size={28} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name='account' size={28} color={color} />,
        }}
      />

      <Tabs.Screen
        name="order"
        options={{
          headerShown: false,
          title: 'Order',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name='shopping' size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
