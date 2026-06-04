import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import AppText from './AppText';

interface BlogCardProps {
    image: any;
    title: string;
    expDesc: string;
    onPress?: () => void;
}

export default function BlogCard({
    image,
    title,
    expDesc,
    onPress,
}: BlogCardProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={onPress}
            className="w-[270px] mx-3 mt-8"
        >
            {/* Image */}
            <Image
                source={{uri: image}}
                className="w-full h-[180px] rounded-[18px]"
                resizeMode="cover"
            />

            {/* Title */}
            <AppText
                variant="medium"
                className="text-[15px] text-[#2A2A2A] mt-3 leading-7"
            >
                {title}
            </AppText>

            {/* Price */}
            <AppText
                variant="semiBold"
                className="text-[18px] text-black mt-2"
            >
                {expDesc}
            </AppText>
        </TouchableOpacity>
    );
}