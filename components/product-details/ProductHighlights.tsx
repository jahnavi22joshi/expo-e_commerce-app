import React from "react";
import {
    View,
    Text,
    Image,
    FlatList,
} from "react-native";
import AppText from "../common/AppText";

interface HighlightItem {
    id: string;
    image: string;
    title: string;
    description: string;
}

const highlights: HighlightItem[] = [
    {
        id: "1",
        image:
            "https://cdn-icons-png.flaticon.com/512/2966/2966327.png",
        title: "Pain Relief",
        description:
            "Provides quick and effective pain relief.",
    },
    {
        id: "2",
        image:
            "https://cdn-icons-png.flaticon.com/512/3655/3655567.png",
        title: "100% Natural",
        description:
            "Made using natural and safe ingredients.",
    },
    {
        id: "3",
        image:
            "https://cdn-icons-png.flaticon.com/512/4320/4320371.png",
        title: "Fast Recovery",
        description:
            "Supports quicker recovery and comfort.",
    },
    {
        id: "4",
        image:
            "https://cdn-icons-png.flaticon.com/512/1048/1048941.png",
        title: "Easy To Use",
        description:
            "Simple application for daily use.",
    },
    {
        id: "5",
        image:
            "https://cdn-icons-png.flaticon.com/512/2913/2913465.png",
        title: "Long Lasting",
        description:
            "Provides long-lasting effectiveness.",
    },
];

const ProductHighlights = () => {
    const renderItem = ({ item }: { item: HighlightItem }) => (
        <View className="mb-3 flex-row items-center rounded-2xl border border-gray-300 bg-white p-4">

            <Image
                source={{ uri: item.image }}
                className="h-16 w-16 rounded-xl"
                resizeMode="contain"
            />

            <View className="ml-4 flex-1">
                <AppText
                    variant="semiBold"
                    className="text-black text-xl"
                >
                    {item.title}
                </AppText>
                <AppText
                    variant="regular"
                    className="text-black text-sm"
                >
                    {item.description}
                </AppText>
            </View>

        </View>
    );

    return (
        <View className="my-8">
            <AppText
                variant="bold"
                className="text-black text-3xl mb-4"
            >
                Product Highlights
            </AppText>
            <FlatList
                data={highlights}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                scrollEnabled={false}
            />
        </View>
    );
};

export default ProductHighlights;