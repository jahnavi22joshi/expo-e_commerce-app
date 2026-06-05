import React from "react";
import { View, Text, Image } from "react-native";
import AppText from "./AppText";

interface FeatureItemProps {
    image: string;
    title: string;
}

const FeatureItem = ({
    image,
    title,
}: FeatureItemProps) => {
    return (
        <View className="items-center">
            <View className="w-28 h-20 bg-[#ffffff] items-center justify-center">
                <Image
                    source={{ uri: image }}
                    className="w-14 h-14"
                    resizeMode="contain"
                />
            </View>
            <AppText
                variant="regular"
                className="text-black text-center text-base"
            >
               {title}
            </AppText>
        </View>
    );
};

export default FeatureItem;