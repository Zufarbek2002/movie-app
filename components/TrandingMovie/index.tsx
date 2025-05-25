import React from "react";
import { Dimensions, View } from "react-native";
import MovieCard from "../MovieCard";
import Carousel from "react-native-reanimated-carousel";
import { useSharedValue } from "react-native-reanimated";
import { MovieI } from "@/types/Movie";

export default function TrendingMovie({ trending }: { trending: MovieI[] }) {
  const { width, height } = Dimensions.get("window");
  const progress = useSharedValue<number>(0);
  const renderItem = ({ item }: { item: MovieI }) => {
    return <MovieCard item={item} />;
  };
  if (!trending.length) return null;
  return (
    <View>
      <Carousel
        data={trending}
        renderItem={renderItem}
        height={height * 0.5}
        loop={true}
        pagingEnabled={true}
        snapEnabled={true}
        width={width}
        style={{
          width: width,
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 145,
        }}
        onProgressChange={(_, absoluteProgress) => {
          progress.value = absoluteProgress;
        }}
      />
    </View>
  );
}
