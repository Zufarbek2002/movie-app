import { image185 } from "@/api";
import { ActorsI } from "@/types/Actors";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Actors({
  data,
  title,
}: {
  data: ActorsI[];
  title: string;
}) {
  const router = useRouter();
  return (
    <View className="mt-4 mb-4">
      <Text className="text-white text-2xl tracking-tight mb-2 mx-4">
        {title}
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 0 }}
      >
        {data.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            className="mr-2 ml-2 items-center"
            onPress={() =>
              router.push({
                pathname: "/(screens)/actorDetail",
                params: { id: item.id },
              })
            }
          >
            <View className="overflow-hidden rounded-full w-20 h-20 items-center border border-neutral-500 ">
              <Image
                source={{ uri: image185(item?.profile_path) ?? undefined }}
                className="rounded-2xl h-24 w-20"
              />
            </View>
            <Text className="text-white font-semibold text-xs">
              {item.character.length > 12
                ? item.character.slice(0, 12) + "..."
                : item.character}
            </Text>
            <Text className="text-neutral-400 font-semibold text-xs">
              {item.original_name.length > 12
                ? item.original_name.slice(0, 12) + "..."
                : item.original_name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
