import React from 'react';
import HamperSlider from 'components/hampers/HamperSlider';
import { FlatList, Image, ScrollView, View } from 'react-native';
import FooterCard from 'components/common/FooterCard';
import ProductRecommCard from 'components/common/ProductRecomCard';
import AppText from 'components/common/AppText';
import PromiseWeKeep from 'components/hampers/PromiseWeKeep';
import AuthHeader from 'components/auth/AuthHeader';
import { router } from 'expo-router';

export default function Hampers() {
  const recommProducts = [
    {
      id: 1,
      image: 'https://pcare.shop/_next/image?url=https%3A%2F%2Fadmin.pcare.shop%2F%2Fuploads%2Fproducts%2Fimages%2Fthe_ultimate_comfort_duo-1768913234442-906318.png&w=384&q=75',
      title: 'The Ultimate Comfort Duo',
      desc: 'Transform Your Seating Experience Turn any chair into a luxury comfort zone with The Ultimate Comfort Duo - the perfect pairing of support and softness designed for all-day comfort.',
      price: 3399,
      discountPrice: 1999,
    },
  ];
  const promisesData = [
    {
      id: "1",
      title: "Made In India",
      description:
        "We are among India's best manufacturers — crafted in INDIA to global standards.",
      icon: "ribbon-outline",
    },
    {
      id: "2",
      title: "Premium Quality",
      description:
        "Every hamper is carefully curated with premium products and strict quality checks.",
      icon: "shield-checkmark-outline",
    },
    {
      id: "3",
      title: "Fast Delivery",
      description:
        "Reliable shipping network ensuring your hampers reach safely and on time.",
      icon: "rocket-outline",
    },
  ];
  return (
    <View className="flex-1 bg-white">
      <View className="bg-[#08256E] py-3 items-center mt-8">
        <AppText
          variant="semiBold"
          className="text-white text-center text-xs"
        >
          FREE Shipping on orders above ₹699
        </AppText>
      </View>

      {/* Fixed Logo */}
      <View className="h-16 flex-row items-center px-4 bg-white">

        {/* Logo Center */}
        <View className="absolute left-0 right-0 items-center">
          <Image
            source={require('../../assets/ppluslogo.jpg')}
            style={{
              width: 100,
              height: 60,
            }}
            resizeMode="contain"
          />
        </View>
      </View>
      <ScrollView className="flex-1 bg-white"
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 30 }}>

        {/* Find You Hamper */}
        <HamperSlider />

        {/* Hamper */}
        <View className='px-5 mt-8'>
          <AppText
            variant="bold"
            className="text-2xl mb-4 w-[220px]"
          >
            Have a first look at our hampers!
          </AppText>
          <FlatList
            data={recommProducts}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{
              justifyContent: 'space-between',
            }}
            renderItem={({ item }) => (
              <ProductRecommCard
                image={item.image}
                title={item.title}
                description={item.desc}
                showDesc={true}
                price={item.price}
                discountPrice={item.discountPrice}
                onPress={() => { router.push('/product/HamperProduct') }}
              />
            )}
          />
        </View>

        {/* Promises We keep */}
        <View className='bg-[#EAF1F7] py-10 items-center'>
          <AuthHeader
            title='Promises We Keep'
            subtitle='Why Shop with Us'
            center
          />
          <FlatList
            data={promisesData}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <PromiseWeKeep
                title={item.title}
                description={item.description}
                icon={item.icon as any}
              />
            )}
            contentContainerStyle={{
              // paddingHorizontal: 16,
              // paddingVertical: 10,
            }}
          />
        </View>


        {/* About Us */}
        <FooterCard />

      </ScrollView>
    </View>

  );
}