import React from 'react';
import { View } from 'react-native';
import AppText from 'components/common/AppText';
import AnimatedCounter from './AnimatedCounter';

type Props = {
  count: number;
  title: string;
  suffix?: string;
};

const StatsCard = ({
  count,
  title,
  suffix = '+',
}: Props) => {
  return (
    <View className="bg-white border border-[#E5E7EB] rounded-[20px] py-10 px-6 items-center justify-center">
      <AnimatedCounter
        end={count}
        suffix={suffix}
      />

      <AppText
        variant="medium"
        className="text-[#64748B] text-center"
      >
        {title}
      </AppText>
    </View>
  );
};

export default StatsCard;