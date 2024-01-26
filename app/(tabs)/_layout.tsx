import { MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import React from "react";
import { RootState } from "@/constants/Redux/ReduxStore";
import { useSelector } from "react-redux";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
export default function TabLayout() {

  const isLoggedIn = useSelector(
    (state: RootState) => state.LoggedState.isLoggedIn
  );
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Menu",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="food-fork-drink"
              size={28}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="rewards"
        options={{
          title: "Rewards",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gift-open" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          headerShown: isLoggedIn ? false : true,
          title: "Account",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="order"
        options={{
          headerShown: false,

          title: "Order",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="shopping" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
