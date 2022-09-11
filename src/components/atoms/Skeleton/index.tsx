import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import { useTheme } from "styled-components";
import { ISkeleton } from "./types";

const Skeleton = ({ width, height }: ISkeleton) => {
  const pulseAnim = useRef(new Animated.Value(0)).current;
  const theme = useTheme();

  useEffect(() => {
    const sharedAnimationConfig = {
      duration: 1000,
      useNativeDriver: true,
    };
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          ...sharedAnimationConfig,
          toValue: 1,
          easing: Easing.out(Easing.ease),
        }),
        Animated.timing(pulseAnim, {
          ...sharedAnimationConfig,
          toValue: 0,
          easing: Easing.in(Easing.ease),
        }),
      ])
    ).start();

    return () => {
      pulseAnim.stopAnimation();
    };
  }, []);

  const opacityAnim = pulseAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.05, 0.15],
  });

  return (
    <Animated.View
      style={[
        { backgroundColor: theme?.colors.loading },
        { width, height },
        { opacity: opacityAnim },
      ]}
    />
  );
};

export default Skeleton;
