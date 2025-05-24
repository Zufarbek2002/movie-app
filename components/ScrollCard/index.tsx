import { image185 } from "@/api";
import { h, w } from "@/constants/Window";
import { MovieI } from "@/types/Movie";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function ScrollCard({
  data,
  title
}: {
  data: MovieI[];
  title: string
}) {
  return (
    <View className="flex gap-y-2 mb-2">
      <Text className="text-white text-2xl">{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item) => (
          <View key={item.id} className="flex flex-col gap-2">
            <Image
              source={{ uri: image185(item.poster_path) ?? "" }}
              style={{
                height: h * 0.2,
                width: w * 0.3,
                marginRight: 5,
                marginLeft: 5
              }}
            />
            <Text className="text-white text-xl">
              {item.title.length > 12
                ? item.title.slice(0, 12) + "..."
                : item.title}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
