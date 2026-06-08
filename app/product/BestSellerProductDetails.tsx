import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions,
    ScrollView,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import FeatureItem from "components/FeatureItem";
import AppText from "components/AppText";
import ColorSize from "components/ColorSize";
import AppButton from "components/AppButton";
import DeliveryLocation from "components/DeliveryLocation";
import HowToUse from "components/HowToUse";
import Divider from "components/Divider";
import ProductAccordion from "components/ProductAccordion";
import ProductHighlights from "components/ProductHighlights";
import ProductRecommCard from "components/ProductRecomCard";
import { router } from "expo-router";

const { width } = Dimensions.get("window");

export default function ProductDetails() {
    const { title, price } = useLocalSearchParams<{
        title: string;
        price: string;
    }>();

    const [selectedImage, setSelectedImage] = useState(0);

    // Static Data
    const images = [
        "https://pcare.shop/_next/image?url=https%3A%2F%2Fadmin.pcare.shop%2F%2Fuploads%2Fproducts%2Fimages%2FC3022_Round_RIng_Pillow__-_4-1768968342287-248585.png&w=1080&q=75",
        "https://pcare.shop/_next/image?url=https%3A%2F%2Fadmin.pcare.shop%2F%2Fuploads%2Fproducts%2Fimages%2FC3022_Round_RIng_Pillow__-_3-1768968342279-404930.png&w=1080&q=75",
        "https://pcare.shop/_next/image?url=https%3A%2F%2Fadmin.pcare.shop%2F%2Fuploads%2Fproducts%2Fimages%2FC3022_Round_RIng_Pillow__-_1-1768968342261-389675.png&w=1080&q=75",
        "https://pcare.shop/_next/image?url=https%3A%2F%2Fadmin.pcare.shop%2F%2Fuploads%2Fproducts%2Fimages%2FC3022_Round_RIng_Pillow_-_2-1768968342303-461279.png&w=1080&q=75",
        "https://pcare.shop/_next/image?url=https%3A%2F%2Fadmin.pcare.shop%2F%2Fuploads%2Fproducts%2Fimages%2FC3022_Round_RIng_Pillow__-_Benefits-1768968342293-118706.png&w=1080&q=75",
        "https://pcare.shop/_next/image?url=https%3A%2F%2Fadmin.pcare.shop%2F%2Fuploads%2Fproducts%2Fimages%2FC3022_Round_RIng_Pillow__-_Composition-1768968342295-227379.png&w=1080&q=75",

    ];

    const originalPrice = Number(price) + 500;
    const discountPercent = Math.round(
        ((originalPrice - Number(price)) / originalPrice) * 100
    );

    const nextImage = () => {
        if (selectedImage < images.length - 1) {
            setSelectedImage((prev) => prev + 1);
        }
    };

    const prevImage = () => {
        if (selectedImage > 0) {
            setSelectedImage((prev) => prev - 1);
        }
    };

    const recommProducts = [
        {
            id: 1,
            image:
                'https://pcare.shop/_next/image?url=https%3A%2F%2Fadmin.pcare.shop%2F%2Fuploads%2Fproducts%2Fimages%2FC3030_-_Coccyx_Cushion_Seat_-_1-1768973283114-442374.png&w=384&q=75',
            title: 'Coccyx Cushion Seat',
            price: 1849,
            discountPrice: 1100,
        },
        {
            id: 2,
            image:
                'https://pcare.shop/_next/image?url=https%3A%2F%2Fadmin.pcare.shop%2F%2Fuploads%2Fproducts%2Fimages%2FB2004_-_Comfort_Arm_Sling_-_1-1777543900042-070528.png&w=384&q=75',
            title: 'Arm Sling',
            price: 499,
            discountPrice: 399,
        },
        {
            id: 3,
            image:
                'https://pcare.shop/_next/image?url=https%3A%2F%2Fadmin.pcare.shop%2F%2Fuploads%2Fproducts%2Fimages%2Fcast_shoes_1-1777544957567-296014.png&w=384&q=75',
            title: 'Cast Shoes',
            price: 699,
            discountPrice: 575,
        },
        {
            id: 4,
            image:
                'https://pcare.shop/_next/image?url=https%3A%2F%2Fadmin.pcare.shop%2F%2Fuploads%2Fproducts%2Fimages%2FCollar___Cuff_1-1777543024717-393685.png&w=384&q=75',
            title: 'Collar & Cuff',
            price: 349,
            discountPrice: 249,
        },
    ];

    return (
        <ScrollView className="flex-1 bg-white">
            {/* Main Image */}
            <View className="relative mt-8x">
                <Image
                    source={{ uri: images[selectedImage] }}
                    style={{
                        width,
                        height: 350,
                    }}
                    resizeMode="cover"
                />

                {/* Left Arrow */}
                <TouchableOpacity
                    onPress={prevImage}
                    disabled={selectedImage === 0}
                    className="absolute left-4 top-[45%] bg-white p-3 rounded-full"
                >
                    <Ionicons name="chevron-back" size={24} />
                </TouchableOpacity>

                {/* Right Arrow */}
                <TouchableOpacity
                    onPress={nextImage}
                    disabled={selectedImage === images.length - 1}
                    className="absolute right-4 top-[45%] bg-white p-3 rounded-full"
                >
                    <Ionicons name="chevron-forward" size={24} />
                </TouchableOpacity>
            </View>

            {/* Thumbnails */}
            <FlatList
                horizontal
                data={images}
                keyExtractor={(_, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingVertical: 16,
                }}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => setSelectedImage(index)}
                    >
                        <Image
                            source={{ uri: item }}
                            style={{
                                width: 75,
                                height: 75,
                                borderRadius: 10,
                                marginRight: 10,
                                borderWidth: selectedImage === index ? 2 : 1,
                            }}
                        />
                    </TouchableOpacity>
                )}
            />

            {/* Product Details */}
            <View className="px-5 pb-10">
                <AppText
                    variant="semiBold"
                    className="text-3xl color-[#08256E]"
                >
                    {title}
                </AppText>

                <View className="mt-1 flex-row items-center">
                    <AppText
                        variant="semiBold"
                        className="text-3xl color-[#08256E]"
                    >
                        ₹{price}
                    </AppText>

                    <Text className="ml-3 text-lg  line-through">

                    </Text>
                    <AppText
                        variant="semiBold"
                        className="text-m text-gray-400 line-through mt-1"
                    >
                        ₹{originalPrice}
                    </AppText>
                    <AppText
                        variant="semiBold"
                        className="ml-3 font-bold text-green-600 mt-1"
                    >
                        {discountPercent}% OFF
                    </AppText>
                </View>

                {/* Features */}
                <View>
                    <AppText
                        variant="semiBold"
                        className="text-2xl mt-4"
                    >
                        Features
                    </AppText>
                    <View className="flex-row justify-between px-4">
                        <FeatureItem
                            image="https://pcare.shop/_next/image?url=https%3A%2F%2Fadmin.pcare.shop%2F%2Fuploads%2Fusage-benefits%2Fb1-1768975024396-512104.png&w=96&q=75"
                            title="Pain Relief"
                        />

                        <FeatureItem
                            image="https://pcare.shop/_next/image?url=https%3A%2F%2Fadmin.pcare.shop%2F%2Fuploads%2Fusage-benefits%2Fimproved_posture-1768974999160-792402.png&w=96&q=75"
                            title="Improved Posture"
                        />

                        <FeatureItem
                            image="https://pcare.shop/_next/image?url=https%3A%2F%2Fadmin.pcare.shop%2F%2Fuploads%2Fusage-benefits%2FAids_post-surgical_recovery-1768824182863-350518.png&w=96&q=75"
                            title="Aids Post"
                        />
                    </View>
                    <ColorSize />
                    <View className="w-[100%] self-center mb-10">
                        <AppButton title="Add to Cart" type="primary" onPress={() => { router.push("/product/Cart"); }} />
                    </View>

                    <View className="flex-1 bg-white">
                        <DeliveryLocation />
                    </View>

                    <View className="py-2">
                        <HowToUse />
                    </View>

                    <Divider />

                    <View className="flex-row justify-between">
                        <FeatureItem
                            image="data:image/png;base64,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"
                            title="15 days return"
                        />

                        <FeatureItem
                            image="data:image/jpeg;base64,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"
                            title="Free Delivery"
                        />

                        <FeatureItem
                            image="data:image/jpeg;base64,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"
                            title="Secure Payment"
                        />
                    </View>

                    <ProductAccordion />

                    <ProductHighlights />

                    <View>
                        <AppText
                            variant="bold"
                            className="text-black text-3xl mb-4"
                        >
                            Related Products
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
                                    price={item.price}
                                    discountPrice={item.discountPrice}
                                    onPress={() => console.log(item.title)}
                                />
                            )}
                        />
                    </View>
                </View>



            </View>

            {/* About Us */}
            <View className="bg-[#08256E] w-full h-600" >
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
    );
}