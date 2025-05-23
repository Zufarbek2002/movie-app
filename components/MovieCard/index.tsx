import { image185, image500 } from "@/api";
import { MovieI } from "@/types/Movie";
import React from "react";
import { Dimensions, Image, Text, View } from "react-native";

export default function MovieCard({ item }: { item: MovieI }) {
  const { width, height } = Dimensions.get("window");
  return (
    <View>
      <Image
        source={{ uri: image500(item.poster_path) ?? "" }}
        style={{
          width: width * 0.7,
          height: height * 0.5,
          margin: "auto",
          borderRadius: 10,
        }}
      />
    </View>
  );
}
