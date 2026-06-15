import React, { useState } from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import AuthHeader from '../auth/AuthHeader';
import SignInCard from '../bulk-ordering/SignInCard';

export default function CustomDrawerContent(props: any) {
  const [expanded, setExpanded] = useState(false);

  const categories = [
    'Ankle',
    'Back',
    'Calf',
    'Chest',
    'Elbow',
    'Finger',
    'Foot',
    'Heel',
    'Hips',
    'Knee',
    'Neck',
    'Shoulder',
    'Spine',
    'Thigh',
    'Wellness',
    'Wrist',
  ];

  return (
    <DrawerContentScrollView {...props}>
      <View className='px-5 mb-2'>
        <AuthHeader
          title='Menu'
          subtitle='Explore our Collection'
        />
      </View>

      <SignInCard
        onPress={() => navigation.navigate("SignIn")}
      />;

      {/* Products Accordion */}
      <TouchableOpacity
        onPress={() => setExpanded(!expanded)}
        className="flex-row justify-between items-center px-5 py-4"
      >
        <Text className="text-lg font-semibold">
          Products
        </Text>

        <Ionicons
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={20}
        />
      </TouchableOpacity>

      {expanded && (
        <View className="mx-4 border-l-2 border-slate-300 pl-4">
          <Text className="font-bold mb-3">
            Categories
          </Text>

          <View className="flex-row flex-wrap">
            {categories.map((item) => (
              <TouchableOpacity
                key={item}
                className="w-1/3 py-2"
              // onPress={() =>
              //   router.push({
              //     pathname: '/categories',
              //     params: { category: item },
              //   })
              // }
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      {/* Other Drawer Items */}

      <DrawerItem
        label="Hampers"
        onPress={() => router.push('/hampers')}
      />

      <DrawerItem
        label="Bulk Ordering"
        onPress={() => router.push('/bulk-ordering')}
      />

      <DrawerItem
        label="Blog"
        onPress={() => router.push('/blog')}
      />
    </DrawerContentScrollView>
  );
}