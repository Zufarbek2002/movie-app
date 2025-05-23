import { image185 } from "@/api";
import { MovieI } from "@/types/Movie";
import React from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";

export default function TopRatedMovie({
  topRated,
  title,
}: {
  topRated: MovieI[];
  title: string;
}) {
  const { width, height } = Dimensions.get("window");
  return (
    <View className="mb-8 space-y-2">
      <Text className="text-white text-2xl mb-3">{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {topRated.map((item) => (
          <View className="" key={item.id}>
            <Image
              source={{ uri: image185(item.poster_path) ?? "" }}
              style={{
                width: width * 0.3,
                height: height * 0.25,
                borderRadius: 10,
                marginRight: 10,
              }}
            />
            <Text className="text-white">
              {item.title.length > 12
                ? item.title.slice(0, 12) + '...'
                : item.title}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
