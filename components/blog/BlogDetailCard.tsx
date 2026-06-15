import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppText from "../common/AppText";

interface NewsItem {
  id: string;
  image: string;
  location: string;
  date: string;
  title: string;
  description: string;
}

interface NewsCardProps {
  item: NewsItem;
  onPress: (item: NewsItem) => void;
}

const NewsCard: React.FC<NewsCardProps> = ({
  item,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onPress(item)}
      className="bg-white rounded-2xl overflow-hidden mb-4 border border-gray-200"
    >
      {/* Image */}
      <Image
        source={{ uri: item.image }}
        className="w-full h-52"
        resizeMode="cover"
      />

      <View className="p-4">
        {/* Location & Date */}
        <View className="flex-row items-center justify-between mb-3">
          <View className="flex-row items-center">
            <Ionicons
              name="location-outline"
              size={16}
              color="gray"
            />
            <AppText
              variant="regular"
              style={{ marginLeft: 4, color: "#6B7280" }}
            >
              {item.location}
            </AppText>
          </View>

          <View className="flex-row items-center">
            <Ionicons
              name="calendar-outline"
              size={16}
              color="gray"
            />
            <AppText
              variant="regular"
              style={{ marginLeft: 4, color: "#6B7280" }}
            >
              {item.date}
            </AppText>
          </View>
        </View>

        {/* Title */}
        <AppText
          variant="semiBold"
          style={{ fontSize: 18 }}
          numberOfLines={2}
        >
          {item.title}
        </AppText>

        {/* Description */}
        <AppText
          variant="regular"
          style={{
            color: "#6B7280",
            lineHeight: 22,
            marginBottom: 16,
          }}
          numberOfLines={3}
        >
          {item.description}
        </AppText>

        {/* Read More UI */}
        <View className="flex-row items-center justify-between bg-gray-100 px-4 py-3 rounded-xl">
          <AppText variant="medium">
            Read More
          </AppText>

          <Ionicons
            name="arrow-forward"
            size={18}
            color="#111827"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;