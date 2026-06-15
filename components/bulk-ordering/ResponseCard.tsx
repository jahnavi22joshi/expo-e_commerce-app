import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import AppText from '../common/AppText';

type ResponseCardProps = {
  title: string;
  description: string;
};

const ResponseCard = ({
  title,
  description,
}: ResponseCardProps) => {
  return (
    <View className="flex-row items-start">
      <View className="h-12 w-12 rounded-2xl bg-[#DDE8E8] items-center justify-center">
        <Feather
          name="phone-call"
          size={22}
          color="#118C7E"
        />
      </View>

      <View className="flex-1 ml-4">
        <AppText
          variant="bold"
          className="text-[#0B1F4D] text-[20px]"
        >
          {title}
        </AppText>

        <AppText
          variant="regular"
          className="mt-1 text-[#6B7280] text-[16px] leading-7"
        >
          {description}
        </AppText>
      </View>
    </View>
  );
};

export default ResponseCard;