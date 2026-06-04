import { AntDesign } from '@expo/vector-icons';
import AppButton from 'components/AppButton';
import AppText from 'components/AppText';
import AuthHeader from 'components/AuthHeader';
import BlogCard from 'components/BlogCard';
import Divider from 'components/Divider';
import ProductCard from 'components/ProductCard';
import TestimonialCard from 'components/TestimonialCard';
import { TEXT } from 'constants/text';
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  TextInput,
  Animated,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

export default function Search() {
  const [selectedTab, setSelectedTab] = useState('category');
  const { width } = Dimensions.get('window');
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchVisible, setSearchVisible] = useState(false);
  useEffect(() => {
    setSearchVisible(true);
  }, []);
  const banners = [
    {
      id: 1,
      image: require('../../assets/images/banners/banner1.jpg'),
    },
    {
      id: 2,
      image: require('../../assets/images/banners/banner2.jpg'),
    },
    {
      id: 3,
      image: require('../../assets/images/banners/banner3.jpg'),
    },
  ];
  const categories = [
    {
      id: 1,
      title: 'Ankle',
      image: require('../../assets/images/category/ankle.jpg'),
    },
    {
      id: 2,
      title: 'Back',
      image: require('../../assets/images/category/back.jpg'),
    },
    {
      id: 3,
      title: 'Chest',
      image: require('../../assets/images/category/chest.jpg'),
    },
    {
      id: 4,
      title: 'Knee',
      image: require('../../assets/images/category/knee.jpg'),
    },
    {
      id: 5,
      title: 'Wrist',
      image: require('../../assets/images/category/wrist.jpg'),
    },
  ];
  const products = [
    {
      id: 1,
      image: require('../../assets/images/best-sellers/ringPellow.jpg'),
      title:
        'Round Ring Pillow',
      rating: 4.6,
      reviews: 30,
      price: 1149,
    },
    {
      id: 2,
      image: require('../../assets/images/best-sellers/ankle.jpg'),
      title:
        'Ankle Wrap',
      rating: 4.5,
      reviews: 22,
      price: 150,
    },
    {
      id: 3,
      image: require('../../assets/images/best-sellers/elbow.jpg'),
      title:
        'Designer Elbow Sleeves',
      rating: 4.8,
      reviews: 45,
      price: 325,
    },
    {
      id: 4,
      image: require('../../assets/images/best-sellers/kneesupport.jpg'),
      title:
        'Knee Flex Pro | Compression Knee Support with Patella Gel Pad',
      rating: 4.6,
      reviews: 30,
      price: 799,
    },
  ];
  const activities = [
    {
      id: 1,
      title: 'Running',
      image: require('../../assets/images/category/running.jpg'),
    },
    {
      id: 2,
      title: 'Tennis',
      image: require('../../assets/images/category/tennis.jpg'),
    },
    {
      id: 3,
      title: 'Weight-Lifting',
      image: require('../../assets/images/category/weights.jpg'),
    },
    {
      id: 1,
      title: 'Running',
      image: require('../../assets/images/category/running.jpg'),
    },
    {
      id: 2,
      title: 'Tennis',
      image: require('../../assets/images/category/tennis.jpg'),
    },
    {
      id: 3,
      title: 'Weight-Lifting',
      image: require('../../assets/images/category/weights.jpg'),
    },
  ];
  const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    const result: T[][] = [];

    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }

    return result;
  };

  const groupedActivities = chunkArray(activities, 2);

  const testimonials = [
    {
      id: 1,
      title: "Significant difference in recovery",
      description:
        "p+care orthopedic supports have made a significant difference in my recovery. The quality and comfort are unmatched. I highly recommend their products!",
      name: "Mr. Rahul Mahant (Cuttack)",
      rating: 5,
    },
    {
      id: 2,
      title: "Very comfortable product",
      description:
        "The support is excellent and helped me in pain relief. Highly recommended for daily use.",
      name: "Mrs. Anita Sharma (Delhi)",
      rating: 5,
    },
    {
      id: 3,
      title: "Best quality supports",
      description:
        "I have tried many brands but p+care is the most comfortable and durable.",
      name: "Mr. Raj Mehta (Ahmedabad)",
      rating: 4,
    },
    {
      id: 1,
      title: "Significant difference in recovery",
      description:
        "p+care orthopedic supports have made a significant difference in my recovery. The quality and comfort are unmatched. I highly recommend their products!",
      name: "Mr. Rahul Mahant (Cuttack)",
      rating: 5,
    },
    {
      id: 2,
      title: "Very comfortable product",
      description:
        "The support is excellent and helped me in pain relief. Highly recommended for daily use.",
      name: "Mrs. Anita Sharma (Delhi)",
      rating: 5,
    },
    {
      id: 3,
      title: "Best quality supports",
      description:
        "I have tried many brands but p+care is the most comfortable and durable.",
      name: "Mr. Raj Mehta (Ahmedabad)",
      rating: 4,
    },
  ];

  const blogs = [
    {
      id: 1,
      image: 'https://www.shutterstock.com/image-photo/happy-beautiful-young-latin-doctor-260nw-2389637557.jpg',
      title: 'Managing Knee Pain Effectively',
      expDesc:
        'Orthopedic specialists recommend early support and daily exercises to reduce knee strain and improve mobility.',
    },
    {
      id: 2,
      image: 'https://www.shutterstock.com/image-photo/happy-diverse-female-doctor-patient-260nw-2670524575.jpg',
      title: 'Recovering from Ankle Injuries',
      expDesc:
        'Proper ankle support and controlled movement can help patients recover faster and prevent re-injury.',
    },
    {
      id: 3,
      image: 'https://thumbs.dreamstime.com/b/cheerful-senior-indian-doctor-shaking-hands-younger-patient-smiling-laughing-discussing-successful-treatment-therapy-success-297650962.jpg',
      title: 'Tips for Elbow Joint Care',
      expDesc:
        'Doctors advise avoiding repetitive stress and using compression support during physical activities.',
    },
    {
      id: 4,
      image: 'https://www.shutterstock.com/image-photo/indian-asian-male-doctor-walks-260nw-2596976455.jpg',
      title: 'Protecting Your Joints Daily',
      expDesc:
        'Maintaining good posture, staying active, and using orthopedic aids can improve long-term joint health.',
    },
  ];
  const slideAnim = useRef(new Animated.Value(-120)).current;


  return (
    <View className="flex-1 bg-white">
      <Animated.View
        style={{
          transform: [{ translateY: slideAnim }],
        }}
        className="absolute top-0 left-0 right-0 z-50 bg-white pt-14 pb-4 px-4 shadow"
      >
        <View className="flex-row items-center">
          <TouchableOpacity className="mr-3">
            {/* Close Icon */}
          </TouchableOpacity>

          <TextInput
            autoFocus
            placeholder="Search products..."
            className="flex-1 h-12 border border-gray-300 rounded-xl px-4"
          />
        </View>
      </Animated.View>
      <View className="bg-[#08256E] py-3 items-center mt-8">
        <AppText
          variant="semiBold"
          className="text-white text-center text-xs"
        >
          FREE Shipping on orders above ₹699
        </AppText>
      </View>

      {/* Fixed Logo */}
      <View className="items-center">
        <Image
          source={require('../../assets/ppluslogo.jpg')}
          style={{
            width: 100,
            height: 60,
          }}
          resizeMode="contain"
        />
      </View>
      <ScrollView
        className="flex-1 bg-white"
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 30 }}
      >
        {/* Banner */}
        <View className="mt-2">
          <Carousel
            loop
            width={width}
            height={190}
            autoPlay
            autoPlayInterval={3000}
            data={banners}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => setActiveIndex(index)}
            renderItem={({ item }) => {

              return (
                <Image
                  source={item.image}
                  style={{
                    width: width,
                    height: 190,
                  }}
                />
              );
            }}
          />
        </View>

        {/* Dots */}
        <View className="flex-row justify-center mt-3">
          {banners.map((_, index) => (
            <View
              key={index}
              className={`mx-1 rounded-full ${activeIndex === index
                ? 'bg-gray-800 w-3 h-3'
                : 'bg-gray-300 w-2 h-2'
                }`}
            />
          ))}
        </View>

        {/* Tabs */}
        <View className="flex-row justify-center mt-8 border-b border-gray-200">
          <TouchableOpacity
            onPress={() => setSelectedTab('category')}
            className="pb-3 px-5 relative"
          >
            <AppText
              variant={selectedTab === 'category' ? 'semiBold' : 'regular'}
              className="text-lg"
            >
              Shop by Category
            </AppText>

            {selectedTab === 'category' && (
              <View className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSelectedTab('concern')}
            className="pb-3 px-5 relative"
          >
            <AppText
              variant={selectedTab === 'concern' ? 'semiBold' : 'regular'}
              className="text-lg"
            >
              Shop by Concern
            </AppText>

            {selectedTab === 'concern' && (
              <View className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />
            )}
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View className="mt-6">
          <Carousel
            loop
            autoPlay
            autoPlayInterval={2500}
            width={115}
            height={140}
            data={categories}
            pagingEnabled={false}
            snapEnabled={false}
            style={{
              width,
            }}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.9}
                className="mx-1"
              >
                <View className="w-[105px] h-[135px] rounded-[18px] overflow-hidden bg-gray-200">
                  <Image
                    source={item.image}
                    className="flex-1"
                    resizeMode="cover"
                  />

                  <View className="absolute bottom-0 left-0 right-0 bg-[#7B7B7B]/90 py-3">
                    <AppText
                      variant="semiBold"
                      className="text-white text-center text-base"
                    >
                      {item.title}
                    </AppText>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Best Sellers Products List */}
        <View>
          <View className="mt-10 mb-8" >
            <AuthHeader
              title={TEXT.home.bestSellers}
              subtitle={TEXT.home.bestSellersDesc}
              center
            />
          </View>

          <FlatList
            data={products}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{
              justifyContent: 'space-between',
            }}
            renderItem={({ item }) => (
              <ProductCard {...item} />
            )}
          />

          <View className="w-[60%] self-center mb-10">
            <AppButton title="View All Essentials" type="outline" />
          </View>
        </View>

        {/* Shop By Activities */}
        <View className="mt-10 mb-8 px-4" >
          <AppText
            variant="bold"
            className="text-[30px] text-black"
          >
            Shop By Activities
          </AppText>

          <Divider />

          <View className="mt-4 mb-8 w-full" >
            <Carousel
              loop
              autoPlay
              autoPlayInterval={2500}
              width={width}
              height={220}
              data={groupedActivities}
              renderItem={({ item }) => (
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10 }}>

                  {item.map((activity, index) => (
                    <TouchableOpacity key={index} activeOpacity={0.9}>
                      <View
                        style={{
                          width: width / 2.2,
                          height: 200,
                          borderRadius: 18,
                          overflow: "hidden",
                          backgroundColor: "#E5E7EB",
                        }}
                      >
                        <Image
                          source={activity.image}
                          style={{ width: "100%", height: "100%" }}
                          resizeMode="cover"
                        />

                        <View className="absolute bottom-0 left-0 right-0 bg-[#7B7B7B]/90 py-3">
                          <AppText
                            variant="semiBold"
                            className="text-white text-center text-base"
                          >
                            {activity.title}
                          </AppText>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))}

                </View>
              )}
            />

          </View>
        </View>


        {/* Customer Review */}
        <View className="bg-[#08256E] w-full h-600" >
          <View className="mt-16 mb-6" >
            <AuthHeader
              title={TEXT.home.custmoreReviewsHeader}
              subtitle={TEXT.home.customerReviewsDesc}
              center
              titleColor="text-white"
              subtitleColor="text-gray-300" />

            <View className="mt-8 mb-12" >
              <FlatList
                data={testimonials}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <TestimonialCard item={item} />}
                showsHorizontalScrollIndicator={false}
              />
            </View>


          </View>

        </View>

        {/* Blog */}
        <View className='mt-16 mb-6'>
          <AuthHeader
            title="Health & Wellness Blog"
            subtitle="Expert advice, patient stories, and the latest in orthopedic care and mobility solutions"
            center
            titleColor="text-black"
            subtitleColor="text-gray-500"
          />

          <FlatList
            data={blogs}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{
              paddingHorizontal: 16,
              marginBottom: 20,
            }}
            renderItem={({ item }) => (
              <BlogCard {...item}
              />
            )}
          />

        </View>

        {/* About Us */}
        <View className="bg-[#08256E] w-full h-600 mb-20" >
          <View className="mt-12 mb-6 mx-4" >

            <AppText
              variant="bold"
              className="text-3xl text-white"
            >
              p+ care
            </AppText>

            <AppText
              variant="regular"
              className="text-xl text-gray-400"
            >
              p+care is an orthopedic and rehabilitation brand committed to enhancing comfort, mobility, and recovery through high-quality supports, braces, and wellness solutions. Designed with care and trusted by professionals, our products help people move better and live healthier every day.
            </AppText>


            <View className="flex-row gap-2 mt-3">
              <TouchableOpacity className="w-8 h-8 rounded-full bg-[#2A4A95] items-center justify-center">
                <AntDesign name="instagram" size={16} color="#fff" />
              </TouchableOpacity>

              <TouchableOpacity className="w-8 h-8 rounded-full bg-[#2A4A95] items-center justify-center">
                <AntDesign name="youtube" size={16} color="#fff" />
              </TouchableOpacity>
            </View>

            <Divider />

            <AppText
              variant="regular"
              className="text-s text-gray-500 text-center"
            >
              @2024 p+care. All rights reserved.
            </AppText>
          </View>
        </View>




      </ScrollView>
    </View>

  );
}