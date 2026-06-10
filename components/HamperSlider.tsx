import React, { useState } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, Pressable } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Ionicons from '@expo/vector-icons/Ionicons';
import AppText from './AppText';
import AuthHeader from './AuthHeader';

const { width } = Dimensions.get('window');

const data = [
    {
        id: 1,
        title: 'Chest',
        image: 'https://picsum.photos/400/600?1',
    },
    {
        id: 2,
        title: 'Elbow',
        image: 'https://picsum.photos/400/600?2',
    },
    {
        id: 3,
        title: 'Knee',
        image: 'https://picsum.photos/400/600?3',
    },
    {
        id: 4,
        title: 'Back',
        image: 'https://picsum.photos/400/600?4',
    },
    {
        id: 1,
        title: 'Chest',
        image: 'https://picsum.photos/400/600?1',
    },
    {
        id: 2,
        title: 'Elbow',
        image: 'https://picsum.photos/400/600?2',
    },
    {
        id: 3,
        title: 'Knee',
        image: 'https://picsum.photos/400/600?3',
    },
    {
        id: 4,
        title: 'Back',
        image: 'https://picsum.photos/400/600?4',
    },
    {
        id: 1,
        title: 'Chest',
        image: 'https://picsum.photos/400/600?1',
    },
    {
        id: 2,
        title: 'Elbow',
        image: 'https://picsum.photos/400/600?2',
    },
    {
        id: 3,
        title: 'Knee',
        image: 'https://picsum.photos/400/600?3',
    },
    {
        id: 4,
        title: 'Back',
        image: 'https://picsum.photos/400/600?4',
    },
];

export default function HamperSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = React.useRef<any>(null);

    return (

        <View className='bg-[#EAF1F7] px-4 py-8'>
            <AuthHeader
                title='FIND YOUR HAMPER'
                subtitle='Curated orthopedic care bundles for every need.
Shop by body part, activity or product line.'
                center
            />
            <View className="mt-6">
                <Carousel
                    ref={carouselRef}
                    loop
                    autoPlay
                    autoPlayInterval={2500}
                    width={115}
                    height={140}
                    data={data}
                    pagingEnabled={false}
                    snapEnabled={false}
                    onSnapToItem={(index) => {
                        setActiveIndex(index);
                    }}
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
                                    source={{ uri: item.image }}
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


            {/* Left Button */}
            <TouchableOpacity
                className="absolute left-2 top-[75%] bg-[#162868] h-8 w-8 rounded-full items-center justify-center"
                onPress={() => carouselRef.current?.prev()}
            >
                <Ionicons name="chevron-back" size={18} color="white" />
            </TouchableOpacity>

            {/* Right Button */}
            <TouchableOpacity
                className="absolute right-2 top-[75%] bg-[#162868] h-8 w-8 rounded-full items-center justify-center"
                onPress={() => carouselRef.current?.next()}
            >
                <Ionicons name="chevron-forward" size={18} color="white" />
            </TouchableOpacity>


            {/* Dots */}
            <View className="flex-row justify-center mt-5">
                {data.map((_, index) => (
                    <View
                        key={index}
                        className={`mx-1 rounded-full ${activeIndex === index
                            ? 'bg-[#162868] w-6 h-2'
                            : 'bg-gray-300 w-2 h-2'
                            }`}
                    />
                ))}
            </View>

        </View>
    );
}