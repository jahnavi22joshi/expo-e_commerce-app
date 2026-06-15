import CustomTabBar from 'components/tabs/CustomTabBar';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="Search" />
      <Tabs.Screen name="Cart" />
      <Tabs.Screen name="Track" />
      <Tabs.Screen name="Profile" />
    </Tabs>
  );
}