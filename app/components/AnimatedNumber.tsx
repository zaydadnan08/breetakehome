import React from 'react';
import { TextInput } from 'react-native';
import Animated, { useAnimatedProps, useDerivedValue, withTiming } from 'react-native-reanimated';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

interface AnimatedNumberProps {
  value: Animated.SharedValue<number>;
  style: any; 
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value , style}) => {
  const animatedValue = useDerivedValue(() => {
    return withTiming(value.value, { duration: 500 });
  });

  const animatedProps = useAnimatedProps(() => {
    const formattedValue = `$${animatedValue.value.toFixed(2).toLocaleString()}`;
    return {
      text: formattedValue,
      defaultValue: formattedValue,
    };
  });
  

  return (
    <AnimatedTextInput
      style={style}
      animatedProps={animatedProps}
      editable={false}
    />
  );
};

export default AnimatedNumber;
