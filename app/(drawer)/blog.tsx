import { View, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import AppText from 'components/common/AppText';
import NewsCard from 'components/blog/BlogDetailCard';
import FooterCard from 'components/common/FooterCard';
import AuthHeader from 'components/auth/AuthHeader';
import { router } from 'expo-router';

const DATA = [
  {
    id: "1",
    image: "https://pcare.shop/_next/image?url=https%3A%2F%2Fadmin.pcare.shop%2F%2Fuploads%2Fblogs%2F984a323a-1b79-4287-be2d-6dfc306f2ca1__1_-1776067360948-336851.png&w=1600&q=75",
    location: "Vadodara",
    date: "12 Jun 2026",
    title: "Riverfront Development Project Updates",
    description:
      "The city administration has announced new updates regarding the riverfront development project aimed at improving tourism and public facilities.",
  },
  {
    id: "2",
    image: "https://pcare.shop/_next/image?url=https%3A%2F%2Fadmin.pcare.shop%2F%2Fuploads%2Fblogs%2Flow_back_pain-1774324986805-908481.png&w=1600&q=75",
    location: "Surat",
    date: "13 Jun 2026",
    title: "Smart City Initiative Expansion",
    description:
      "Several new infrastructure projects have been approved under the smart city initiative to improve transportation and digital services.",
  },
  {
    id: "1",
    image: "https://pcare.shop/_next/image?url=https%3A%2F%2Fadmin.pcare.shop%2F%2Fuploads%2Fblogs%2Fslip_disc-1773300865073-853626.png&w=1600&q=75",
    location: "Vadodara",
    date: "12 Jun 2026",
    title: "Riverfront Development Project Updates",
    description:
      "The city administration has announced new updates regarding the riverfront development project aimed at improving tourism and public facilities.",
  },
  {
    id: "2",
    image: "https://pcare.shop/_next/image?url=https%3A%2F%2Fadmin.pcare.shop%2F%2Fuploads%2Fblogs%2Fsciatica-1772798486930-095198.png&w=1600&q=75",
    location: "Surat",
    date: "13 Jun 2026",
    title: "Smart City Initiative Expansion",
    description:
      "Several new infrastructure projects have been approved under the smart city initiative to improve transportation and digital services.",
  },
  {
    id: "1",
    image: "https://pcare.shop/_next/image?url=https%3A%2F%2Fadmin.pcare.shop%2F%2Fuploads%2Fblogs%2FElderly_Mobility_Problems-_Balance__Joint_Support__and_Maintaining_Independent_Living-1771923955665-558386.jpg&w=1600&q=75",
    location: "Vadodara",
    date: "12 Jun 2026",
    title: "Riverfront Development Project Updates",
    description:
      "The city administration has announced new updates regarding the riverfront development project aimed at improving tourism and public facilities.",
  },
  {
    id: "2",
    image: "https://pcare.shop/_next/image?url=https%3A%2F%2Fadmin.pcare.shop%2F%2Fuploads%2Fblogs%2FBone_Health-1771244366502-217407.jpg&w=1600&q=75",
    location: "Surat",
    date: "13 Jun 2026",
    title: "Smart City Initiative Expansion",
    description:
      "Several new infrastructure projects have been approved under the smart city initiative to improve transportation and digital services.",
  },
];

const Blog = () => {
  const handleReadMore = (item: any) => {
    console.log(item);
    router.push('/blog/Blogs')
  };
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

      <ScrollView>
        <View className='bg-[#000000] max-w-7xl mx-auto px-6 py-16 md:py-24'>
          <AuthHeader
            title='Resource Hub'
            subtitle='Discover expert orthopedic guides, rehabilitation tips, product comparisons, and health journals curated by our specialists. From everyday joint care advice to post-surgery recovery support, explore braces, supports, mobility aids, and wellness insights to help you move better and live pain-free.'
            titleColor='text-white'
            subtitleColor='text-white'
          />
        </View>

        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <NewsCard
              item={item}
              onPress={handleReadMore}
            />
          )}
          contentContainerStyle={{
            padding: 16,
            paddingBottom: 120,

          }}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <View className="mt-4 -mx-5 -mb-10">
              <FooterCard />
            </View>
          }
        />
      </ScrollView>






    </View>
  )
}

export default Blog