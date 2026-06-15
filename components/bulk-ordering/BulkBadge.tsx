import React from 'react';
import { View } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import AppText from '../common/AppText';

type FeatureBadgeProps = {
    title: string;
};

const BulkFeatureBadge = ({ title }: FeatureBadgeProps) => {
    return (
        <View className="self-start flex-row items-center rounded-full border border-white/15 bg-[#112B5B] px-5 py-3">
            <Feather name="check-circle" size={18} color="#10BFA4" />

            <AppText
                variant="regular"
                className="ml-2 text-[14px] text-[#F5E6D3]"
            >
                {title}
            </AppText>
        </View>
    );
};

export default BulkFeatureBadge;