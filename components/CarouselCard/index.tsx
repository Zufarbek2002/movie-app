import React from "react";
import { View } from "react-native";
import MovieCard from "../MovieCard";
import Carousel from "react-native-reanimated-carousel";
import { useSharedValue } from "react-native-reanimated";
import { MovieI } from "@/types/Movie";
import { h, w } from "@/constants/Window";

export default function CarouselCard({ data }: { data: MovieI[] }) {
  const progress = useSharedValue<number>(0);
  const renderItem = ({ item }: { item: MovieI }) => {
    return <MovieCard item={item} />;
  };
  if (!data.length) return null;
  return (
    <View>
      <Carousel
        data={data}
        renderItem={renderItem}
        height={h * 0.45}
        loop={true}
        pagingEnabled={true}
        snapEnabled={true}
        width={w}
        style={{
          width: w,
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 210,
        }}
        onProgressChange={(_, absoluteProgress) => {
          progress.value = absoluteProgress;
        }}
      />
    </View>
  );
}
