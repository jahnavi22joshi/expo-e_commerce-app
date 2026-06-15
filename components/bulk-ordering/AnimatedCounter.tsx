import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import AppText from '../common/AppText';

type Props = {
    end: number;
    suffix?: string;
};

const AnimatedCounter = ({ end, suffix = '+' }: Props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;

        const duration = 1200;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;

            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [end]);

    return (
        <AppText
            variant="bold"
            className="text-3xl text-center"
        >
            {count}
            {suffix}
        </AppText>
    );
};

export default AnimatedCounter;