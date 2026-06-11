import React from 'react';
import { View } from 'react-native';
import AppText from './AppText';

type Props = {
  step: string;
  title: string;
  description: string;
};

const StepCard = ({
  step,
  title,
  description,
}: Props) => {
  return (
    <View className="items-center bg-[#081F4D] mt-10">
      {/* Circle */}
      <View className="h-24 w-24 rounded-full border border-[#0F6F73] items-center justify-center">
        <AppText
          variant="bold"
          className="text-[#13B09C] text-[22px]"
        >
          {step}
        </AppText>
      </View>

      {/* Title */}
      <AppText
        variant="bold"
        className="mt-8 text-center text-white text-[20px]"
      >
        {title}
      </AppText>

      {/* Description */}
      <AppText
        variant="regular"
        className="mt-4 text-center text-[#8A96B2] text-[16px] leading-8"
      >
        {description}
      </AppText>
    </View>
  );
};

export default StepCard;