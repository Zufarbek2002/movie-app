import { image500 } from "@/api";
import { h, w } from "@/constants/Screen";
import { MovieI } from "@/types/Movie";
import { useRouter } from "expo-router";
import React from "react";
import { Image, TouchableWithoutFeedback } from "react-native";

export default function MovieCard({ item }: { item: MovieI }) {
  const router = useRouter();
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        router.push({
          pathname: "/(screens)/movieDetail",
          params: { id: item.id },
        })
      }
    >
      <Image
        source={{ uri: image500(item.poster_path) ?? "" }}
        style={{
          width: w * 0.7,
          height: h * 0.5,
          margin: "auto",
          borderRadius: 10,
        }}
      />
    </TouchableWithoutFeedback>
  );
}
