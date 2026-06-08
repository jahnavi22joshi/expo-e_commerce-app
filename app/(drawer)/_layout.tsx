import { Drawer } from "expo-router/drawer";
import React from "react";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: "Home",
        }}
      />
        <Drawer.Screen
        name="(tabs1)"
        options={{
          title: "Cart",
        }}
      />
    </Drawer>
  );
}