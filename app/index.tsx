import React from 'react';
import { useEffect } from 'react';
import { router } from 'expo-router';
import { Image, View } from 'react-native';

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(auth)/SignIn');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
   <View className="flex-1 items-center justify-center" style={{ backgroundColor: '#fff' }}>
  <Image
    source={require('../assets/ppluslogo.jpg')}
    style={{
      width: 100,
      height: 100,
    }}
    resizeMode="contain"
  />
</View>
  );
}