import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import AppText from 'components/AppText'
import { Feather, Octicons } from '@expo/vector-icons'
import AppButton from 'components/AppButton'
import Divider from 'components/Divider'
import AuthHeader from 'components/AuthHeader'
import ProductRecommCard from 'components/ProductRecomCard'
import { router } from 'expo-router'
import FooterCard from 'components/FooterCard'

const HamperProduct = () => {
  const recommProducts = [
    {
      id: 1,
      image: 'https://pcare.shop/_next/image?url=https%3A%2F%2Fadmin.pcare.shop%2F%2Fuploads%2Fproducts%2Fimages%2FC3030_-_Coccyx_Cushion_Seat_-_1-1768973283114-442374.png&w=384&q=75',
      title: 'The Ultimate Comfort Duo',
      desc: 'Transform Your Seating Experience Turn any chair into a luxury comfort zone with The Ultimate Comfort Duo - the perfect pairing of support and softness designed for all-day comfort.',
      price: 3399,
      discountPrice: 1999,
    },
    {
      id: 2,
      image: 'https://pcare.shop/_next/image?url=https%3A%2F%2Fadmin.pcare.shop%2F%2Fuploads%2Fproducts%2Fimages%2FA1020_-_Posture_Back_Support_Brace_-_2-1768976340382-123729.png&w=384&q=75',
      title: 'The Ultimate Comfort Duo',
      desc: 'Transform Your Seating Experience Turn any chair into a luxury comfort zone with The Ultimate Comfort Duo - the perfect pairing of support and softness designed for all-day comfort.',
      price: 3399,
      discountPrice: 1999,
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
      <ScrollView>
        <View className="items-center">
          <Image
            source={{ uri: 'https://pcare.shop/_next/image?url=https%3A%2F%2Fadmin.pcare.shop%2F%2Fuploads%2Fproducts%2Fimages%2Fthe_ultimate_comfort_duo-1768913234442-906318.png&w=1080&q=75' }}
            style={{
              width: 350,
              height: 350,
            }}
            resizeMode="contain"
          />
        </View>
        <View className='mx-4'>
          <View className='flex-row'>
            <Feather name="gift" size={22} color="#6B7280" />
            <AppText className='mt-1 ml-2 text-gray-600' variant='semiBold'>
              ORTHOPEDIC HAMPER
            </AppText>
          </View>
          <AppText className='mt-2 text-black text-2xl' variant='bold'>
            The Ultimate Comfort Duo 
          </AppText>
          <AppText className='mt-3 text-gray-600 text-m' variant='regular'>
            Transform Your Seating Experience
          </AppText>

          <AppText className='mt-4 text-gray-600 text-m' variant='semiBold'>
            ✨ What’s Included:
          </AppText>
          <AppText className='mt-4 text-gray-600 text-m' variant='regular'>
            🟩 Premium {' '}
            <AppText className='mt-4 text-black text-m' variant='bold'>
              Coccyx Cushion Seat {' '}
              <AppText className='mt-4 text-gray-600 text-m' variant='regular'>
                Pillow
              </AppText>
            </AppText>
          </AppText>
          <AppText className='mt-4 text-gray-600 text-m' variant='regular'>
            Designed to relieve pressure on your tailbone, improve posture, and reduce lower-back discomfort — ideal for long hours of sitting at your desk, driving, gaming, or lounging.
          </AppText>
          <AppText className='mt-4 text-black text-m' variant='bold'>
            🟦 Back Rest {' '}
            <AppText className='mt-4 text-gray-600 text-m' variant='regular'>
              Pillow
            </AppText>
          </AppText>
          <AppText className='mt-4 text-gray-600 text-m' variant='regular'>
            Supports your entire back from lumbar to shoulders, encouraging proper spinal alignment and soothing tension so you can feel relaxed and focused.
          </AppText>

          <View className="bg-[#F3F4F6] rounded-2xl px-4 py-4 mt-4">
            {/* MRP */}
            <View className="flex-row justify-between items-center">
              <AppText
                variant="regular"
                className="text-[16px] text-[#374151]"
              >
                MRP:
              </AppText>

              <AppText
                variant="medium"
                className="text-[16px] text-[#6B7280] line-through"
              >
                ₹3399
              </AppText>
            </View>

            {/* Hamper Price */}
            <View className="flex-row justify-between items-center mt-2">
              <AppText
                variant="bold"
                className="text-[20px] text-black"
              >
                Hamper Price:
              </AppText>

              <AppText
                variant="bold"
                className="text-[22px] text-black"
              >
                ₹1999
              </AppText>
            </View>

            {/* Savings */}
            <View className="flex-row justify-between items-center mt-2">
              <AppText
                variant="medium"
                className="text-[16px] text-[#16A34A]"
              >
                You Save:
              </AppText>

              <AppText
                variant="bold"
                className="text-[20px] text-[#16A34A]"
              >
                ₹1400
              </AppText>
            </View>
          </View>


          <View className='flex-row mt-5'>
            <Octicons name="container" size={20} color={'#6B7280'} />
            <AppText className='mt-1 ml-2 text-gray-600' variant='semiBold'>
              Contains 2 premium products
            </AppText>
          </View>

          <AppButton
            title='Add to Card'
            type='primary'
            onPress={() => {router.push("/product/Cart");}}
          />

          <View className='my-8'>
            <Divider />
          </View>


          <AuthHeader
            title='Products in this Hamper'
            subtitle='Each product is carefully selected to complement the others'
            center
          />

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
              onPress={() => { router.push('/product/BestSellerProductDetails') }}
              />
            )}
          />

          <AppText className='text-center mb-6 text-gray-600 text-m' variant='semiBold'>
            MRP: {' '}
            <AppText className='mt-4 text-black text-m' variant='semiBold'>
              ₹ 3998

            </AppText>
          </AppText>

          <View className='mb-10 bg-green-50 border border-green-200 rounded-lg px-4 py-4 inline-block'>

            <AppText className='text-green-800 font-medium text-center'>
              🎉 Save ₹1400 on this hamper!

            </AppText>
          </View>



        </View>


        <FooterCard />


      </ScrollView>

    </View>
  )
}

export default HamperProduct