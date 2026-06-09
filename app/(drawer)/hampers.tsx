import React from 'react';
import HamperSlider from 'components/HamperSlider';
import { ScrollView } from 'react-native';
import FooterCard from 'components/FooterCard';

export default function Hampers() {
  return (
    <ScrollView className="flex-1 bg-white">

      {/* Find You Hamper */}
      <HamperSlider />

      {/* Hamper */}


      {/* Promises We keep */}

      {/* About Us */}
      <FooterCard />

    </ScrollView>
  );
}