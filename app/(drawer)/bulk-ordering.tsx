import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

const BulkOrdering = ({ end = 0 }: { end?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!end || isNaN(end)) return;

    let start = 0;

    const duration = 1000;
    const increment = end / (duration / 21);

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

  return <Text>{count}+</Text>;
};

export default BulkOrdering;