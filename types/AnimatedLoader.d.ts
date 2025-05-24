declare module 'react-native-animated-loader' {
    import { Component } from 'react';
    import { ViewStyle } from 'react-native';

    export interface AnimatedLoaderProps {
        visible?: boolean;
        overlayColor?: string;
        source: any; // lottie file — require('...') ko‘rinishida
        animationStyle?: ViewStyle;
        speed?: number;
        onLoad?: () => void;
        onAnimationFinish?: () => void;
    }

    export default class AnimatedLoader extends Component<AnimatedLoaderProps> { }
}
