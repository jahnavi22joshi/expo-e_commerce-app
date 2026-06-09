import React from 'react';
import CustomDrawerContent from 'components/CustomDrawerContent';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => (
        <CustomDrawerContent {...props} />
      )}
      screenOptions={{ headerShown: false }}

    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          drawerItemStyle: {
            display: 'none',
          },
        }}
      />
    </Drawer>
  );
}