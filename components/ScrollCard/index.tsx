import { image185 } from "@/api";
import { h, w } from "@/constants/Screen";
import { MovieI } from "@/types/Movie";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function ScrollCard({
  data,
  title,
}: {
  data: MovieI[];
  title: string;
}) {
  const router = useRouter();
  return (
    <View className="mb-8 space-y-2">
      <Text className="text-white text-2xl mb-3 mx-4">{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data?.map((item) => (
          <TouchableWithoutFeedback
            onPress={() =>
              router.push({
                pathname: "/(screens)/movieDetail",
                params: { id: item.id },
              })
            }
            key={item.id}
          >
            <View>
              <Image
                source={{ uri: image185(item.poster_path) ?? "" }}
                style={{
                  width: w * 0.3,
                  height: h * 0.25,
                  borderRadius: 10,
                  marginRight: 10,
                }}
              />
              <Text className="text-white">
                {item.title.length > 12
                  ? item.title.slice(0, 12) + "..."
                  : item.title}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
}
